import Layout from "./layouts/Layout";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <>
      <Layout>
        <h1 className="text-6xl font-bold text-center mt-20 dark:text-gray-200">
          404
        </h1>
        <p className="text-2xl text-center mt-10 dark:text-gray-200">
          The page you are looking for does not exist.
        </p>
        {/* return home */}
        <div className="flex justify-center mt-10">
          <motion.a
            href="/"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-gray-600 text-white font-bold py-2 px-4 rounded border border-gray-700 dark:bg-gray-700 dark:border-gray-900"
          >
            Return Home
          </motion.a>
        </div>
      </Layout>
    </>
  );
}
