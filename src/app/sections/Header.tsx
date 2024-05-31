"use client";

import { useState, useEffect } from "react";
import { AppContextType } from "../resources/types";
import { FillLogo } from "../components/Icons";
import SecondButton from "../components/SecondButton";
import { headerContent } from "../resources/text-content";

interface Props {
  appState: AppContextType;
  menuOpen: boolean;
  animationFinished: string;
  toggleTheme: () => void;
  toggleLanguage: () => void;
}

function Header({
  appState,
  menuOpen,
  animationFinished,
  toggleTheme,
  toggleLanguage,
}: Props) {
  const [sectionActive, setSectionActive] = useState<string>("");

  const content =
    appState.language === "Eng" ? headerContent.es : headerContent.en;

  const headerClass = `w-full min-[1112px]:pt-3 overflow-hidden m-auto flex justify-center fixed z-30 backdrop-blur-md border-b ${
    appState.mode
      ? `border-[#202020] bg-[#08080850]`
      : `border-[#c9c9c9] bg-[#c9c9c950]`
  } ${
    menuOpen ? `openMenu` : !animationFinished && `closeMenu`
  } ${animationFinished} transition-all `;

  const itemClass = `h-full pb-3 px-1 max-[1111px]:text-lg w-[126px] text-center  ${
    appState.mode ? "menuItemDark" : "menuItemLight"
  }`;

  // This variables are used to change the border of the menu when scrolling in both languages
  //---------------------------------------------------------------------
  const borderClassEsp = `absolute top-[30px] h-[2px] transition-all ${
    appState.mode ? `divisorDark` : `divisorLight`
  } ${sectionActive === "Sobre nostros" && "translate-x-[0px]"} ${
    sectionActive === "Contacto" && "translate-x-[247px]"
  } ${sectionActive === "Servicios" && "translate-x-[135px] "} 
  ${
    sectionActive === ""
      ? "translate-x-[-320px] w-[80px] max-[1110px]:hidden"
      : "w-full"
  } fast-charge max-[1111px]:hidden`;

  const borderClassEng = `absolute top-[30px] h-[2px] transition-all ${
    appState.mode ? `divisorDark` : `divisorLight`
  } ${sectionActive === "Sobre nostros" && "translate-x-[0px]"} ${
    sectionActive === "Contacto" && "translate-x-[201px]"
  } ${sectionActive === "Servicios" && "translate-x-[103px]"} 
  ${
    sectionActive === "" ? "translate-x-[-358px] w-[80px]" : "w-full"
  } fast-charge max-[1111px]:hidden`;
  //---------------------------------------------------------------------

  // Logic to change the section active when scrolling
  //---------------------------------------------------------------------
  const handleScroll = () => {
    if (window.innerWidth >= 1111) {
      const scrollY = document.getElementById("appContainer")?.scrollTop || 0;

      if (scrollY > 550 && scrollY < 1270) {
        setSectionActive("Sobre nosotros");
      } else if (scrollY > 1270 && scrollY < 2000) {
        setSectionActive("Servicios");
      } else if (scrollY > 2000) {
        setSectionActive("Contacto");
      } else if (scrollY < 700) {
        setSectionActive("");
      }
    }
  };

  useEffect(() => {
    document
      .getElementById("appContainer")
      ?.addEventListener("scroll", handleScroll);
    return () =>
      document
        .getElementById("appContainer")
        ?.removeEventListener("scroll", handleScroll);
  }, []);
  //---------------------------------------------------------------------

  return (
    <header className={headerClass}>
      <ul className="w-[90%] max-w-[1000px] flex gap-8 h-full text-sm items-center justify-between max-[1111px]:flex-col max-[1111px]:justify-center">
        <li className="max-[1111px]:hidden ">
          <a
            style={{ transition: "all 0.2s ease-in-out" }}
            href="#main"
            className="rounded-full w-[45px] relative bottom-[6px] h-[45px] flex justify-center items-center hover:rotate-[360deg]"
          >
            <FillLogo
              width={30}
              height={30}
              color={appState.mode ? `#fff` : `#000`}
            />
          </a>
        </li>
        <div className="grow flex justify-center gap-8 max-[1111px]:flex-col">
          <li className="relative text-center">
            <a href="#about" className={itemClass}>
              {content.about}
            </a>
            <div
              className={
                appState.language === "Eng" ? borderClassEsp : borderClassEng
              }
            ></div>
          </li>
          <li className="text-center">
            <a href="#pricing" className={itemClass}>
              {content.services}
            </a>
          </li>

          <li className="text-center">
            <a href="#contact" className={itemClass}>
              {content.contact}
            </a>
          </li>
        </div>
        <li className=" h-fit flex gap-2 z-20 max-[1111px]:fixed max-[1111px]:top-4 max-[1111px]:right-[4vw]">
          <SecondButton
            content={""}
            onClick={toggleTheme}
            appState={appState}
            style="p-2"
          />
          <SecondButton
            content={appState.language}
            onClick={toggleLanguage}
            appState={appState}
            style="w-[48px] px-3 py-2"
          />
        </li>
      </ul>
    </header>
  );
}

export default Header;
