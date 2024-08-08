import { Slide } from "react-slideshow-image";
import ServicesCard from "./ServicesCard";
import { AppContextType, ServiceType } from "@/app/resources/types";
import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "../Button";

interface Props {
  appState: AppContextType;
  services: ServiceType[];
}

function ServicesSlides({ appState, services }: Props) {
  const [arr1, setArr1] = useState<number[]>([]);
  const [arr2, setArr2] = useState<number[]>([]);
  const [toAdd, setToAdd] = useState<number>(3);

  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    console.log(width);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (width >= 600) {
      setArr1([0, 3, 6]);
      setArr2([9, 12, 15]);
      setToAdd(3);
    } else if (width < 600 && width >= 450) {
      setArr1([0, 2, 4, 6, 8]);
      setArr2([8, 10, 12, 14, 16, 18]);
      setToAdd(2);
    } else if (width < 450) {
      setArr1([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
      setArr2([9, 10, 11, 12, 13, 14, 15, 16, 17, 18]);
      setToAdd(1);
    }
  }, [width]);

  if (width == 0) return;
  return (
    <div className="w-[90vw] max-w-[1000px] rounded min-h-[500px] show">
      <Slide
        duration={toAdd == 3 ? 3000 : 2000}
        transitionDuration={toAdd == 3 ? 1000 : 500}
        arrows={true}
        autoplay={true}
        pauseOnHover={true}
        cssClass="mb-6 w-full"
      >
        {arr1.map((index) => {
          return (
            <div className="flex gap-3  w-[90%]  m-auto" key={index}>
              {services.slice(index, index + toAdd).map((service, index) => {
                return (
                  <ServicesCard
                    service={service}
                    key={index}
                    theme={appState.mode}
                  />
                );
              })}
            </div>
          );
        })}
      </Slide>
      <Slide
        duration={toAdd == 3 ? 3500 : 2000}
        transitionDuration={toAdd == 3 ? 1000 : 500}
        arrows={true}
        autoplay={true}
        pauseOnHover={true}
        cssClass="w-full"
      >
        {arr2.map((index) => {
          return (
            <div className="flex gap-3  w-[90%]  m-auto" key={index}>
              {services.slice(index, index + toAdd).map((service, index) => {
                return (
                  <ServicesCard
                    service={service}
                    key={index}
                    theme={appState.mode}
                  />
                );
              })}
            </div>
          );
        })}
      </Slide>
      <div className="w-full flex justify-center mt-12">
        <Link href={"#contact"} className="w-[300px] max-[600px]:w-[90%]">
          <Button
            content={
              appState.language === "Eng" ? "Me interesa" : "I'm interested"
            }
            style="px-3 py-2 max-[600px]:w-full w-[300px] "
            appState={appState}
          />
        </Link>
      </div>
    </div>
  );
}

export default ServicesSlides;
