import { FC } from "react";
import Grid from "@mui/material/Grid";
import { Ingredients } from "./Ingredients";
import { Direction } from "./Direction";
import Ads from "../Ads";
import { OtherRecipes } from "../OtherRecipes";
interface ICookingStepsProps {
  directions: { title: string; image: string; direction: string }[];
  recipes: {
    id: number;
    title: string;
    image: string;
    TimeToReady: number;
    Category: string;
    author: { name: string; image: string; date: string };
  }[];
}

export const CookingSteps: FC<ICookingStepsProps> = (props) => {
  return (
    <Grid
      container
      rowGap={8}
      className="my-16 px-10 md:px-20 mx-auto"
      justifyContent={"center"}
    >
      <Grid item xs={12} lg={8}>
        {/* ingredient section */}
        <Ingredients />
        {/* direction section */}
        <Direction directions={props.directions} />
      </Grid>

      <Grid item xs={12} lg={4}>
        {/* other recipes section */}
        <Grid
          container
          rowGap={10}
          sx={{ justifyContent: { xs: "center", lg: "left" } }}
        >
          <Grid item>
            <OtherRecipes recipes={props.recipes} title="Other Recipes" />
          </Grid>
          <Grid item>
            <Ads />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
