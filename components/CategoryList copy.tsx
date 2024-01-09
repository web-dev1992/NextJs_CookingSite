"use client";

import React from "react";
import category from "../helper/category.json";
import CategoryItem from "./CategoryItem";
import Carousel from "react-material-ui-carousel";

function CategoryList() {
  return (
    <div className="max-w-screen-xl flex flex-col  justify-center items-center my-10 px-10 m-auto ">
      <div className="flex flex-col md:flex-row items-center justify-between w-full space-y-10">
        <h1 className="font-semibold text-2xl lg:text-5xl ">Categories</h1>
        <button className="bg-[#E7FAFE] hover:bg-blue-300 text-black font-semibold text-base rounded-2xl w-[200px] h-[60px] ">
          View All Categories
        </button>
      </div>
      {/* <div className="flex flex-col md:flex-row justify-center items-center space-x-10 space-y-10">
        {category.map(({ id, title, image }) => (
          <CategoryItem key={id} title={title} image={image} />
        ))}
      </div> */}

      <Carousel
        className="w-full my-16 flex flex-col md:flex-row justify-center items-center space-x-10 space-y-10 h-full"
        IndicatorIcon={null}
        indicators={false}
        animation="slide"
      >
        {category.map(({ id, title, image }) => (
          <CategoryItem key={id} title={title} image={image} />
        ))}
      </Carousel>
    </div>
  );
}

export default CategoryList;
