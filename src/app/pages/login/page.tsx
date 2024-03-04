"use client";

import Link from "next/link";
import "./LogIn.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { checkEmail } from "../../API/logIn";
import { setCurrentUser } from "@/app/API/general";

export default function LogIn() {
  const router = useRouter();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [validationMessage, setValidationMessage] = useState("");

  const validateForm = () => {
    if (!inputs.email.trim()) {
      setValidationMessage("email is required");
      return false;
    }
    if (inputs.password.length < 6) {
      setValidationMessage("Password must be at least 8 characters long");
      return false;
    }
    setValidationMessage("");
    return true;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (validateForm()) {
      let user = await checkEmail(inputs.email);
      if (user) {
        console.log(user);
        if (user.password === inputs.password) {
          await setCurrentUser(user);

          switch (user.type) {
            case "Admin":
              router.push("/pages/admin");

              break;
            case "Creator":
              router.push("/pages/creator");

              break;
            case "Consumer":
              router.push("/pages/buyerHomePage");
              break;
          }
        } else {
          setValidationMessage("password is wrong");
        }
      } else {
        setValidationMessage("Email does not exist");
      }
    }
  };

  return (
    <div className="full_height flex_center">
      <div className="login_container">
        <div className="login_title">Log in</div>
        <form onSubmit={handleSubmit}>
          <div className="login_label">Email</div>
          <input
            className="login_input_username"
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            placeholder="Email"
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
