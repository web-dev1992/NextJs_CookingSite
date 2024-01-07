"use client";

import React from "react";
import Carousel from "react-material-ui-carousel";
import CarouselItem from "./CarouselItem";
import slider from "../helper/slider.json";
function MuiCarousel() {
  return (
    <Carousel
      className="w-full md:h-[750px] h-80 md:py-10 py-5 m-auto "
      IndicatorIcon={null}
    >
      {slider.map((item) => (
        <CarouselItem key={item.id} item={item} />
      ))}
    </Carousel>
  );
}

export default MuiCarousel;
