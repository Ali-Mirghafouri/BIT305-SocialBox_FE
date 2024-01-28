"use client";

import Link from "next/link";
import "./LogIn.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { checkEmail, checkPassword } from "../../API/signUp";


export default function LogIn() {
  const router = useRouter();
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [validationMessage, setValidationMessage] = useState("");

  const validateForm = () => {
    if (!inputs.username.trim()) {
      setValidationMessage("Username is required");
      return false;
    }
    if (inputs.password.length < 6) {
      setValidationMessage("Password must be at least 8 characters long");
      return false;
    }
    setValidationMessage("");
    return true;
  };

  // const writeUserData = (userId: string, name: string, password: string) => {

  //   set(ref(database, "users/" + userId), {
  //     username: name,
  //     password: password,
  //   });
  //   return true;
  // };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (validateForm()) {
      
      router.push("/pages/creator");
    }
  };

  return (
    <div className="full_height flex_center">
      <div className="login_container">
        <div className="login_title">Log in</div>
        <form onSubmit={handleSubmit}>
          <div className="login_label">User name</div>
          <input
            className="login_input_username"
            value={inputs.username}
            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
            placeholder="you name here"
          />
          <div className="login_label">Password</div>
          <input
            type="password"
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            value={inputs.password}
            className="login_input_password"
            placeholder="*******"
          />
          <div className="flex">
            <input type="checkbox" />
            <div className="login_remember">Remember me</div>
            <div className="flex_grow" />
            <div className="login_forgot">Forgot Password ?</div>
          </div>
          {validationMessage && (
            <div className="login_errorMessage">{validationMessage}</div>
          )}

          <button className="login_button">Log In</button>
        </form>

        <div className="login_signup flex_center">
          Don’t have an Account ?{" "}
          <Link href={"/pages/signUp"} className="login_signup_bold">
            Sign up
          </Link>{" "}
        </div>
      </div>
    </div>
  );
}
