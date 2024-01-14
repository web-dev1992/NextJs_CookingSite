import { CookingSteps } from "@/components/RecipeDetails/CookingSteps";
import Header from "@/components/RecipeDetails/Header";
import Recommendation from "@/components/RecipeDetails/RecommendationRecipe";
import SubscribeCard from "@/components/SubscribeCard";
import RepDetails from "../../../helper/RepDetails.json";
import Recipes from "../../../helper/recipe.json";
import { FC } from "react";
interface IRecipeDetailsProps {}

export default function RecipeDetails({
  params,
}: {
  params: { recipeId: string };
}) {
  const newRep = RepDetails.filter((rep) => rep.id == +params.recipeId)[0];

  const items = Recipes.filter((item) => item.Top !== 1).slice(0, 4);

  return (
    <>
      <Header
        title={newRep.title}
        author={newRep.author}
        prepTime={newRep.prepTime}
        cookTime={newRep.cookTime}
        category={newRep.Category}
        video={newRep.video}
        image={newRep.image}
        nutritionInfo={newRep.nutritionInfo}
        description={newRep.desc}
      />
      <CookingSteps directions={newRep.directions} recipes={items.slice(0,3)}/>
      <SubscribeCard />
      <Recommendation recipes={items} title="You may like these recipe too" />
    </>
  );
}
