import Layout from "../layouts/Layout";
import { blogPosts, BlogPost, getBlogPostId } from "../data/blog";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Blog() {
  // functions for navigation

  return (
    <Layout>
      <>
        <h1 className="text-6xl font-bold text-center mt-20 dark:text-gray-200">
          Blog
        </h1>
        <p className="text-2xl text-center mt-10 dark:text-gray-200">
          My thoughts on web development, design, and more.
        </p>
        <div className="flex justify-center mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogPosts.map((post: BlogPost) => (
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                <h2 className="text-2xl font-bold dark:text-white">
                  {post.title}
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  {post.content.length > 100
                    ? post.content.substring(0, 100) + "..."
                    : post.content}
                </p>
                <div className="flex justify-end mt-4">
                  <Link
                    to={`/blog/${getBlogPostId(post)}`}
                    className="bg-gray-600 text-white font-bold py-2 px-4 rounded border border-gray-700 dark:bg-gray-700 dark:border-gray-900"
                  >
                    <motion.p
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      Read More
                    </motion.p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    </Layout>
  );
}
