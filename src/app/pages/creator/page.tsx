"use client";

import { img as IMG } from "@/app/assets";
import Image from "next/image";
import "./creator.css";
import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useRouter } from "next/navigation";
import { uploadAsset } from "@/app/API/creator";

interface previewProps {
  setIsShow: any;
  setInputs: any;
  inputs: any;
}

const Previews = ({ setIsShow, setInputs, inputs }: previewProps) => {
  const [files, setFiles] = useState<any>([]);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setInputs({
        ...inputs,
        url: acceptedFiles[0],
      });
      setFiles([
        {
          ...acceptedFiles[0],
          preview: URL.createObjectURL(acceptedFiles[0]),
        },
      ]);
    },
    onDragEnter: () => undefined,
    onDragLeave: () => undefined,
    onDragOver: () => undefined,
    multiple: true,
  });

  const thumbs = files.map((file: any) => {
    return (
      <div className="thumb" key={file.name}>
        <div className="thumbInner">
          <Image
            alt="preview"
            src={file.preview}
            className="creator_img"
            width={400}
            height={400}
            // Revoke data uri after image is loaded
            onLoad={() => {
              URL.revokeObjectURL(file.preview);
            }}
          />
        </div>
      </div>
    );
  });

  useEffect(() => {
    // console.log(files[0]);

    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    files.length !== 0 ? setIsShow({ state: true }) : setIsShow(false);

    return () =>
      files.forEach((file: any) => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <section className="preview_container">
      {files.length !== 0 ? (
        <div className={"thumbsContainer"}>{thumbs}</div>
      ) : (
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <Image
            src={IMG.uploadIcon}
            alt="upload icon"
            className="creator_upload_image"
          />
        </div>
      )}
    </section>
  );
};

export default function Creator() {
  const [isPreview, setIsPreview] = useState({ state: false });
  const router = useRouter();
  const [inputs, setInputs] = useState<any>({
    description: "",
    name: "",
    type: "",
    url: "",
  });
  const [validationMessage, setValidationMessage] = useState("");

  const validateForm = () => {
    if (!inputs.description.trim()) {
      setValidationMessage("Description is required");
      return false;
    }
    if (!inputs.name.trim()) {
      setValidationMessage("name is required");
      return false;
    }
    setValidationMessage("");
    return true;
  };

  const handleSubmit = () => {
    // console.log(inputs);
    if (validateForm()) {
      try {
      } catch (error) {}
      uploadAsset(inputs);
      router.push("/pages/creator_dashboard");
    }
  };

  return (
    <div className="flex_center full_height creator_page_border">
      <div className="flex">
        {/* <Image src={IMG.WebLogo} alt="web logo" className="webLogo" /> */}
        <div
          className="upload_container"
          style={{ marginRight: isPreview.state ? "0px" : "238px" }}
        >
          <div className={isPreview.state ? "creator_preview_container" : ""}>
            <Previews
              setInputs={setInputs}
              inputs={inputs}
              setIsShow={setIsPreview}
            />
            {isPreview.state ? (
              <>
                <div className="flex_grow" />
                <form className="full_width creator_form">
                  <div className="flex full_width">
                    <div className="full_width creator_mr18">
                      <div className="login_label">NFT name</div>
                      <input
                        className="creator_input_username"
                        value={inputs.name}
                        onChange={(e) =>
                          setInputs({ ...inputs, name: e.target.value })
                        }
                        placeholder="NFT name here"
                      />
                    </div>
                    <div className="full_width">
                      <div className="login_label">Type</div>
                      <select
                        className="signup_input signup_m24"
                        name="userType"
                        value={inputs.type}
                        onChange={(e) =>
                          setInputs({ ...inputs, type: e.target.value })
                        }
                      >
                        <option value="" disabled>
                          Select your image type
                        </option>
                        <option value="face">Face</option>
                        <option value="eye">Eyes</option>
                        <option value="hair">Hair</option>
                        <option value="accessory">Accessories</option>
                      </select>
                    </div>
                  </div>

                  <div className="login_label">Description</div>
                  <input
                    onChange={(e) =>
                      setInputs({ ...inputs, description: e.target.value })
                    }
                    value={inputs.description}
                    className="creator_input_password"
                    placeholder="Enter your NFT description"
                  />
                  {validationMessage && (
                    <div className="login_errorMessage">
                      {validationMessage}
                    </div>
                  )}
                </form>
              </>
            ) : (
              <></>
            )}
          </div>
          <button
            onClick={handleSubmit}
            className="mint_button creator_upload_button"
          >
            Upload Digital Asset
          </button>
        </div>
        {isPreview.state ? (
          <></>
        ) : (
          <div className="text_container">
            <div className="title">SocialBox</div>
            <div className="desc">
              Access the biggest scratch card battle in Web3 history with your
              Eden Pass! Earn USDC based on your Eden Battle Pass. No risk, no
              reward. So just do it! NFA!
            </div>
            <button className="mint_button">Mint Now</button>
            <div className="flex creator_social">
              <Image
                className="creator_social_icon"
                src={IMG.discord}
                alt="discord"
              />
              <Image
                className="creator_social_icon"
                src={IMG.twitter}
                alt="X"
              />
              <Image
                className="creator_social_icon"
                src={IMG.telegram}
                alt="telegram"
              />
              <Image
                className="creator_social_icon"
                src={IMG.openSea}
                alt="openSea"
              />
              <Image
                className="creator_social_icon"
                src={IMG.whitepaper}
                alt="whitepaper"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
