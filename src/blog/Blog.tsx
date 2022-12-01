import Layout from "../layouts/Layout";
import { blogPosts, BlogPost, getBlogPostId } from "../data/blog";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Blog() {
  // functions for navigation

  return (
    <Layout>
      <>
        <div className="flex flex-col items-center">
          <h1 className="text-6xl font-bold mt-20 dark:text-gray-200">Blog</h1>
          <p className="text-xl mt-10 dark:text-gray-200">Coming soon!</p>
        </div>
      </>
    </Layout>
  );
}
