import { FC } from "react";
import Recommendation from "@/components/RecipeDetails/RecommendationRecipe";
import SubscribeCard from "@/components/SubscribeCard";
import Blogs from "../../../helper/blogsPosts.json";
import Recipes from "../../../helper/recipe.json";
import PostHeader from "@/components/Blogs/Posts/PostHeader";
import PostContent from "@/components/Blogs/Posts/PostContent";
interface IBlogPostProps {}

export default function BlogPost({ params }: { params: { postId: string } }) {
  const item = Blogs.filter((item) => item.id == params.postId)[0];

  const recipeItems = Recipes.filter((item) => item.Top !== 1).slice(0, 4);
  return (
    <>
      <PostHeader
        id={item.id}
        title={item.title}
        author={item.author}
        description={item.description}
        image={item.image}
      />
      <PostContent QsnAns={item.QsnAns} />
      <SubscribeCard />
      <Recommendation
        recipes={recipeItems}
        title="Check out the delicious recipe"
      />
    </>
  );
}
