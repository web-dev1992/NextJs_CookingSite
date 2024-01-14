import { FC } from "react";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import MoreRecipeCard from "../MoreRecipeCard";
interface IRecommendationProps {
  title: string;
  recipes: { id:number; title:string; image:string; TimeToReady:number; Category:string }[];
}

const Recommendation: FC<IRecommendationProps> = (props) => {

  return (
    <Container className="max-w-screen-xl my-28">
      <Grid container sx={{ rowGap: 8, justifyContent: "center" }}>
        <h2>{props.title}</h2>
        <Grid container>
          {props.recipes.map(({ id, title, image, TimeToReady, Category }) => (
            <Grid
              item
              xs={12}
              md={6}
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

export default Recommendation;