"use client";

import React, { useState, useEffect } from "react";
import category from "../helper/category.json";
import CategoryItem from "./CategoryItem";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  // 640: { items: 4 },
  768: { items: 3 },
  1024: { items: 5 },
  1280: { items: 6 },
};
const handleDragStart = (e: React.DragEvent<HTMLDivElement>) =>
  e.preventDefault();
const Items = category.map(({ id, title, image }) => (
  <CategoryItem
    key={id}
    title={title}
    image={image}
    onDragStart={handleDragStart}
  />
));
function CategoryList() {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
    <div className="flex flex-col justify-center items-center my-16 px-10 md:px-20 mx-auto ">
      <div className="flex flex-col md:flex-row items-center justify-between w-full space-y-10">
        <h1 className="font-semibold text-2xl lg:text-5xl ">Categories</h1>
        <button className=" hover:bg-blue-300 text-black font-semibold text-base rounded-2xl w-[200px] h-[60px] ">
          View All Categories
        </button>
      </div>

      {hasWindow && (
        <div className="w-full my-10 flex flex-col md:flex-row justify-center items-center space-x-8 space-y-10 h-content ">
          <AliceCarousel
            mouseTracking
            items={Items}
            responsive={responsive}
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
    </div>
  );
}

export default CategoryList;
