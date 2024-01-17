import { FC } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import Image from "next/image";
import Divider from "@mui/material/Divider";
interface IPostCardProps {
  id: number;
  title: string;
  image: string;
  description: string;
  author: { name: string; image: string; date: string };
}

const PostCard: FC<IPostCardProps> = (props) => {
  return (
    <Card sx={{ display: "flex", gap: 2 }} elevation={0}>
      <CardMedia
        component="img"
        sx={{ width: 290, height: 200 }}
        image={props.image}
        alt={props.title}
        className="rounded-xl"
      />
      <Box sx={{ display: "flex", flexDirection: "column"}}>
        <Grid container rowGap={3} className="flex flex-col justify-center items-start h-full" >
          <Link
            className="w-full text-2xl font-semibold text-wrap"
            href={`/blogs/${props.id}`}
          >
            {props.title}
          </Link>
          <p className="text-left">By {props.description.slice(0, 100)}</p>
          <Grid container gap={2}>
            <Grid item xs={5} className="w-full flex justify-start items-center gap-4 border-e border-e-stone-300">
              <Image
                src={props.author.image}
                width={40}
                height={40}
                alt="author"
              />
              <span className="text-base font-bold ">{props.author.name}</span>
            </Grid>
            {/* <Divider orientation="vertical" flexItem />  */}
            <Grid item xs={4} className="flex justify-center items-center">
              <span className="font-medium text-sm text-stone-600">
                {props.author.date}
              </span>
            </Grid>
          </Grid>
        </Grid >
      </Box>
    </Card>
  );
};

export default PostCard;
