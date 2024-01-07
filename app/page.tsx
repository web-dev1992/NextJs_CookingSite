import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Categories from "@/components/CategorieList";

export default function Home() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Navbar />
      <Header />
      <Categories />
    </div>
  );
}
