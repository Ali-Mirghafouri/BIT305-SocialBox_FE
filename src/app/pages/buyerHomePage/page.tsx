"use client";

import Image, { StaticImageData } from "next/image";
import "./buyerHomePage.css";
import { img } from "@/app/assets";
import { useState } from "react";

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

export default function BuyerHomePage() {
  const [activeTab, setActiveTab] = useState(0);
  const assets = [
    {
      img: img.neon,
      title: "Neon Aliens",
      author: "Creator 1",
      price: "0.9 ETH",
    },
    {
      img: img.neon,
      title: "Neon Aliens",
      author: "Creator 1",
      price: "0.9 ETH",
    },
    {
      img: img.neon,
      title: "Neon Aliens",
      author: "Creator 1",
      price: "0.9 ETH",
    },
    {
      img: img.neon,
      title: "Neon Aliens",
      author: "Creator 1",
      price: "0.9 ETH",
    },
    {
      img: img.neon,
      title: "Neon Aliens",
      author: "Creator 1",
      price: "0.9 ETH",
    },
    {
      img: img.neon,
      title: "Neon Aliens",
      author: "Creator 1",
      price: "0.9 ETH",
    },
    {
      img: img.neon,
      title: "Neon Aliens",
      author: "Creator 1",
      price: "0.9 ETH",
    },
    // {
    //   img: img.neon,
    //   title: "Neon Aliens",
    //   author: "Creator 1",
    //   price: "0.9 ETH",
    // },
    // {
    //   img: img.neon,
    //   title: "Neon Aliens",
    //   author: "Creator 1",
    //   price: "0.9 ETH",
    // },
    // {
    //   img: img.neon,
    //   title: "Neon Aliens",
    //   author: "Creator 1",
    //   price: "0.9 ETH",
    // },
    // {
    //   img: img.neon,
    //   title: "Neon Aliens",
    //   author: "Creator 1",
    //   price: "0.9 ETH",
    // },
    // {
    //   img: img.neon,
    //   title: "Neon Aliens",
    //   author: "Creator 1",
    //   price: "0.9 ETH",
    // },
    // {
    //   img: img.neon,
    //   title: "Neon Aliens",
    //   author: "Creator 1",
    //   price: "0.9 ETH",
    // },
    // {
    //   img: img.neon,
    //   title: "Neon Aliens",
    //   author: "Creator 1",
    //   price: "0.9 ETH",
    // },
  ];

  const filters = ["All", "Recent", "Low To High"];

  function Filter({ text, index }: FilterProps) {
    console.log(index);

    return (
      <button
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
    );
  }

  return (
    <div className="buyerPage ">
      <div className="buyerPage_border">
        {/* <div className="buyerPage_title">Cryptographs</div> */}
        <div className="buyerPage_filter">
          {filters.map((text, index) => (
            <Filter text={text} index={index} />
          ))}
        </div>
        <div className="buyerPage_imgList">
          {assets.map(({ author, img, price, title }) => (
            <Card author={author} img={img} price={price} title={title} />
          ))}
        </div>
        <div className="flex">
          <div className="buyerPage_result">results</div>
          <div className="flex_grow" />
          <div className="buyerPage_page">pages</div>
        </div>
      </div>
    </div>
  );
}
