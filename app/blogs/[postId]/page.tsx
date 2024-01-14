import { FC } from "react";
import Recommendation from "@/components/RecipeDetails/RecommendationRecipe";
import SubscribeCard from "@/components/SubscribeCard";
import Recipes from "../../../helper/recipe.json";
interface IBlogPostProps {}

export default function BlogPost({ params }: { params: { postId: string } }) {
  const items = Recipes.filter((item) => item.Top !== 1).slice(0, 4);

  return (
    <>
      <SubscribeCard />
      <Recommendation recipes={items} title="Check out the delicious recipe" />
    </>
  );
}
