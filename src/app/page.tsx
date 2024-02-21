import "./page.css";
import { LandingPage } from "./pages/landing_page";

import { NextUIProvider } from "@nextui-org/react";

export default function Home() {
  return (
    <div className="full_height">
      <NextUIProvider>
        <LandingPage />
      </NextUIProvider>
    </div>
  );
}
