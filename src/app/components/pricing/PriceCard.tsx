"use client";

import { GoCheckCircle } from "react-icons/go";
import Button from "../Button";
import { AppContextType, ServiceType } from "@/app/resources/types";

interface Props {
  service: ServiceType;
  appState: AppContextType;
  setPlanSelected: (plan: number) => void;
}

function PriceCard({ service, appState, setPlanSelected }: Props) {
  const cardBorderClass = `w-[100%] max-w-[400px] min-w-[250px] h-full max-[800px]:min-h-[562px] p-[1px] rounded bg-gradient-to-b ml-1 shadow-lg ${
    appState.mode
      ? "from-[#303030] to-[#0c0c0c]"
      : "from-[#e0e0e0] to-[#e7e7e7]"
  }`;

  const cardClass = `w-full flex flex-col h-full max-[800px]:min-h-[562px] gap-4 text-sm p-4 py-6 bg-gradient-radial ${
    appState.mode
      ? "to-[#000000] from-[#0f0f0f]"
      : "to-[#ececec00] from-[#ffffff9a]"
  } rounded max-[755px]:text-[12px]`;

  return (
    <div className={cardBorderClass}>
      <div className={cardClass}>
        <div className="flex flex-col gap-1 relative">
          <h3 className="text-3xl">{service.title}</h3>
          <p className="mb-2 opacity-70 ">{service.description}</p>

          <div className="flex items-center gap-1 min-h-[35px]">
            $
            <h4 className="text-xl font-medium mr-[2px] max-[335px]:mr-0 max-[335px]:text-sm max-[335px]:font-semibold">
              {service.price === 0 ? "?" : service.price}
            </h4>{" "}
            <div className="flex flex-col">
              {service.price !== 0 && (
                <span className="text-xs max-[335px]:text-[10px]">
                  {" "}
                  +{" "}
                  {appState.language === "Esp"
                    ? "additional functionalities"
                    : "funcionalidades adicionales"}
                </span>
              )}
              {service.id !== 0 && (
                <span className="text-xs max-[335px]:text-[10px]">
                  {" "}
                  +{" "}
                  {appState.language === "Esp"
                    ? "maintenance costs"
                    : "costos de mantenimiento"}
                </span>
              )}
            </div>
          </div>
        </div>

        <div
          className={`w-full min-h-[1px] ${
            appState.mode ? "divisorDark" : "divisorLight"
          }`}
        />

        <ul className="flex flex-col grow gap-2 mb-2">
          {service.listOfPros.map((pro, index) => (
            <li key={index} className={`flex gap-2 items-center opacity-70`}>
              <GoCheckCircle className="min-w-[18px] min-h-[18px]" />
              {pro}
            </li>
          ))}
        </ul>

        <Button
          content={
            appState.language === "Eng" ? "Me interesa" : "I'm interested"
          }
          style="px-3 py-2"
          appState={appState}
          onClick={() => setPlanSelected(service.id)}
        />
      </div>
    </div>
  );
}

export default PriceCard;
