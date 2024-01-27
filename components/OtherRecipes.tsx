import { FC } from "react";
import Grid  from "@mui/material/Grid";
import OtherRecipeCard from "./OtherRecipeCard";
interface IOtherRecipesProps {
  title: string;

  recipes: {
    id: number;
    title: string;
    image: string;
    author: { name: string; image: string; date: string };
  }[];
}

export const OtherRecipes: FC<IOtherRecipesProps> = (props) => {
  return (
    <Grid container sx={{ rowGap: 6 }}>
      <h3 >{props.title}</h3>
      <Grid container rowGap={3}>
        {props.recipes.map(({ id, title, image, author }) => (
          <Grid item key={id} className="flex items-center justify-center ">
            <OtherRecipeCard
              id={id}
              title={title}
              image={image}
              author={author}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
