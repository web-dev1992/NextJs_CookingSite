"use client";

import React, { useState, useEffect } from "react";
// import Carousel from "react-material-ui-carousel";
import CarouselItem from "./CarouselItem";
import slider from "../helper/slider.json";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

// const responsive = {
//   0: { items: 1 },
//   // 568: { items: 2 },
//   // // 640: { items: 4 },
//   // 768: { items: 3 },
//   1024: { items: 1, itemsFit: "fill" },
//   // 1280: { items: 2 },
// };
// const handleDragStart = (e: React.DragEvent<HTMLDivElement>) =>
//   e.preventDefault();
const Items = slider.map((item) => <CarouselItem key={item.id} item={item} />);
function Header() {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  return (
    <>
      {hasWindow && (
        <div className="w-full md:py-10 py-5 m-auto space-x-4">
          <AliceCarousel
            mouseTracking
            items={Items}
            // responsive={responsive}
            controlsStrategy="responsive"
            infinite={true}
            disableDotsControls={true}
            disableButtonsControls={true}
            keyboardNavigation={true}
            autoPlay={true}
            autoPlayInterval={4000}
          />
        </div>
      )}
    </>

    //    <Carousel
    //   className="w-full lg:h-[750px] h-80 md:py-10 py-5 m-auto"
    //   IndicatorIcon={null}
    // >
    //   {slider.map((item) => (
    //     <CarouselItem key={item.id} item={item} />
    //   ))}
    // </Carousel>
  );
}

export default Header;
