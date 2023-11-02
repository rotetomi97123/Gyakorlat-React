import React, { useEffect, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { HeroImages } from "./data";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "./hero.scss";

const hero = () => {
  const splideRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      if (splideRef.current) {
        const splide = splideRef.current.splide;
        splide.go("+1");
      }
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="Wrapper">
      <Splide
        options={{
          type: "loop",
          perPage: 1,
        }}
        ref={splideRef}
      >
        {HeroImages.map((item, index) => {
          return (
            <SplideSlide key={index}>
              <div className="imgDiv">
                <img src={item.img} alt="kep" />
              </div>
            </SplideSlide>
          );
        })}
        ;
      </Splide>
    </div>
  );
};

export default hero;
