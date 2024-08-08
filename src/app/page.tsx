"use client";

import Link from "next/link";
import {  FillLogo } from "./components/Icons";
import { Main, About, Pricing, Contact, Header } from "./sections";
import { AppContextType } from "./resources/types";
import { useState } from "react";
import Hamburger from "hamburger-react";
import { MobileHeaderBar, AnimatedLines } from "./components";

export default function Home() {
  const [appState, setAppState] = useState<AppContextType>({
    language: "Eng",
    mode: true, //TRUE === DARK, FALSE === LIGHT
  });

  const [isOpen, setIsOpen] = useState(false);

  const [animationFinished, setAnimationFinished] =
    useState<string>("max-[1111px]:h-0");

  const appContainerClass = `overflow-x-hidden w-full h-screen overflow-auto flex justify-center bg-gradient-radial  ${
    appState.mode
      ? `bg-[#000] text-[#fff] selection:bg-[#272727]`
      : `from-[#d3d3d3] text-[#000] to-[#fff] selection:bg-[#adadad]`
  } `;

  const toggleTheme = () => {
    setAppState({
      ...appState,
      mode: !appState.mode,
    });
  };

  const toggleLanguage = () => {
    setAppState({
      ...appState,
      language: appState.language === "Eng" ? "Esp" : "Eng",
    });
  };

  // To handle the menu opening and closing animation.
  const toggleMenu = () => {
    if (animationFinished !== "") {
      setIsOpen(!isOpen);
      setAnimationFinished("");
      setTimeout(() => {
        if (animationFinished === "max-[1111px]:h-screen") {
          setAnimationFinished("max-[1111px]:h-0");
        } else {
          setAnimationFinished("max-[1111px]:h-screen");
        }
      }, 270);
    }
  };

  return (
    <div id="appContainer" className={appContainerClass}>
      <div
        className="charge w-[90%] max-w-[1000px] flex flex-col items-center"
        id="main"
      >
        <AnimatedLines appState={appState} />

        <MobileHeaderBar appState={appState} />

        <button
          onClick={toggleMenu}
          className="fixed top-2 m-auto min-[1112px]:hidden z-40"
        >
          <Hamburger toggled={isOpen} size={25} />
        </button>
        <div className="logo fixed left-[4vw] top-4 z-40">
          <Link
            href={"#main"}
            style={{ transition: "all 0.2s ease-in-out" }}
            className="rounded-full w-[45px] relative  bottom-[6px] h-[45px] flex justify-center items-center hover:rotate-[360deg]"
          >
            <FillLogo
              width={30}
              height={30}
              color={appState.mode ? `#fff` : `#000`}
            />
          </Link>
        </div>

        <Header
          toggleLanguage={toggleLanguage}
          appState={appState}
          menuOpen={isOpen}
          animationFinished={animationFinished}
          toggleTheme={toggleTheme}
        />
        <main className="mt-[80px]">
          <Main appState={appState} />
          <About appState={appState} />
          <Pricing appState={appState} />
          <Contact appState={appState} />

          <footer className="w-full flex py-2 mb-2 gap-2">
            <p className="grow text-xs flex items-end opacity-70 max-[600px]:text-[10px]">
              {appState.language === "Eng"
                ? "Primptio™ 2024. Todos los derechos reservados"
                : "Primptio™ 2024. All rights reserved"}
            </p>
            {/*<div className="flex justify-center items-center gap-3 ">
              <Link href={`/`}>
                <InstagramIcon
                  width={30}
                  height={30}
                  color={appState.mode ? `#fff` : `#000`}
                />
              </Link>
              <Link href={`/`}>
                <GmailIcon
                  width={30}
                  height={30}
                  color={appState.mode ? `#fff` : `#000`}
                />
              </Link>
            </div>*/}
          </footer>
        </main>
      </div>
    </div>
  );
}
