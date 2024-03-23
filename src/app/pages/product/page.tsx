"use client";

import "./product.css";
import "../buyerHomePage/buyerHomePage.css";
import { img } from "@/app/assets";
import { useEffect, useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface CardProps {
  title: string;
  img: StaticImageData;
  price: string;
  author: string;
}
interface FilterProps {
  text: string;
  index: number;
}

let product = {
  title: "",
  description: "",
  artistName: "",
  assets: [
    {
      title: "",
      img: "",
      price: "",
    },
  ],
};

const filters = ["All", "Recent", "Low To High"];

export default function Product() {
  const [activeTab, setActiveTab] = useState(0);
  const [pageNum] = useState(Math.round(product.assets.length / 8));
  const [assetSelector, setAssetSelector] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const [selectedAssets, setSelectedAssets] = useState<any>([
    ...product.assets,
  ]);

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

  function Card({ title, img, price, author }: CardProps) {
    return (
      <Link href={"/pages/product"}>
        <div>
          <Image
            src={img}
            alt="../../assets/images/neon.png"
            width={250}
            height={150}
            className="buyerPage_card_img"
          />
          <div className="buyerPage_card">
            <div className="buyerPage_card_title">{title}</div>
            <div className="buyerPage_card_author">{author}</div>
            <hr />
            <div className="flex">
              <div className="buyerPage_card_bidding">Open bidding</div>
              <div className="flex_grow" />
              <div className="buyerPage_card_price">{price}</div>
            </div>
            <button
              // onClick={() => onDelete(index)}
              className="dashboard_mint_button"
            >
              Buy!
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
    let tempAssets: any = [];
    for (let index = assetSelector; index < assetSelector + 8; index++) {
      product.assets[index]
        ? tempAssets.push(product.assets[index])
        : undefined;
    }
    setSelectedAssets([...tempAssets]);
  }, []);
  useEffect(() => {
    let tempAssets: any = [];
    for (let index = assetSelector; index < assetSelector + 8; index++) {
      product.assets[index]
        ? tempAssets.push(product.assets[index])
        : undefined;
    }
    setSelectedAssets([...tempAssets]);
  }, [activeTab, activePage]);

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
            ({ author, img, price, title }: CardProps, index: any) => (
              <Card
                author={author}
                img={img}
                price={price}
                title={title}
                key={title + index}
              />
            )
          )}
        </div>
        <div className="flex buyerPage_bottom_container">
          <div className="buyerPage_result">
            {"Results " + (assetSelector + 1) + " - " + (assetSelector + 8)}
            <span>{" out of " + product.assets.length}</span>
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
