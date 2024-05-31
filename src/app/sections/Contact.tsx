"use client";

import { SecondButton, DivLine } from "../components";
import { AppContextType } from "../resources/types";
import { contactContent } from "../resources/text-content";
import useForm from "../hooks/useForm";
import Toast from "../components/Toast";

function Contact({ appState }: { appState: AppContextType }) {
  const content =
    appState.language === "Eng" ? contactContent.es : contactContent.en;

  const inputsStyles = `${
    appState.mode
      ? `text-[#fff] border-[#1f1f1f]`
      : `text-[#000]  border-[#00000028] shadow-lg shadow-[#00000010]`
  } placeholder:text-[#464646] p-2 rounded-md max-[600px]:rounded text-sm outline-none bg-transparent border`;

  const { feedBack, setMessageData, handleSubmit, messageData } = useForm(
    appState.language
  );

  return (
    <section
      className="w-full flex min-h-[650px] pt-24 pb-4 flex-wrap z-10"
      id="contact"
    >
      <DivLine appState={appState} />
      <div className="w-[40%] max-[903px]:w-full min-[904px]:mr-6 mb-6">
        <h2
          style={{
            textShadow: `0 0 15px ${appState.mode ? `#ffffff80` : `#00000080`}`,
          }}
          className="text-6xl font-light mb-2 max-[500px]:text-4xl"
        >
          {content.title}
        </h2>
        <p className="ml-1 opacity-70">{content.subtitle}</p>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="grow flex flex-col gap-4 mt-3 pb-12"
      >
        <div className="w-full flex gap-2 flex-wrap">
          <input
            autoComplete="none"
            type="text"
            placeholder={appState.language === "Eng" ? "Nombre" : "Name"}
            maxLength={20}
            onChange={(e) =>
              setMessageData({ ...messageData, name: e.target.value })
            }
            value={messageData.name}
            className={`w-[35%] max-[500px]:w-full h-11 ${inputsStyles} `}
          />
          <input
            autoComplete="none"
            type="email"
            placeholder="Email"
            maxLength={50}
            value={messageData.email}
            onChange={(e) =>
              setMessageData({ ...messageData, email: e.target.value })
            }
            className={`grow h-11 ${inputsStyles} `}
          />
        </div>
        <textarea
          className={`resize-none h-64 w-full ${inputsStyles}`}
          autoComplete="none"
          placeholder={appState.language === "Eng" ? "Mensaje" : "Message"}
          value={messageData.message}
          onChange={(e) =>
            setMessageData({ ...messageData, message: e.target.value })
          }
          maxLength={500}
        />
        <SecondButton
          content={content.buttonText}
          appState={appState}
          style="self-end px-6 h-11 max-[600px]:w-full"
        />
      </form>
      {feedBack !== "" && <Toast theme={appState.mode} message={feedBack} />}
    </section>
  );
}

export default Contact;
