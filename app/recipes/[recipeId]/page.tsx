import { CookingSteps } from "@/components/RecipeDetails/CookingSteps";
import Header from "@/components/RecipeDetails/Header";
import Recommendation from "@/components/RecipeDetails/RecommendationRecipe";
import SubscribeCard from "@/components/SubscribeCard";
import Recipes from "../../../helper/recipe.json";

interface IRecipeDetailsProps {}

export default function RecipeDetails({
  params,
}: {
  params: { recipeId: string };
}) {
  const newRep = Recipes.filter((rep) => rep.id == +params.recipeId)[0];

  const items = Recipes.filter((item) => item.Top !== 1).slice(0, 4);

  return (
    <>
      <Header
        title={newRep.title}
        author={newRep.author}
        prepTime={newRep.prepTime ?? 0}
        cookTime={newRep.cookTime ?? 0}
        category={newRep.Category}
        video={newRep.video ?? ""}
        image={newRep.image}
        nutritionInfo={newRep.nutritionInfo ?? []}
        description={newRep.desc}
      />
      <CookingSteps directions={newRep.directions ?? []} recipes={items.slice(0,3)}/>
      <SubscribeCard />
      <Recommendation recipes={items} title="You may like these recipe too" />
    </>
  );
}
