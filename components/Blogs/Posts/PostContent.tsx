import { FC } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
interface IPostContentProps {
  QsnAns: { question: string; answer: string; image: string; quote: string }[];
}

const PostContent: FC<IPostContentProps> = (props) => {
  return (
    <Container className="max-w-screen-xl  my-16 px-10 md:px-20 mx-auto  ">
      <Grid container rowGap={8} justifyContent="center" className="">
        <Grid item xs={12} lg={9}>
          {/* posts content section */}
          <Grid container rowGap={6}>
            {props.QsnAns.map(({ question, answer, image, quote }) => (
              <>
                <h4>{question}</h4>
                {image && (
                  <Image
                    src={image}
                    alt="question image"
                    width={840}
                    height={400}
                    className="rounded-[20px]"
                  />
                )}
                <p>{answer}</p>
                {quote && (
                  <h3 className="w-full tracking-tight text-[36px] font-medium italic flex items-center justify-center p-10 leading-[60px] border-y-2 border-y-zinc-200 bg-gradient-to-r from-zinc-100 to-transparent">
                    {quote}
                  </h3>
                )}
              </>
            ))}
          </Grid>
        </Grid>

        <Grid item xs={12} lg={2}>
          {/* Share section */}
          <Grid
            container
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <span>SHARE THIS ON:</span>
            <Grid container rowGap={2}>
              <Grid
                item
                xs={4}
                lg={12}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="logo"
                >
                  <Image
                    src={"/images/facebook.svg"}
                    alt="facebook icon"
                    width={10}
                    height={20}
                  />
                </IconButton>
              </Grid>
              <Grid
                item
                xs={4}
                lg={12}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="logo"
                >
                  <Image
                    src={"/images/tweeter.svg"}
                    alt="tweeter icon"
                    width={22}
                    height={18}
                  />
                </IconButton>
              </Grid>
              <Grid
                item
                xs={4}
                lg={12}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="logo"
                >
                  <Image
                    src={"/images/instagram.svg"}
                    alt="instagram icon"
                    width={22}
                    height={22}
                  />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PostContent;
