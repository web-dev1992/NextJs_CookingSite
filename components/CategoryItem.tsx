import React, { FC } from "react";
import Image from "next/image";
import Paper  from "@mui/material/Paper";
interface ICategoryItemProps {
  title: string;
  image: string;
  onDragStart: (e: React.DragEvent<HTMLDivElement>) => void;
}

const CategoryItem: FC<ICategoryItemProps> = (props) => {
  return (
    <Paper
      className={`w-44 h-36 m-auto relative rounded-4xl bg-gradient-to-t  to-transparent flex flex-col justify-end items-center p-8 my-24 shadow-none
      ${
        props.title === "Meat"
          ? "from-red-50"
          : props.title === "Dessert" || props.title === "Snack"
          ? "from-orange-50"
          : props.title === "Chocolate" || props.title === "Lunch"
          ? "from-stone-100"
          : props.title === "Breakfast"
          ? "from-lime-50"
          : props.title === "Drink" || props.title === "Healthy"
          ? "from-blue-50"
          : "from-green-50"
      }`}
    >
      <Image
        src={props.image}
        alt={props.title}
        width={100}
        height={100}
        className={`absolute bottom-28 right-1/4 
        ${
          props.title === "Meat" ||
          props.title === "Chocolate" ||
          props.title === "Snack"
            ? "drop-shadow-red"
            : props.title === "Dessert" || props.title === "Lunch"
            ? "drop-shadow-yellow"
            : props.title === "Breakfast" || props.title === "Healthy"
            ? "drop-shadow-stone"
            : props.title === "Drink"
            ? "drop-shadow-blue"
            : "drop-shadow-green"
        }`}
      />
      <h6 className="align-center">
        {props.title}
      </h6>
    </Paper>
  );
};

export default CategoryItem;
