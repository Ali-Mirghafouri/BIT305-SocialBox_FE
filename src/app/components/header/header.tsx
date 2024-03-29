"use client";

import "./header.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { img } from "@/app/assets";
import Image from "next/image";
import { getCurrentUser } from "@/app/API/general";
import { useEffect, useState } from "react";

export const Header = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    type: "",
    username: "",
    wallet: "",
  });
  let tabs = ["About", "Dashboard", "Collections", "Whitepaper", "Contact Us"];
  let tabsLink = [
    "",
    user.type === "Creator" ? "/pages/creator_dashboard" : "",
    "",
    "",
    "",
  ];
  const pathname = usePathname();

  const User = async () => {
    let tempUser: any = { ...(await getCurrentUser()) };
    if (tempUser) {
      setUser(tempUser);
    }
  };

  useEffect(() => {
    User();
    console.log(window.location.pathname);
  }, [pathname]);

  return (
    <div className="container">
      <div className="flex_align_center inner_container">
        <div className="flex_align_center">
          <Link href={user.type === "Creator" ? "/pages/creator" : "/"}>
            <Image className="logo" src={img.logo} alt="logo" />
          </Link>
          <Link href={user.type === "Creator" ? "/pages/creator" : "/"}>
            <div className="brand_name">SocialBox</div>
          </Link>
        </div>
        <div className="flex_grow" />
        {tabs.map((tab, index) => (
          <Link
            href={tabsLink[index]}
            style={{
              visibility:
                pathname === "/pages/login" || pathname === "/pages/signUp"
                  ? "hidden"
                  : "visible",
            }}
            key={tab}
            className="tab "
          >
            {tab}
          </Link>
        ))}
        <div
          style={{
            visibility:
              pathname === "/pages/login" || pathname === "/pages/signUp"
                ? "hidden"
                : "visible",
          }}
          className="flex_align_center"
        >
          {user.username ? (
            <Image
              className="user_image_valid"
              alt="user image"
              src={img.userImg}
            />
          ) : (
            <div className="user_image"></div>
          )}
          <Link
            href={user.username ? "/pages/profile" : "/pages/login"}
            className="username flex_align_center "
          >
            {user.username ? user.username : "Login / Sign up"}
          </Link>
        </div>
      </div>
    </div>
  );
};
