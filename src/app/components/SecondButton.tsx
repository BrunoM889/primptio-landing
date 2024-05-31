import { ButtonProps } from "../resources/types";
import { IoMoon, IoSunny } from "react-icons/io5";

function SecondButton({ content, style, onClick, appState }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`border ${style} ${
        appState.mode
          ? `border-[#1f1f1f] text-[#fff] placeholder:text-[#1f1f1f] hover:bg-[#131313]`
          : `border-[#00000028] shadow-lg shadow-[#00000010] text-[#000] hover:bg-[#d6d6d6] `
      } font-medium text-xs rounded-md transition-all`}
    >
      {content === "" ? appState.mode ? <IoMoon className="h-4 w-4" /> : <IoSunny className="h-4 w-4" /> : content}
    </button>
  );
}

export default SecondButton;
