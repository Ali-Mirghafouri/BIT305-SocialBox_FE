"use client";

import Image, { StaticImageData } from "next/image";
import "./buyerHomePage.css";
import { img } from "@/app/assets";
import { useEffect, useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Link from "next/link";
import { getCollections } from "@/app/API/collection";

interface CardProps {
  title: string;
  img: StaticImageData;
  price: string;
  author: string;
  index: number;
  nfts: {
    img_url: string;
    name: string;
    transaction: string;
  }[];
}
interface FilterProps {
  text: string;
  index: number;
}

export default function BuyerHomePage() {
  const [activeTab, setActiveTab] = useState(0);
  const [assets, setAssets] = useState<any>([]);
  const [assetSelector, setAssetSelector] = useState(0);
  const [pageNum] = useState(Math.round(assets.length / 8));
  const [activePage, setActivePage] = useState(1);
  const [selectedAssets, setSelectedAssets] = useState<any>([...assets]);

  const filters = ["All", "Recent", "Low To High"];

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

  function Card({ title, img, price, author, index, nfts }: CardProps) {
    return (
      <Link href={{ pathname: "/pages/product", query: { nfts: JSON.stringify(nfts) } }}>
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
      assets[index] ? tempAssets.push(assets[index]) : undefined;
    }
    getCollections().then((data) => {
      let temp: any = [];
      for (let index = 0; index < data.length; index++) {
        temp.push({
          author: data[index].creator,
          img: data[index].NFTs[0].img_url,
          title: data[index].collectionName,
          price: "0.9ETH",
          nfts: data[index].NFTs,
        });
      }
      console.log(temp);

      setAssets([...temp]);
    });

    setSelectedAssets([...tempAssets]);
  }, []);
  useEffect(() => {
    let tempAssets: any = [];
    for (let index = assetSelector; index < assetSelector + 8; index++) {
      assets[index] ? tempAssets.push(assets[index]) : undefined;
    }
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
            ({ author, img, price, title, nfts }: CardProps, index: any) => (
              <Card
                author={author}
                img={img}
                price={price}
                title={title}
                key={title + index}
                index={index}
                nfts={nfts}
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
