"use client";

import "./product.css";
import "../buyerHomePage/buyerHomePage.css";
import { useEffect, useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";

interface CardProps {
  name: string;
  img_url: string;
  transaction: string;
}
interface FilterProps {
  text: string;
  index: number;
}

const filters = ["All", "Recent", "Low To High"];

export default function Product(context: any) {
  const [assets, setAssets] = useState([]);
  console.log(assets);

  const [activeTab, setActiveTab] = useState(0);
  const [pageNum] = useState(Math.round(assets.length / 8));
  const [assetSelector, setAssetSelector] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const [selectedAssets, setSelectedAssets] = useState<any>([...assets]);

  function Filter({ text, index }: FilterProps) {
    return (
      <button
        onClick={() => {
          setActiveTab(index);
        }}
        className={
          index === activeTab
            ? "buyerPage_filter_button_active"
            : "buyerPage_filter_button"
        }
      >
        {text}
      </button>
    );
  }

  function Card({ name, img_url, transaction }: CardProps) {
    const onView = async (trans: string) => {
      const response = await axios.post("http://localhost:4000/getTokenID", {
        data: trans,
      });
      console.log(response);
      let res = response.data.data;
      let a = document.createElement("a");
      a.href =
        "https://opensea.io/assets/matic/" +
        res.contract_address +
        "/" +
        res.token_id;
      a.target = "_blank";
      a.click();
    };

    return (
      <Link href={"/pages/product"}>
        <div>
          <Image
            src={img_url}
            alt="../../assets/images/neon.png"
            width={250}
            height={150}
            className="buyerPage_card_img"
          />
          <div className="buyerPage_card">
            <div className="buyerPage_card_title">{name}</div>
            {/* <div className="buyerPage_card_author">{author}</div> */}
            <hr />
            <div className="flex">
              <div className="buyerPage_card_bidding">Open bidding</div>
              <div className="flex_grow" />
              {/* <div className="buyerPage_card_price">{price}</div> */}
            </div>
            <button
              onClick={() => onView(transaction)}
              className="dashboard_mint_button"
            >
              View!
            </button>
          </div>
        </div>
      </Link>
    );
  }

  function DisplayPagination() {
    let num = [];

    if (pageNum > 4) {
      for (let index = 1; index <= pageNum; index++) {
        num.push(index);
      }

      return (
        <div className="flex">
          <div
            onClick={() => {
              if (activePage !== 1) {
                setActivePage(activePage - 1);
                setAssetSelector(assetSelector - 8);
              }
            }}
          >
            <ArrowBackIosNewIcon />
          </div>
          {num.map((index) => {
            if (index === 1) {
              return (
                <div
                  key={index + "ye"}
                  className={
                    index === activePage
                      ? "buyerPage_page_num_active"
                      : "buyerPage_page_num"
                  }
                >
                  {index}
                </div>
              );
            }
            if (index < 4 && activePage < 4 && index !== 1) {
              return (
                <div
                  key={index + "ye"}
                  className={
                    index === activePage
                      ? "buyerPage_page_num_active"
                      : "buyerPage_page_num"
                  }
                >
                  {index}
                </div>
              );
            }

            if (index !== pageNum && index === 4 && activePage < 4) {
              return <div key={index + "ye"}>...</div>;
            }
            if (
              index !== pageNum &&
              index < activePage + 2 &&
              index > activePage - 2 &&
              activePage > 3
            ) {
              return (
                <div
                  key={index + "ye"}
                  className={
                    index === activePage
                      ? "buyerPage_page_num_active"
                      : "buyerPage_page_num"
                  }
                >
                  {index}
                </div>
              );
            }

            if (
              activePage > 3 &&
              (index == activePage + 2 || index == activePage - 2) &&
              index !== pageNum
            ) {
              return <div key={index + "ye"}>...</div>;
            }

            if (index === pageNum) {
              return (
                <div
                  key={index + "ye"}
                  className={
                    index === activePage
                      ? "buyerPage_page_num_active"
                      : "buyerPage_page_num"
                  }
                >
                  {index}
                </div>
              );
            }
          })}
          <div
            onClick={() => {
              if (activePage !== pageNum) {
                setActivePage(activePage + 1);
                setAssetSelector(assetSelector + 8);
              }
            }}
          >
            <ArrowForwardIosIcon />
          </div>
        </div>
      );
    } else {
      for (let index = 1; index <= pageNum; index++) {
        num.push(index);
      }

      return (
        <div className="flex">
          <div
            onClick={() => {
              if (activePage !== 1) {
                setActivePage(activePage - 1);
                setAssetSelector(assetSelector - 7);
              }
            }}
          >
            <ArrowBackIosNewIcon />
          </div>
          {num.map((index) => (
            <div
              key={index + "yes"}
              className={
                index === activePage
                  ? "buyerPage_page_num_active"
                  : "buyerPage_page_num"
              }
            >
              {index}
            </div>
          ))}
          <div
            onClick={() => {
              if (activePage !== pageNum) {
                setActivePage(activePage + 1);
                setAssetSelector(assetSelector + 7);
              }
            }}
          >
            <ArrowForwardIosIcon />
          </div>
        </div>
      );
    }
  }

  useEffect(() => {
    if (context.searchParams.nfts) {
      setAssets(JSON.parse(context.searchParams.nfts));
    }
  }, []);

  useEffect(() => {
    let tempAssets: any = [];
    for (let index = assetSelector; index < assetSelector + 8; index++) {
      assets[index] ? tempAssets.push(assets[index]) : undefined;
    }
    setSelectedAssets([...tempAssets]);
  }, []);
  useEffect(() => {
    let tempAssets: any = [];
    for (let index = assetSelector; index < assetSelector + 8; index++) {
      assets[index] ? tempAssets.push(assets[index]) : undefined;
    }
    console.log(tempAssets);

    setSelectedAssets([...tempAssets]);
  }, [activeTab, activePage, assets]);

  return (
    <div className="buyerPage ">
      <div className="buyerPage_border">
        {/* <div className="buyerPage_title">Cryptographs</div> */}
        <div className="buyerPage_filter">
          {filters.map((text, index) => (
            <Filter text={text} index={index} key={text + index} />
          ))}
        </div>
        <div className="buyerPage_imgList">
          {selectedAssets.map(
            ({ img_url, name, transaction }: CardProps, index: any) => (
              <Card
                img_url={img_url}
                name={name}
                key={name + index}
                transaction={transaction}
              />
            )
          )}
        </div>
        <div className="flex buyerPage_bottom_container">
          <div className="buyerPage_result">
            {"Results " + (assetSelector + 1) + " - " + (assetSelector + 8)}
            <span>{" out of " + assets.length}</span>
          </div>
          <div className="flex_grow" />
          <div className="buyerPage_page">
            <DisplayPagination />
          </div>
        </div>
      </div>
    </div>
  );
}
