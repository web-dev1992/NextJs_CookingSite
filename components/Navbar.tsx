"use client";
import { FC, useState, MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Menu,
  MenuList,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
interface INavbarProps {}

const pages = [
  { title: "Home", href: "/" },
  { title: "Recipes", href: "/recipes" },
  { title: "Blog", href: "/blogs" },
  { title: "Contact", href: "/contact" },
  { title: "About us", href: "/about" },
];

const Navbar: FC<INavbarProps> = (props) => {
  const [anchorNav, setAnchorNav] = useState<null | HTMLElement>(null);
  const openmenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorNav(event.currentTarget);
  };
  const closemenu = () => {
    setAnchorNav(null);
  };

  return (
    <AppBar
      position="static"
      className="bg-white px-5 md:px-20 py-5 shadow-none border-b-2  "
    >
      <Toolbar>
        <Box
          sx={{ display: { xs: "none", md: "flex" } }}
          className="w-full justify-between items-center"
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <Image
              src={"/images/Foodieland.png"}
              width={110}
              height={30}
              alt="Foodieland"
            />
          </IconButton>
          <Box
            sx={{ display: { xs: "none", md: "flex" } }}
            className=" w-3/6 justify-around  "
          >
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
          <Box className="gap-5 " sx={{ display: { xs: "none", md: "flex" } }}>
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

        <Box sx={{ display: { xs: "flex", md: "none" } }} className="gap-40 ">
          <IconButton
            size="large"
            edge="start"
            className="text-black"
            aria-label="menu"
            onClick={openmenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            open={Boolean(anchorNav)}
            onClose={closemenu}
            anchorEl={anchorNav}
            sx={{ display: { xs: "flex", md: "none" }, width: "100%" }}
          >
            <MenuList>
              {pages.map(({ title, href }) => (
                <MenuItem color="inherit" key={title} onClick={closemenu}>
                  <Link
                    href={href}
                    className="text-black hover:text-neutral-800 font-medium text-base font-sans"
                  >
                    {title}
                  </Link>
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
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
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
