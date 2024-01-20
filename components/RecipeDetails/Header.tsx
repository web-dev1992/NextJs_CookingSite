"use client";

import { FC, useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MiniProfile from "../MiniProfile";
import Image from "next/image";
import ReactPlayer from "react-player";
interface IHeaderProps {
  title: string;
  author: { name: string; date: string; image: string };
  prepTime: number;
  cookTime: number;
  category: string;
  video: string;
  image: string;
  nutritionInfo: { title: string; amount: string }[];
  description: string;
}

const Header: FC<IHeaderProps> = (props) => {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  const playButton = (
    <button className="w-32 h-32 justify-center items-center flex  rounded-full bg-white bg-opacity-85">
      <Image
        alt="playButton"
        src="/images/Polygon.svg"
        width={32}
        height={32}
      />
    </button>
  );
  return (
    <Grid container rowGap={8} className="mx-auto px-10 md:px-20 my-24">
      <Grid container>
        <Grid item xs={12} lg={10}>
          <Grid container>
            <h1 className="mb-16">{props.title}</h1>
            <Grid container className="lg:w-10/12" rowGap={2}>
              <Grid item xs={6} sm={3} className="border-e border-stone-300">
                <MiniProfile
                  name={props.author.name}
                  image={props.author.image}
                  date={props.author.date}
                />
              </Grid>
              <Grid item xs={6} sm={3} className="sm:border-e border-stone-300">
                <div className="flex justify-center items-center gap-2">
                  <Image
                    src="/images/Timer.svg"
                    width={24}
                    height={24}
                    alt="timer"
                  />
                  <div className="flex flex-col justify-between items-start gap-2">
                    <span className="header">PREP TIME</span>
                    <p className="text-sm font-medium">
                      {props.prepTime} Minutes
                    </p>
                  </div>
                </div>
              </Grid>

              <Grid item xs={6} sm={3} className="border-e border-stone-300">
                <div className="flex justify-center items-center gap-2">
                  <Image
                    src="/images/Timer.svg"
                    width={24}
                    height={24}
                    alt="timer"
                  />
                  <div className="flex flex-col justify-between items-start gap-2">
                    <span className="header">COOK TIME</span>
                    <p className="text-sm font-medium">
                      {props.cookTime} Minutes
                    </p>
                  </div>
                </div>
              </Grid>

              <Grid
                item
                xs={6}
                sm={3}
                className="flex justify-center items-center gap-2"
              >
                <Image
                  src="/images/ForkKnife.svg"
                  width={24}
                  height={24}
                  alt="forkandknife"
                />
                <p className="text-sm font-medium">{props.category} </p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={2} sx={{ display: { xs: "none", lg: "flex" } }}>
          <Grid
            container
            gap={4}
            className="h-full w-full  flex items-center justify-start "
          >
            <Grid item>
              <div className=" w-1/2 h-full flex flex-col justify-between items-center gap-4">
                <button className="w-20 h-20 rounded-full flex justify-center items-center ">
                  <Image
                    src="/images/printer.svg"
                    alt="printer"
                    width={24}
                    height={24}
                  />
                </button>
                <span className="header">PRINT</span>
              </div>
            </Grid>
            <Grid item>
              <div className=" w-1/2 h-full flex flex-col justify-between items-center gap-4">
                <button className="w-20 h-20 rounded-full flex justify-center items-center ">
                  <Image
                    src="/images/share.svg"
                    alt="share"
                    width={24}
                    height={24}
                  />
                </button>
                <span className="header">SHARE</span>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container rowGap={8}>
        <Grid item xs={12} lg={8} sx={{ height: "600px" }}>
          <div className="rounded-4xl h-full w-full lg:w-[95%] overflow-hidden">
            {hasWindow && (
              <ReactPlayer
                url={props.video}
                controls={true}
                light={props.image}
                playIcon={playButton}
                volume={0.5}
                width="100%"
                height="100%"
              />
            )}
          </div>
        </Grid>
        <Grid item xs={12} lg={4}>
          <div className=" h-full flex flex-col justify-between p-8 rounded-4xl bg-skyblue">
            <div className="flex flex-col justify-evenly">
              <h4 className="mb-2">Nutrition Information</h4>
              {props.nutritionInfo.map(({ title, amount }, index) => (
                <div
                  className="flex justify-between  border-stone-200 border-b-2 py-3"
                  key={index}
                >
                  <span className="nutritioninfo">{title}</span>
                  <span className="info">{amount}</span>
                </div>
              ))}
            </div>
            <p>
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.{" "}
            </p>
          </div>
        </Grid>
      </Grid>
      <p className="text-left">{props.description}</p>
    </Grid>
  );
};

export default Header;
