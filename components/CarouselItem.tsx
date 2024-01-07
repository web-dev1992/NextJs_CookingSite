import React, { FC } from "react";
import Image from "next/image";
import { Paper } from "@mui/material";
import MiniProfile from "./MiniProfile";
import Link from "next/link";
interface CarouselItemProps {
  item: {
    id: number;
    image: string;
    title: string;
    desc: string;
    author: {
      name: string;
      image: string;
      date: string;
    };
  };
}

const CarouselItem: FC<CarouselItemProps> = ({ item }) => {
  return (
    <Paper
      elevation={0}
      style={{ backgroundImage: `url(${item.image})` }}
      className="relative w-10/12 lg:h-[640px] h-60 bg-no-repeat bg-contain bg-right bg-[#E7FAFE] m-auto text-white rounded-s-[50px] p-4 lg:p-14 flex items-center "
    >
      <Image
        src="/images/Badge.svg"
        width={150}
        height={150}
        alt="badge"
        className="absolute top-16 left-[40%] hidden xl:block"
      />
      <div className="flex  h-full w-2/5 md:w-1/2 flex-col justify-between items-start gap-10 text-black">
        <button className="bg-white rounded-[30px] w-[156px] h-11 text-black font-semibold text-sm hidden  lg:flex justify-evenly items-center ">
          <Image
            src="/images/letter.png"
            width={24}
            height={24}
            alt="hot recipes"
          />
          <span> Hot Recipes</span>
        </button>
        <div className="flex flex-col justify-center items-start gap-10">
          <h1 className="font-semibold text-xl md:text-4xl xl:text-[60px] text-wrap ">
            <Link href="/recipes">{item.title}</Link>
          </h1>
          <p className="hidden lg:block text-stone-600 font-normal text-base">
            {item.desc.slice(0, 150)}
          </p>
          <div className="flex justify-between items-center gap-5">
            <button className="hidden md:flex rounded-[30px] w-36 h-10 text-stone-600 font-medium text-sm  justify-evenly items-center bg-opacity-5 bg-black ">
              <Image
                src="/images/Timer.svg"
                width={24}
                height={24}
                alt="Timer"
              />
              30 Minutes
            </button>
            <button className="hidden md:flex rounded-[30px] w-[120px] h-10 text-stone-600 font-medium text-sm justify-evenly items-center bg-opacity-5 bg-black">
              <Image
                src="/images/ForkKnife.svg"
                width={24}
                height={24}
                alt="Fork & Knife"
              />
              Chicken
            </button>
          </div>
        </div>
        <div className="hidden xl:flex justify-between w-full">
          <MiniProfile
            name={item.author.name}
            image={item.author.image}
            date={item.author.date}
          />
          <Link
            href="/recipes"
            className="rounded-2xl w-[200px] h-[60px] text-white font-medium text-sm flex justify-center items-center gap-5  bg-black"
          >
            View Recipes
            <Image
              src="/images/PlayCircle.svg"
              width={24}
              height={24}
              alt="View Recipes"
            />
          </Link>
        </div>
      </div>
    </Paper>
  );
};
export default CarouselItem;
