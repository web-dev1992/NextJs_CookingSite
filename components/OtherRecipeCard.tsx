import { FC } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Link from "next/link";
interface IOtherRecipeCardProps {
  id: number;
  title: string;
  image: string;
  author: { name: string; image: string; date: string };
}

const OtherRecipeCard: FC<IOtherRecipeCardProps> = (props) => {
  return (
    <Card sx={{ display: "flex", gap: 2 }} elevation={0}>
      <CardMedia
        component="img"
        sx={{ width: 180, height: 120 }}
        image={props.image}
        alt={props.title}
        className="rounded-xl"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent >
          <Link
            className="w-full text-lg font-semibold text-wrap"
            href={`/recipes/${props.id}`}
          >
            {props.title.slice(0, 30)}
          </Link>
          <p className="text-left text-sm font-medium py-3">By {props.author.name}</p>
        </CardContent>
      </Box>
    </Card>
  );
};

export default OtherRecipeCard;
