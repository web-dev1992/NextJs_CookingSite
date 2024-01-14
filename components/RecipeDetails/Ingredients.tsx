import { FC } from "react";
import Grid from "@mui/material/Grid";
import Checkbox from "../Checkbox";
interface IIngredientsProps {}

export const Ingredients: FC<IIngredientsProps> = (props) => {
  return (
    <Grid container rowGap={8}>
      <Grid item xs={12}>
        <h3 className="py-14">Ingredients</h3>
        <h4>For main dish</h4>
        {Array.from({ length: 5 }).map((currElement, i) => (
          <div
            className="py-8 mr-10 flex justify-start gap-5 items-center border-b border-stone-200 "
            key={i}
          >
            <Checkbox label={"Lorem ipsum dolor sit amet"} ingredient />
          </div>
        ))}
      </Grid>
      <Grid item xs={12}>
        <h4>For the sauce</h4>
        {Array.from({ length: 3 }).map((currElement, i) => (
          <div
            className="py-8 mr-10 flex justify-start gap-5 items-center border-b border-stone-200 "
            key={i}
          >
            <Checkbox label={"Lorem ipsum dolor sit amet"} ingredient />
          </div>
        ))}
      </Grid>
    </Grid>
  );
};
