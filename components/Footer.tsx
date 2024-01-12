"use client";

import { FC } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Menu,
  MenuList,
  MenuItem,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
interface IFooterProps {}
const pages = [
  { title: "Recipes", href: "/recipes" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
  { title: "About us", href: "/about" },
];

const Footer: FC<IFooterProps> = (props) => {
  return (
    <AppBar
      position="static"
      className="max-w-screen-xl bg-white shadow-none border-b-2 m-auto "
    >
      <Toolbar className="w-full flex flex-col justify-between items-center ">
        <Box className="w-full flex flex-col md:flex-row justify-between items-center border-b-2 py-10">
          <Box className="w-full flex flex-col justify-between items-start">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="logo"
            >
              <Image
                src={"/images/Foodieland.png"}
                width={110}
                height={30}
                alt="Foodieland"
              />
            </IconButton>
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetuipisicing elit,
            </Typography>
          </Box>

          <Box className="w-full md:w-1/2 flex justify-around ">
            {pages.map(({ title, href }) => (
              <Link
                href={href}
                key={title}
                className="text-black hover:text-neutral-800 font-medium text-base font-sans"
              >
                {title}
              </Link>
            ))}
          </Box>
        </Box>
        <Box className="w-full flex flex-col lg:flex-row justify-between items-center py-10">
          <p className="w-full text-lg font-medium text-stone-500">
            © 2020 Flowbase. Powered by{" "}
            <span className="text-rose-400">Webflow</span>
          </p>
          <Box className="gap-5 " sx={{ display: { md: "flex" } }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="logo"
            >
              <Image
                src={"/images/facebook.svg"}
                alt="facebook icon"
                width={10}
                height={20}
              />
            </IconButton>{" "}
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="logo"
            >
              <Image
                src={"/images/tweeter.svg"}
                alt="tweeter icon"
                width={22}
                height={18}
              />
            </IconButton>{" "}
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="logo"
            >
              <Image
                src={"/images/instagram.svg"}
                alt="instagram icon"
                width={22}
                height={22}
              />
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
