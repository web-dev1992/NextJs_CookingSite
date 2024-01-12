import { FC } from "react";
import Image from "next/image";
import Container from "@mui/material/Container";
interface ISubsribeCardProps {}

export const SubsribeCard: FC<ISubsribeCardProps> = (props) => {
  return (
    <Container className="max-w-screen-xl m-auto relative overflow-hidden bg-skyblue rounded-6xl flex-col flex items-center justify-center gap-8 px-0 py-20 mb-20">
      <h1 className="text-center w-full md:w-1/2">
        Deliciousness to your inbox
      </h1>
      <p className="w-full md:w-1/2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa itaque
        rerum qui, facere odit pariatur. Molestias facilis libero maiores quasi.
      </p>
      <form className="relative w-full md:w-[480px] h-20 mt-8">
        <input
          type="text"
          className="rounded-3xl w-full h-full placeholder:text-stone-600 px-4"
          placeholder="Your email address..."
        />
        <button className="btn absolute top-2 right-2 w-4/12 md:w-[200px]">
          Subscribe
        </button>
      </form>
      <Image
        src="/images/subscribeSalad.png"
        width={500}
        height={500}
        alt="subsrcibeSalad"
        className="hidden lg:block absolute -bottom-36 -left-36 "
      />
      <Image
        src="/images/subscribePalet.png"
        width={500}
        height={500}
        alt="subscribePalet"
        className="hidden lg:block absolute -bottom-40 -right-40 "
      />
    </Container>
  );
};
