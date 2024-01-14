import { FC } from "react";
import { Grid } from "@mui/material";
import OtherRecipeCard from "./OtherRecipeCard";
interface IOtherRecipesProps {
  title: string;

  recipes: {
    id: number;
    title: string;
    image: string;
    TimeToReady: number;
    Category: string;
    author: { name: string; image: string; date: string };
  }[];
}

export const OtherRecipes: FC<IOtherRecipesProps> = (props) => {
  return (
    <Grid container sx={{ rowGap: 6 }}>
      <h3 className="pt-14 ">{props.title}</h3>
      <Grid container rowGap={3}>
        {props.recipes.map(
          ({ id, title, image, TimeToReady, Category, author }) => (
            <Grid item key={id} className="flex items-center justify-center ">
              <OtherRecipeCard
                id={id}
                title={title}
                image={image}
                TimeToReady={TimeToReady}
                Category={Category}
                author={author}
              />
            </Grid>
          )
        )}
      </Grid>
    </Grid>
  );
};
