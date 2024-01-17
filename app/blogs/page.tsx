import { FC } from "react";
import SubscribeCard from "@/components/SubscribeCard";
import BlogForm from "@/components/Blogs/BlogForm";
import { BlogList } from "@/components/Blogs/BlogList";
import BlogPosts from "../../helper/blogsPosts.json";
import recipes from '../../helper/recipe.json'
interface IBlogsListProps {}

export default function BlogsList() {
  const blogs: any = [];
  BlogPosts.forEach((blog) => {
    const { id, title, description, image, author } = blog;
    blogs.push({ id, title, description, image, author });
  });

  return (
    <>
      <BlogForm />
      <BlogList blogs={blogs} recipes={recipes} />
      <SubscribeCard />
    </>
  );
}
