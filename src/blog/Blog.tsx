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
        <div className="flex flex-col items-center">
          <h1 className="text-6xl font-bold mt-20 dark:text-gray-200">Blog</h1>
          <p className="text-xl mt-5 dark:text-gray-200">
            {blogPosts.length} Posts
          </p>

          {/* blog posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            {blogPosts.map((post: BlogPost) => (
              <motion.div
                key={post.title}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-5"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to={`/blog/${getBlogPostId(post)}`}>
                  <h1 className="text-2xl font-bold dark:text-gray-200">
                    {post.title}
                  </h1>
                  <p className="text-gray-500 dark:text-gray-400 mt-2">
                    <ReactMarkdown>
                      {post.content.slice(0, 100) + "..."}
                    </ReactMarkdown>
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </>
    </Layout>
  );
}
