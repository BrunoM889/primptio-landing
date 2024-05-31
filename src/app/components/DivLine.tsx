import { AppContextType } from "../resources/types";

function DivLine({ appState }: { appState: AppContextType }) {
  return (
    <div
      className={`w-full h-[1px] ${
        appState.mode ? "divisorDark" : "divisorLight"
      } mb-12`}
    />
  );
}

export default DivLine;
