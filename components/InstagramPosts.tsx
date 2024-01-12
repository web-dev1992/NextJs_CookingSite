import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Posts from "../helper/posts.json";
import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
interface IInstagramPostsProps {}

export const InstagramPosts: FC<IInstagramPostsProps> = (props) => {
  return (
    <Container className="max-w-screen-2xl bg-gradient-to-t from-skyblue">
      <Grid
        container
        sx={{ rowGap: 8, justifyContent: "center" }}
        className="max-w-screen-xl py-28 m-auto"
      >
        <div className="flex flex-col justify-center items-center gap-10 ">
          <h1>Check out @foodieland on Instagram</h1>
          <Typography paragraph className="w-11/12 ">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </Typography>
        </div>
        <Grid container sx={{ rowGap: 4, justifyContent: "center" }}>
          {Posts.map(({ id, url, image }) => (
            <Grid
              item
              key={id}
              xs={12}
              md={6}
              lg={4}
              xl={3}
              className="flex justify-center items-center  "
            >
              <Link href={url}>
                <Image
                  src={image}
                  alt="instagram post"
                  width={290}
                  height={445}
                />
              </Link>
            </Grid>
          ))}
          <a
            target="_blank"
            href="https://instagram.com/foodieland"
            className="btn w-56 mt-14"
          >
            <span>View Our Instagram</span>
            <Image
              src="/images/instaWhite.svg"
              width={22}
              height={22}
              alt="instagram page"
            />
          </a>
        </Grid>
      </Grid>
    </Container>
  );
};
