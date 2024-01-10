import { FC } from "react";
import Image from "next/image";
interface IAdProps {}

export const Ads: FC<IAdProps> = (props) => {
  return <Image src="/images/Ads.png" width={400} height={434} alt="Ads" />;
};
