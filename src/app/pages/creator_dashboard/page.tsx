"use client";

import { useEffect, useState } from "react";
import "./page.css";
import Image from "next/image";
import { getAssets } from "@/app/API/creator";
import axios from "axios";
import { removeAsset } from "@/app/API/creator";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import "../../output.css";
import Link from "next/link";
import { CollectionInputs } from "./form";
import { getCurrentUser } from "@/app/API/general";
import { setCollection } from "@/app/API/collection";

export default function CreatorDashboard() {
  const [tab, setTab] = useState(0);
  const [ref, setRef] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [assets, setAssets] = useState<any>("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [inputs, setInputs] = useState<any>({
    name: "",
    iteration: 1,
  });
  const [validationMessage, setValidationMessage] = useState("");

  const validateForm = () => {
    if (!inputs.name.trim()) {
      setValidationMessage("name is required");
      return false;
    }
    setValidationMessage("");
    return true;
  };

  const handleSubmit = async () => {
    console.log(assets);

    if (validateForm()) {
      let currentUser = await getCurrentUser();
      setModal(false);
      try {
        setIsLoading(true);
        try {
          const response = await axios.post(
            "http://localhost:4000/save-images",
            { assets: assets, iteration: inputs.iteration }
          );
          let res = JSON.parse(response.data.data);
          console.log(res);
          // let res = [
          //   {
          //     transaction: "hash",
          //     name: "mint.name",
          //     img_url: "meta.file_url",
          //   },
          //   {
          //     transaction: "hash",
          //     name: "mint.name",
          //     img_url: "meta.file_url",
          //   },
          //   {
          //     transaction: "hash",
          //     name: "mint.name",
          //     img_url: "meta.file_url",
          //   },
          // ];
          let tempVal = {
            collectionName: inputs.name,
            NFTs: [...res],
            creator: currentUser.username,
            creatorEmail: currentUser.email,
          };

          setCollection(tempVal);
          // console.table(JSON.parse(response.data));
          // Handle success
        } catch (error) {
          console.error("Failed to save images:", error);
          // Handle errors
        }
        setIsLoading(false);
        onOpen();
      } catch (err) {
        console.log(err);
      }
    }
  };

  const LoadingScreen = () => (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 100,
      }}
    >
      <div
        style={{
          border: "6px solid rgba(255, 255, 255, 0.2)",
          borderTop: "6px solid #fff",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          animation: "spin 1s linear infinite",
        }}
      ></div>
    </div>
  );

  console.log("relode");

  useEffect(() => {
    let assets = getAssets();
    assets.then((res) => (res === "" ? setAssets("") : setAssets(res)));
  }, []);
  useEffect(() => {
    let assets = getAssets();
    assets.then((res) => (res === "" ? setAssets("") : setAssets(res)));
  }, [tab, ref]);
  const tabs = ["Face", "Eyes", "Hair", "Accessories"];
  const imgTabs = ["face", "eye", "hair", "accessory"];

  interface cardProps {
    name: string;
    type: string;
    description: string;
    url: any;
    index: number;
  }

  const Card = ({ url, name, description, type, index }: cardProps) => {
    let onDelete = async () => {
      await removeAsset(index);
      setRef(ref + 1);
    };

    return type === imgTabs[tab] ? (
      <div key={name} className="dashboard_card">
        <Image
          width={160}
          height={160}
          className="dashboard_img"
          src={url}
          alt={name}
        />
        <div className="dashboard_img_title">{name}</div>
        <div className="dashboard_card_delete_container">
          <button
            onClick={() => onDelete()}
            className="dashboard_delete_button"
          >
            Delete
          </button>
        </div>
      </div>
    ) : (
      <></>
    );
  };

  return (
    <div className="dashboard">
      {isLoading && <LoadingScreen />}
      {modal && (
        <CollectionInputs
          assets={assets}
          inputs={inputs}
          setInputs={setInputs}
          setModal={setModal}
          mint={handleSubmit}
        />
      )}
      <div className="flex">
        {tabs.map((t, index) => (
          <div
            key={index}
            onClick={() => setTab(index)}
            className={
              index === tab ? "dashboard_tab_selected" : "dashboard_tab "
            }
          >
            {t}
          </div>
        ))}
      </div>
      <hr />
      <div className="dashboard_container flex">
        {assets !== "" && assets ? (
          assets.map(({ name, description, url, type }: any, index: number) => (
            <Card
              description=""
              key={name}
              name={name}
              url={url}
              type={type}
              index={index}
            />
          ))
        ) : (
          <div>no images</div>
        )}
      </div>
      <div className="dashboard_mint_button_container">
        <button
          onClick={() => setModal(true)}
          className="dashboard_mint_button"
        >
          Mint
        </button>
      </div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="dashboard_modal"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className="justify-center">
                <p className="text-background mt-2">10/10 images minted</p>
                <p className="text-background">Mint Complete</p>
                <p className="text-background">
                  check{" "}
                  <Link
                    className="dashboard_modal_link"
                    href={"https://opensea.io/collection/nftport-xyz-v5"}
                  >
                    {" "}
                    this link
                  </Link>
                </p>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
