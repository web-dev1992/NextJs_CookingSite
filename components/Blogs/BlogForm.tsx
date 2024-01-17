"use client";

import { FC } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
interface IBlogFormProps {}

const BlogForm: FC<IBlogFormProps> = (props) => {
  const submitHandler = () => {};
  return (
    <Container className="max-w-screen-xl my-16">
      <Grid container rowGap={5}>
        <Grid container rowGap={3}>
          <h1 className="w-full text-center">Blog & Article</h1>
          <p className="w-full text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
            ipsa veritatis illum? Dolorem, optio esse.
          </p>
        </Grid>

        <Grid
          item
          sx={{ width: "100%" }}
          className="flex justify-center items-center"
        >
          <form
            onSubmit={submitHandler}
            className="relative w-full md:w-[700px] h-20 mt-8"
          >
            <input
              type="text"
              className="rounded-3xl border-2 border-stone-100 w-full h-full placeholder:text-stone-500 placeholder:text-sm px-5"
              placeholder="Search article, news or recipe..."
            />
            <button className="btn absolute top-2 right-2 w-4/12 sm:w-[160px]">
              Search
            </button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BlogForm;
