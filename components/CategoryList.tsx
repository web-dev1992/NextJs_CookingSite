import React from "react";

function CategoryList() {
  return (
    <div className="max-w-screen-xl flex flex-col md:flex-row justify-center items-center my-10 px-10 m-auto relative ">
      <div className="flex flex-col md:flex-row items-center justify-between w-full space-y-10">
        <h1 className="font-semibold text-2xl lg:text-5xl ">Categories</h1>
        <button className="bg-[#E7FAFE] hover:bg-blue-300 text-black font-semibold text-base rounded-2xl w-[200px] h-[60px] ">
          View All Categories
        </button>
      </div>

    </div>
  );
}

export default CategoryList;
