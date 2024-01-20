import { FC } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Recipes from "../helper/recipe.json";
import MoreRecipeCard from "./MoreRecipeCard";
interface IMoreRecipesProps {}

const MoreRecipes: FC<IMoreRecipesProps> = (props) => {
  const newRecipes = Recipes.filter((recipe) => recipe.Top !== 1);

  return (
    <Grid
      container
      sx={{ rowGap: 8, justifyContent: "center" }}
      className="my-16 px-10 md:px-20 mx-auto"
    >
      {/* <div className="flex flex-col lg:flex-row justify-center items-center gap-20 "> */}
      <Grid item xs={12} lg={6}>
        {" "}
        <h2>Try this delicious recipe to make your day</h2>
      </Grid>
      <Grid item xs={12} lg={6}>
        {" "}
        <Typography paragraph className="w-11/12 ">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim
        </Typography>
      </Grid>

      {/* </div> */}
      <Grid
        container
        sx={{ rowGap: 4, justifyContent: "center", width: "100%" }}
      >
        {newRecipes.map(({ id, title, image, TimeToReady, Category }) => (
          <Grid
            item
            xs={12}
            sm={6}
            lg={3}
            key={id}
            className="flex items-center justify-center"
          >
            <MoreRecipeCard
              id={id}
              title={title}
              image={image}
              TimeToReady={TimeToReady}
              Category={Category}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default MoreRecipes;
