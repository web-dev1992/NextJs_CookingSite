import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import CategoryList from "@/components/CategoryList";
import { RecipesList } from "@/components/RecipesList";
import { LearnMore } from "@/components/LearnMore";
export default function Home() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Navbar />
      <Header />
      <CategoryList />
      <RecipesList />
      <LearnMore />
    </div>
  );
}
