import { FC } from "react";
import Grid from "@mui/material/Grid";
import Recipes from "../helper/recipe.json";
import RecipeCard from "./RecipeCard";
import Ads from "./Ads";
interface IRecipesListProps {}

const RecipesList: FC<IRecipesListProps> = (props) => {
  const newRecipes = Recipes.filter((recipe) => recipe.Top == 1);
  return (
    <Grid
      container
      className="my-16 px-10 md:px-20 mx-auto"
      justifyContent={"center"}
      rowGap={4}
    >
      <h2 className="text-center">Simple and tasty recipes</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa itaque
        rerum qui, facere odit pariatur. Molestias facilis libero maiores quasi.
      </p>

      <Grid
        container
        sx={{ rowGap: 4, justifyContent: "center", width: "100%" }}
      >
        {newRecipes.map(({ id, title, image, TimeToReady, Category }) => (
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            key={id}
            className="flex items-center justify-center"
          >
            {Category == "Ads" ? (
              <Ads />
            ) : (
              <RecipeCard
                id={id}
                title={title}
                image={image}
                TimeToReady={TimeToReady}
                Category={Category}
              />
            )}
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default RecipesList;
