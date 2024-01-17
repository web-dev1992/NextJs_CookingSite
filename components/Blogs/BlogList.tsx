"use client";
import { FC, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Ads from "../Ads";
import { OtherRecipes } from "../OtherRecipes";
import PostCard from "./PostCard";
import AppPagination from "../Pagination";
interface IBlogListProps {
  blogs: {
    id: number;
    title: string;
    image: string;
    description: string;
    author: { name: string; image: string; date: string };
  }[];
  recipes: {
    id: number;
    title: string;
    image: string;
    author: { name: string; image: string; date: string };
  }[];
}

export const BlogList: FC<IBlogListProps> = (props) => {
  const [blogs, setBlogs]=useState([]);
  return (
    <Container className="max-w-screen-xl mb-40">
      <Grid container rowGap={8}>
        <Grid item xs={12} lg={8}>         
          {/* posts section */}
          <Grid container rowGap={6}>
            {blogs.map(({ id, title, image, description, author }) => (
              <Grid
                item
                key={id}
                className="flex items-center justify-start mr-10"
              >
                <PostCard
                  id={id}
                  title={title}
                  image={image}
                  description={description}
                  author={author}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item xs={12} lg={4}>
          {/* other recipes section */}
          <Grid
            container
            rowGap={10}
            sx={{ justifyContent: { xs: "center", lg: "left" } }}
          >
            <Grid item>
              <OtherRecipes
                recipes={props.recipes.slice(0, 3)}
                title="Tasty Recipes"
              />
            </Grid>
            <Grid item>
              <Ads />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          justifyContent={"center"}
          alignItems={"center"}
          display={"flex"}
          sx={{ margin: "20px 0px", width: "100%" }}
         
        >
        <AppPagination  setItems={(blog)=>setBlogs(blog)}/>
        </Grid>
      </Grid>
    </Container>
  );
};
