import Layout from "../layouts/Layout";
import { blogPosts, BlogPost, getBlogPostId } from "../data/blog";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

export default function Blog() {
  // functions for navigation

  return (
    <Layout>
      <>
        {/* blog coming soon */}
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-6xl font-bold mt-20 dark:text-gray-200">
            Blog Coming Soon
          </h1>
          <p className="text-xl mt-5 dark:text-gray-200">
            Check back later for more content!
          </p>
        </div>
      </>
    </Layout>
  );
}
