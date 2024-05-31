import { ButtonProps } from "../resources/types";

function Button({ content, style, appState, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${style} ${
        appState.mode
          ? `bg-[#fff] text-[#000] hover:bg-[#cccccc]`
          : `bg-[#000] hover:bg-[#292929] text-[#fff] shadow-lg shadow-[#0000005b]`
      } font-medium px-6 h-11 rounded-md text-sm transition-colors max-[600px]:h-9 max-[600px]:px-4 max-[600px]:text-xs`}
    >
      {content}
    </button>
  );
}

export default Button;
