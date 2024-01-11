import { FC } from "react";
import { Container, Grid } from "@mui/material";
import Recipes from "../helper/recipe.json";
import { RecipeCard } from "./RecipeCard";
import { Ads } from "./Ads";
interface IRecipesListProps {}

export const RecipesList: FC<IRecipesListProps> = (props) => {
  return (
    <Container className=" max-w-screen-xl px-0">
      <div className="w-full flex-col flex items-center justify-center px-0">
        <div className="flex flex-col items-center justify-center w-full lg:w-2/3 space-y-10 my-10">
          <h2 className="text-center">Simple and tasty recipes</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            itaque rerum qui, facere odit pariatur. Molestias facilis libero
            maiores quasi.
          </p>
        </div>
        <Grid container sx={{ rowGap: 4, justifyContent:"center"}}  >
          {Recipes.map(({ id, title, image, TimeToReady, Category }) => (
            <Grid item xs={12} md={6} lg={4} key={id} className="flex items-center justify-center "  >
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
      </div>
    </Container>
  );
};
