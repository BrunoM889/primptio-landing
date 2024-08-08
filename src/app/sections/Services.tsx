"use client";

import { Button, DivLine } from "../components";
import { AppContextType } from "../resources/types";
import { services as servicesContent } from "../resources/text-content";
import "react-slideshow-image/dist/styles.css";
import { useState, useEffect } from "react";
import { pricingContent } from "../resources/text-content";
import Link from "next/link";
import ServicesSlides from "../components/services/ServicesSlides";

function Pricing({ appState }: { appState: AppContextType }) {
  const [update, setUpdate] = useState<boolean>(false);

  const content =
    appState.language === "Eng" ? pricingContent.es : pricingContent.en;

  // Cards text content
  const services =
    appState.language === "Esp" ? servicesContent.en : servicesContent.es;

  useEffect(() => {
    setUpdate(!update);
  }, [appState.mode]);

  return (
    <section
      className="w-full flex flex-col h-fit min-h-[650px] pt-24"
      id="pricing"
    >
      <DivLine appState={appState} />

      <div className="w-full min-h-[650px] fastCharge">
        <h2
          style={{
            textShadow: `0 0 15px ${appState.mode ? `#ffffff80` : `#00000080`}`,
          }}
          className="text-6xl font-light mb-4 max-[500px]:text-4xl"
        >
          {content.title}
        </h2>
        <p className="mb-12 ml-1 opacity-70">{content.subtitle}</p>

        <ServicesSlides appState={appState} services={services} />
      </div>

      {/* ------------------------------------------------------------------ */}
    </section>
  );
}

export default Pricing;
