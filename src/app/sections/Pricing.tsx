"use client";

import { Slide } from "react-slideshow-image";
import { DivLine, PriceCard, PricingForm } from "../components";
import { AppContextType } from "../resources/types";
import { services as servicesContent } from "../resources/text-content";
import "react-slideshow-image/dist/styles.css";
import { useState, useEffect } from "react";
import { pricingContent } from "../resources/text-content";

function Pricing({ appState }: { appState: AppContextType }) {
  const [arrowBool, setArrowBool] = useState<boolean>(true);

  const [planSelected, setPlanSelected] = useState<number | null>(null);

  const content =
    appState.language === "Eng" ? pricingContent.es : pricingContent.en;

  // Cards text content
  const services =
    appState.language === "Esp" ? servicesContent.en : servicesContent.es;

  // To disable the arrows in "mobile" mode
  useEffect(() => {
    if (document.documentElement.clientWidth < 500) {
      setArrowBool(false);
    } else {
      setArrowBool(true);
    }
  }, []);

  return (
    <section
      className="w-full flex flex-col h-fit min-h-[650px] pt-24"
      id="pricing"
    >
      <DivLine appState={appState} />

      {/* --> If has a plan selected, show the form, else show the cards <-- */}
      {planSelected !== null ? (
        <PricingForm
          planSelected={planSelected}
          appState={appState}
          setPlanSelected={setPlanSelected}
        />
      ) : (
        <div className="w-full min-h-[775px] fastCharge">
          <h2
            style={{
              textShadow: `0 0 15px ${
                appState.mode ? `#ffffff80` : `#00000080`
              }`,
            }}
            className="text-6xl font-light mb-4 max-[500px]:text-4xl"
          >
            {content.title}
          </h2>
          <p className="mb-12 ml-1 opacity-70">{content.subtitle}</p>

          {/* --> DEFAULT CARDS <-- */}
          <div className="flex w-full h-[600px] rounded max-[1032px]:hidden ">
            {services.map((service, index) => (
              <div className="w-full pb-4 flex justify-center" key={index}>
                <PriceCard
                  service={service}
                  appState={appState}
                  setPlanSelected={setPlanSelected}
                />
              </div>
            ))}
          </div>
          {/* <-- DEFAULT CARDS --> */}

          {/* --> MOBILE CARDS <-- */}
          <div className="w-[90vw] max-w-[1000px] rounded min-[1033px]:hidden min-h-[600px]">
            <Slide
              duration={2000}
              transitionDuration={500}
              autoplay={true}
              pauseOnHover={true}
              arrows={arrowBool}
            >
              {services.map((service, index) => (
                <div className="w-full pb-4 flex justify-center" key={index}>
                  <PriceCard
                    service={service}
                    appState={appState}
                    setPlanSelected={setPlanSelected}
                  />
                </div>
              ))}
            </Slide>
          </div>
          {/* <-- MOBILE CARDS --> */}
        </div>
      )}
      {/* ------------------------------------------------------------------ */}
    </section>
  );
}

export default Pricing;
