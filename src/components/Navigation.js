import React, { useState, useEffect} from "react";
import { animateScroll as scroll, scroller } from "react-scroll";
import sections from "../data/sections";
import styles from "./Navigation.module.css";
import Social from "./Social";



const Navigation = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== `undefined`) {
      const { isMobile } = require("../utils");
      setIsMobile(isMobile);
    }
  }, []);

  const scrollToTop = () =>
    scroll.scrollToTop({
      delay: 50,
      duration: 600,
      smooth: "easeInOutCubic",
    });

  const scrollTo = id =>
    scroller.scrollTo(id, {
      delay: 50,
      offset: -90,
      duration: 600,
      smooth: "easeInOutCubic",
    });

  const SectionLink = x => {
    return (
        <div
          className={"h-auto cursor-pointer text-4xl"}
          key={x.id}
          onClick={() => scrollTo(x.id)}
        >
          {x.title}
        </div>
    );
  };

  return (
    <div
      className={`${styles.container} top-0 pt-4 pb-4 animated flex justify-center ${
        isMobile ? "fadeInDown" : "fadeInDown"
      }`}
    >
      <div
        className="flex-center cursor-pointer flex-30"
        onClick={scrollToTop}
        data-tip="Go to Top"
        data-place="right"
      >
        <img src="/images/logo.png" alt=""/>
      </div>
      <div className="flex justify-evenly items-center gap-2 flex-55">
        {sections.map(SectionLink)}
      </div>
      <div className={"flex-15"}>
        <Social/>
      </div>
    </div>
  );
};

export default Navigation;
