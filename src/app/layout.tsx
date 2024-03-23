import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Context } from "./provider";
//web 3
import { cookieToInitialState } from "wagmi";
import { config } from "../../config";
import { ContextProvider } from "../../context";
import { headers } from "next/headers";
import { Header } from "./components/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SocialBox",
  description: "SocialBox",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialState = cookieToInitialState(config, headers().get("cookie"));

  return (
    <html lang="en">
      <head>
        {/* <link href="./output.css" rel="stylesheet" /> */}
        <link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Titan One"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css?family=Oswald"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css?family=Inter"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css?family=Open Sans"
          rel="stylesheet"
        ></link>
      </head>
      <body className={inter.className}>
        <Header />
        <ContextProvider initialState={initialState}>
          {children}
        </ContextProvider>
      </body>
    </html>
  );
}
