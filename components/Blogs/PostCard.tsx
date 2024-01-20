import { FC } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import Image from "next/image";
interface IPostCardProps {
  id: number;
  title: string;
  image: string;
  description: string;
  author: { name: string; image: string; date: string };
}

const PostCard: FC<IPostCardProps> = (props) => {
  return (
    // <Card sx={{ display: "flex", gap: 2 }} elevation={0}>
    <Grid
      container
      justifyContent={"center"}
      rowGap={5}
      gap={5}
      className="flex items-center justify-start"
    >
      <Grid item xs={12} md={4}>
        <Image
          width={290}
          height={200}
          src={props.image}
          alt={props.title}
          className="rounded-xl"
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <Grid
          container
          rowGap={3}
          className="flex flex-col justify-center items-start h-full "
        >
          <Link
            className="w-full text-2xl font-semibold text-wrap"
            href={`/blogs/${props.id}`}
          >
            {props.title}
          </Link>
          <p className="text-left">By {props.description.slice(0, 100)}</p>
          <Grid
            container
            gap={2}
            justifyContent={"flex-start"}
            className="xs:w-full lg:w-3/4 "
          >
            <Grid
              item
              xs={5}
              className="w-full flex justify-start items-center gap-4 border-e border-e-stone-300"
            >
              <Image
                src={props.author.image}
                width={40}
                height={40}
                alt="author"
              />
              <span className="text-base font-bold ">{props.author.name}</span>
            </Grid>
            <Grid item xs={4} className="flex justify-center items-center">
              <span className="font-medium text-sm text-stone-600">
                {props.author.date}
              </span>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    // </Card>
  );
};

export default PostCard;
