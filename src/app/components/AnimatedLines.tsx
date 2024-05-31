import { AppContextType } from "../resources/types";

function AnimatedLines({ appState }: { appState: AppContextType }) {
  return (
    <div className="fixed z-0 opacity-10">
      <div
        className={`fixed infiniteMove4 w-2 rounded  h-screen top-0 right-[10vw]${
          appState.mode ? ` bg-[#ffffffab]` : ` bg-[#000000]`
        }`}
      ></div>
      <div
        className={`fixed infiniteMove w-2 rounded  h-screen top-0 right-[15vw]${
          appState.mode ? ` bg-[#ffffffab]` : ` bg-[#000000]`
        }`}
      ></div>
      <div
        className={`fixed infiniteMove2 w-2 rounded  h-screen top-0 left-[10vw]${
          appState.mode ? ` bg-[#ffffffab]` : ` bg-[#000000]`
        }`}
      ></div>
      <div
        className={`fixed infiniteMove3 w-2 rounded  h-screen top-0 left-[15vw]${
          appState.mode ? ` bg-[#ffffffab]` : ` bg-[#000000]`
        }`}
      ></div>
    </div>
  );
}

export default AnimatedLines;
