"use client";
import { FC, useState } from "react";
import Image from "next/image";
interface ICheckboxProps {
  label: string;
  ingredient?: boolean;
}

const Checkbox: FC<ICheckboxProps> = ({ label, ingredient = false }) => {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <div
        onClick={() => setChecked(!checked)}
        className={`rounded-full h-6 w-6 flex justify-center items-center ${
          checked ? "bg-black " : "bg-white border-2 border-stone-300"
        }`}
      >
        {checked && (
          <Image src="/images/tick.svg" width={10} height={6} alt="checkbox" />
        )}
      </div>

      <span
        className={`${checked && "line-through text-stone-200"} ${
          ingredient ? "text-lg" : "text-2xl font-semibold"
        }`}
      >
        {label}
      </span>
    </>
  );
};

export default Checkbox;
