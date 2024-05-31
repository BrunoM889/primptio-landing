"use client";

import { services } from "@/app/resources/text-content";
import { AppContextType } from "@/app/resources/types";
import { IoReturnUpBackOutline } from "react-icons/io5";
import Button from "../Button";
import useForm from "@/app/hooks/useForm";
import Toast from "../Toast";

interface Props {
  planSelected: number;
  appState: AppContextType;
  setPlanSelected: (arg: number | null) => void;
}

function PricingForm({ planSelected, appState, setPlanSelected }: Props) {
  const plan =
    appState.language === "Eng"
      ? services.es[planSelected]
      : services.en[planSelected];

  const inputsStyles = `${
    appState.mode
      ? `text-[#fff] border-[#1f1f1f]`
      : `text-[#000]  border-[#00000028] shadow-lg shadow-[#00000010]`
  } placeholder:text-[#464646] p-2 rounded-md max-[600px]:rounded max-[600px]:text-xs outline-none bg-transparent border`;

  const backButtonClass = `self-end w-14 h-9 flex justify-center items-center border p-1 rounded ${
    appState.mode
      ? `border-[#1f1f1f] text-[#fff] placeholder:text-[#1f1f1f] hover:bg-[#131313]`
      : `border-[#00000028] shadow-lg shadow-[#00000010] text-[#000] hover:bg-[#d6d6d6] `
  } transition-all max-[1041px]:mb-2`;

  const { feedBack, setMessageData, handleSubmit, messageData } = useForm(
    appState.language
  );

  return (
    <form
      className="w-full min-h-[775px] flex flex-col fastCharge z-10"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <button
        type="button"
        className={backButtonClass}
        onClick={() => setPlanSelected(null)}
      >
        <IoReturnUpBackOutline className="h-7 w-7 cursor-pointer" />
      </button>
      <div className="flex w-full h-fit max-[1041px]:flex-col gap-4">
        <div className="gap-4 flex flex-col w-[55%] max-[1041px]:w-full">
          <h2
            style={{
              textShadow: `0 0 15px ${
                appState.mode ? `#ffffff80` : `#00000080`
              }`,
            }}
            className="text-6xl font-light max-[500px]:text-4xl"
          >
            {plan.title}
          </h2>
          <h3>
            $
            <strong className="text-3xl max-[500px]:text-xl mx-1 mr-2 relative top-[3px] font-semibold">
              {plan.price === 0 ? "?" : plan.price}
            </strong>
            {plan.price !== 0 && (
              <span>
                +
                {appState.language === "Esp"
                  ? " additional functionalities"
                  : " funcionalidades adicionales"}
              </span>
            )}
          </h3>
          <div className="opacity-70">
            {plan.completeDescription.map((desc, index) => (
              <p
                key={index}
                className="mb-2 text-sm max-[600px]:text-xs max-[350px]:text-[10px]"
              >
                {desc}
              </p>
            ))}

            <p className="mb-2 text-sm max-[600px]:text-xs max-[350px]:text-[10px]">
              {appState.language === "Eng"
                ? "Una vez que envíes el formulario con los datos de tu propuesta, nuestro equipo revisará la información y te enviará un correo electrónico detallado lo antes posible, este correo incluirá un presupuesto claro y desglosado, así como los tiempos estimados de entrega. "
                : "Once you submit the form with your proposal details, our team will review the information and send you a detailed email as soon as possible, this email will include a clear and itemized quote, as well as estimated delivery times."}
            </p>
          </div>
        </div>
        <div className="flex gap-2 flex-col mt-2 grow h-full">
          <input
            className={`${inputsStyles} h-11 w-full max-[600px]:h-9`}
            type="text"
            maxLength={20}
            placeholder={appState.language === "Esp" ? "Name" : "Nombre"}
            onChange={(e) =>
              setMessageData({ ...messageData, name: e.target.value })
            }
            value={messageData.name}
            autoComplete="none"
          />
          <input
            className={`${inputsStyles} h-11 max-[600px]:h-9`}
            type="email"
            placeholder="Email"
            maxLength={50}
            onChange={(e) =>
              setMessageData({ ...messageData, email: e.target.value })
            }
            value={messageData.email}
            autoComplete="none"
          />
          <textarea
            onChange={(e) =>
              setMessageData({ ...messageData, message: e.target.value })
            }
            placeholder={
              appState.language === "Eng"
                ? "Describe tu proyecto"
                : "Describe your project"
            }
            className={`${inputsStyles} resize-none grow ${
              appState.language === "Eng" ? "h-[312px]" : "h-[265px]"
            }`}
            value={messageData.message}
          />
          <Button
            content={
              appState.language === "Eng" ? "Enviar propuesta" : "Send proposal"
            }
            style="w-full max-[1041px]:w-fit max-[650px]:w-full self-end"
            appState={appState}
          />
        </div>
        {feedBack !== "" && <Toast theme={appState.mode} message={feedBack} />}
      </div>
    </form>
  );
}

export default PricingForm;
