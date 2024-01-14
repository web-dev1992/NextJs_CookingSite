import Header from "@/components/Header";
import CategoryList from "@/components/CategoryList";
import  RecipesList from "@/components/RecipesList";
import  LearnMore from "@/components/LearnMore";
import  InstagramPosts from "@/components/InstagramPosts";
import  MoreRecipes from "@/components/MoreRecipes";
import  SubscribeCard from "@/components/SubscribeCard";

// import {
//   Header,
//   CategoryList,
//   RecipesList,
//   LearnMore,
//   InstagramPosts,
//   MoreRecipes,
//   SubscribeCard,
// } from "@/components";
export default function Home() {
  return (
    <>
      <Header />
      <CategoryList />
      <RecipesList />
      <LearnMore />
      <InstagramPosts />
      <MoreRecipes />
      <SubscribeCard />
    </>
  );
}
