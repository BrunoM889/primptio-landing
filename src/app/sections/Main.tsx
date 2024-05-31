import { Button, TechStack } from "../components";
import { AppContextType } from "../resources/types";
import { mainContent } from "../resources/text-content";

function Main({ appState }: { appState: AppContextType }) {
  const content = appState.language === "Eng" ? mainContent.es : mainContent.en;

  return (
    <section className="w-full pt-24 flex flex-col h-[83vh] min-h-[650px] max-[600px]:min-h-[700px] pb-4">
      <h1
        className="text-6xl font-light mb-4 max-[500px]:text-4xl"
        style={{
          textShadow: `0 0 15px ${appState.mode ? `#ffffff80` : `#00000080`}`,
        }}
      >
        {content.title}
      </h1>
      <p className="opacity-70 ml-1 max-[600px]:text-xs">{content.subtitle}</p>
      <a href="#pricing" className="self-end mt-8">
        <Button content={content.buttonText} appState={appState} />
      </a>
      <TechStack mode={appState.mode} />
    </section>
  );
}

export default Main;
