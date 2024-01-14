import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
interface IAdProps {}

 const Ads: FC<IAdProps> = (props) => {
  return (
    <Link href="/recipes/4">
      <Image src="/images/Ads.png" width={400} height={434} alt="Ads" />
    </Link>
  );
};
export default Ads;