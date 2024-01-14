"use client";

import { FC, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Favorite } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import Link from "next/link";
interface IRecipeCardProps {
  id: number;
  title: string;
  image: string;
  TimeToReady: number;
  Category: string;
}

const RecipeCard: FC<IRecipeCardProps> = (props) => {
  const [like, setLike] = useState(false);
  return (
    <Card
      sx={{ maxWidth: 400 }}
      elevation={0}
      className="p-4 rounded-4xl w-[400px] bg-gradient-to-t from-skyblue relative"
    >
      <CardMedia
        sx={{ height: 140 }}
        image={props.image}
        title={props.title}
        className="rounded-4xl w-[368px] h-64"
      />
      <IconButton
        className="absolute top-10 right-10 bg-white rounded-full p-2"
        onClick={() => setLike(!like)}
      >
        <Favorite className={`${!like ? "text-[#DBE2E5]" : "text-red-400"}`} />
      </IconButton>
      <CardContent>
        <Link href={`/recipes/${props.id}`}>
          <h4>{props.title}</h4>
        </Link>
      </CardContent>
      <CardActions sx={{ gap: 4 }}>
        <button className="flex  text-stone-600 font-medium text-sm  justify-between items-center bg-transparent gap-2">
          <Image src="/images/Timer.svg" width={24} height={24} alt="Timer" />
          <span>{props.TimeToReady} Minutes</span>
        </button>
        <button className="flex  text-stone-600 font-medium text-sm  justify-evenly items-center bg-transparent gap-2">
          <Image
            src="/images/ForkKnife.svg"
            width={24}
            height={24}
            alt="Fork & Knife"
          />
          <span>{props.Category}</span>
        </button>
      </CardActions>
    </Card>
  );
};

export default RecipeCard;
