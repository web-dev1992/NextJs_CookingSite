import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import InsPosts from "../helper/instagramPosts.json";
import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
interface IInstagramPostsProps {}

 const InstagramPosts: FC<IInstagramPostsProps> = (props) => {
  return (
    <Container className="max-w-screen-2xl bg-gradient-to-t from-skyblue">
      <Grid
        container
        sx={{ rowGap: 8, justifyContent: "center" }}
        className="max-w-screen-xl py-20 m-auto"
      >
        <div className="flex flex-col justify-center items-center gap-10 ">
          <h2>Check out @foodieland on Instagram</h2>
          <Typography paragraph className="w-11/12 ">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </Typography>
        </div>
        <Grid container sx={{ rowGap: 4, justifyContent: "center" }}>
          {InsPosts.map(({ id, url, image }) => (
            <Grid
              item
              key={id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
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


export default InstagramPosts;