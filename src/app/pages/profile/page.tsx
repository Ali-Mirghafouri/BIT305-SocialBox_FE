"use client";

import { img } from "@/app/assets";
import Image from "next/image";
import "./profile.css";
import { setCurrentUser } from "@/app/API/general";
import Link from "next/link";

export default function Profile() {
  const onLogOut = () => {
    setCurrentUser({
      email: "",
      password: "",
      type: "",
      username: "",
      wallet: "",
    });
  };

  return (
    <div className="flex_center profile">
      <div>
        <Image
          className="profile_img_user"
          alt="user image"
          src={img.userImg}
        />
      </div>
      <div className="profile_username">Leslie Alexander</div>
      <div className="profile_details">
        youremail@domain.com | +01 234 567 89
      </div>
      <div className="profile_container profile_m26">
        <div className="profile_container_option">Edit profile information</div>
        <div className="profile_container_option">Change Password</div>
        <div className="profile_container_option">Language</div>
      </div>
      <div className="profile_container profile_m58">
        <div className="profile_container_option">Help & Support</div>
        <div className="profile_container_option">Contact us</div>
        <div className="profile_container_option">Privacy policy</div>
      </div>
      <Link href={"/"}>
        <button onClick={onLogOut} className="profile_button">
          Log Out Account
        </button>
      </Link>
    </div>
  );
}
