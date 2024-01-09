import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import CategoryList from "@/components/CategoryList";

export default function Home() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Navbar />
      <Header />
      <CategoryList />
    </div>
  );
}
