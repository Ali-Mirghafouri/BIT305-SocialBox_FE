"use client";

import { useEffect, useState } from "react";
import "./page.css";
import Image from "next/image";
import { getAssets } from "@/app/API/creator";

export default function CreatorDashboard() {
  const [tab, setTab] = useState(0);
  const [assets, setAssets] = useState<any>([]);

  useEffect(() => {
    let assets = getAssets();
    assets.then((res) => (res === "" ? setAssets("") : setAssets(res)));
  }, []);
  useEffect(() => {
    let assets = getAssets();
    assets.then((res) => (res === "" ? setAssets("") : setAssets(res)));
  }, [tab]);
  const tabs = ["Face", "Eyes", "Hair", "Accessories"];

  interface cardProps {
    name: string;
    type: string;
    description: string;
    url: any;
    index: number;
  }

  const Card = ({ url, name, description, type, index }: cardProps) => {
    let onDelete = (index: number) => {};

    return type === tabs[tab] ? (
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
            onClick={() => onDelete(index)}
            className="dashboard_mint_button"
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
        {assets !== "" ? (
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
          <div></div>
        )}
      </div>
    </div>
  );
}
