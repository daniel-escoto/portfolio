import Layout from "../layouts/Layout";
import { blogPosts, BlogPost, getBlogPostId } from "../data/blog";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

export default function Blog() {
  return (
    <Layout>
      <>
        <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row items-center">
          <h1 className="text-6xl font-bold mt-20 dark:text-gray-200">Blog</h1>
        </div>
        <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row items-center">
          <div className="prose max-w-none mt-10 dark:prose-invert pb-20">
            {blogPosts.map((post) => (
              <div key={post.title}>
                <Link to={`/blog/${getBlogPostId(post)}`}>
                  <h2 className="text-4xl font-bold mt-20 dark:text-gray-200">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-xl mt-5 dark:text-gray-200">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p className="text-xl mt-5 dark:text-gray-200">
                  {post.preview}{" "}
                  <Link to={`/blog/${getBlogPostId(post)}`}>Read more...</Link>
                </p>
              </div>
            ))}
          </div>
        </div>
      </>
    </Layout>
  );
}
