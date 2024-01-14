"use client";
import { FC } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Image from "next/image";
interface IContactUsProps {}

export const ContactUs: FC<IContactUsProps> = (props) => {
  const handleSubmit = () => {};
  return (
    <Container className="max-w-screen-xl my-16">
      <h1 className="text-center text-[60px] w-full py-16">Contact us</h1>
      <Grid container>
        <Grid
          item
          xs={12}
          lg={4}
          className="bg-gradient-to-t h-[432px] from-skyblue rounded-4xl relative my-16"
        >
          <Image
            src="/images/Chef.png"
            alt="contact-us"
            width={350}
            height={470}
            className="absolute bottom-0 left-8"
          />
        </Grid>
        <Grid item xs={12} lg={8}>
          <Grid container>
            <form
              onSubmit={handleSubmit}
              className="lg:ml-10 w-full flex flex-col justify-center items-start gap-8 my-14"
            >
              <Grid
                container
                className="flex flex-col md:flex-row gap-5 flex-nowrap"
              >
                <Grid
                  item
                  xs={12}
                  lg={6}
                  className="flex flex-col gap-4 flex-nowrap"
                >
                  <label htmlFor="name" className="contact-label">
                    NAME
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name..."
                    className="contact-input"
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  lg={6}
                  className="flex flex-col gap-4 flex-nowrap"
                >
                  <label htmlFor="email" className="contact-label">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email address..."
                    className="contact-input"
                  />
                </Grid>
              </Grid>
              <Grid
                container
                className="flex flex-col md:flex-row gap-5 flex-nowrap"
              >
                <Grid
                  item
                  xs={12}
                  lg={6}
                  className="flex flex-col gap-4 flex-nowrap"
                >
                  <label htmlFor="subject" className="contact-label">
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Enter subject..."
                    className="contact-input"
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  lg={6}
                  className="flex flex-col gap-4 flex-nowrap"
                >
                  <label htmlFor="enquiry" className="contact-label">
                    ENQUIRY TYPE
                  </label>
                  <select name="enquiry" className="contact-input">
                    <option value="advertising">Advertising</option>
                    <option value="reproof">reproof</option>
                    <option value="recommendation">recommendation</option>
                    <option value="appreciation">appreciation</option>
                  </select>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={12} className="flex flex-col gap-4 flex-nowrap">
                  <label htmlFor="message" className="contact-label">
                    MESSAGES
                  </label>
                  <textarea
                    name="message"
                    placeholder="Enter your messages..."
                    rows={5}
                    className="contact-input"
                  ></textarea>
                </Grid>
              </Grid>
              <button type="submit" className="btn w-44 my-10">
                Submit
              </button>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
