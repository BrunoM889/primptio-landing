import { AppContextType } from "../resources/types";

function MobileHeaderBar({ appState }: { appState: AppContextType }) {
  return (
    <div
      className={`w-full top-0 h-[58px] overflow-hidden m-auto flex fixed z-20 backdrop-blur-md border-b ${
        appState.mode
          ? `border-[#202020] bg-[#08080850]`
          : `border-[#c9c9c9] bg-[#c9c9c950]`
      } min-[1112px]:hidden`}
    ></div>
  );
}

export default MobileHeaderBar;
