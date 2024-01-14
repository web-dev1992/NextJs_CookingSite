import { Container, Grid } from "@mui/material";
import Image from "next/image";
import { FC } from "react";
interface ILearnMoreProps {}

const LearnMore: FC<ILearnMoreProps> = (props) => {
  return (
    <Container className="max-w-screen-xl">
      <Grid container rowGap={12} className="m-auto my-48  px-0 ">
        <Grid item xs={12} md={6}>
          <div className="h-full flex flex-col justify-center items-start gap-16 ">
            <h2>Everyone can be a chef in their own kitchen</h2>
            <p className="text-left">
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim
            </p>
            <button className="btn">Learn More</button>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="bg-gradient-to-t from-skyblue rounded-4xl relative h-[500px]">
            <Image
              src={"/images/HappyChef.svg"}
              width={660}
              height={600}
              alt="Chef"
              className="absolute bottom-0 -left-10"
            />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};
export default LearnMore;
