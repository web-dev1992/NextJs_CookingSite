import Recommendation from "@/components/RecipeDetails/RecommendationRecipe";
import SubscribeCard from "@/components/SubscribeCard";
import Recipes from "../../helper/recipe.json";
import { ContactUs } from "@/components/ContactUs";

export default function Contact() {
  const items = Recipes.filter((item) => item.Top !== 1).slice(0, 4);
  return (
    <>
      <ContactUs />
      <SubscribeCard />
      <Recommendation recipes={items} title="Check out the delicious recipe" />
    </>
  );
}
