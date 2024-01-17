import { FC } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Recipes from "../helper/recipe.json";
import MoreRecipeCard from "./MoreRecipeCard";
interface IMoreRecipesProps {}

const MoreRecipes: FC<IMoreRecipesProps> = (props) => {
  const newRecipes = Recipes.filter((recipe) => recipe.Top !== 1);

  return (
    <Container className="max-w-screen-xl my-40">
      <Grid container sx={{ rowGap: 8, justifyContent: "center" }}>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 ">
          <h2>Try this delicious recipe to make your day</h2>
          <Typography paragraph className="w-11/12 ">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </Typography>
        </div>
        <Grid container sx={{ rowGap: 4, justifyContent: "center" }}>
          {newRecipes.map(({ id, title, image, TimeToReady, Category }) => (
            <Grid
              item
              xs={12}
              md={4}
              lg={3}
              key={id}
              className="flex items-center justify-center "
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
    </Container>
  );
};

export default MoreRecipes;
