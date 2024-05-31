"use client";

import { FaCloudUploadAlt } from "react-icons/fa";
import {
  SiCss3,
  SiFigma,
  SiHtml5,
  SiJavascript,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { useState, useEffect } from "react";

function TechStack({ mode }: { mode: boolean }) {
  const techClass = `w-[50px] h-[50px] ${
    mode ? `text-[#ffffffab]` : `text-[#000000ab]`
  }`;

  const [isCharging, setIsCharging] = useState<boolean>(true);

  useEffect(() => {
    setIsCharging(false);
  }, []);

  if (isCharging) return;

  return (
    <div className="max-w-[700px] m-auto w-[90vw] mt-[20vh] overflow-hidden charge">
      <Slide
        duration={10}
        transitionDuration={6000}
        arrows={false}
        autoplay={true}
        canSwipe={false}
      >
        <div className="w-full h-fit flex justify-around ">
          <SiNextdotjs className={techClass} />
          <SiReact className={techClass} />
          <SiNodedotjs className={techClass} />
          <SiHtml5 className={techClass} />
        </div>
        <div className="w-full h-fit flex justify-around">
          <SiCss3 className={techClass} />
          <SiPostgresql className={techClass} />
          <SiTypescript className={techClass} />
          <SiJavascript className={techClass} />
        </div>
        <div className="w-full h-fit flex justify-around ">
          <SiVite className={techClass} />
          <SiPrisma className={techClass} />
          <SiTailwindcss className={techClass} />
          <SiNestjs className={techClass} />
        </div>
        <div className="w-full h-fit flex justify-around ">
          <SiSupabase className={techClass} />
          <FaCloudUploadAlt className={techClass} />
          <SiPython className={techClass} />
          <SiFigma className={techClass} />
        </div>
      </Slide>
    </div>
  );
}

export default TechStack;
