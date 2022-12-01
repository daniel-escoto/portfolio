import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  return (
    <header className="flex justify-between items-center px-6 py-4">
      <motion.a
        href="/"
        className="text-2xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
      >
        {location.pathname !== "/" ? "Daniel Escoto" : ""}
      </motion.a>
      <nav className="flex space-x-4">
        <motion.a
          href="#projects"
          className="text-gray-800 dark:text-gray-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Projects
        </motion.a>
        <motion.a
          href="#timeline"
          className="text-gray-800 dark:text-gray-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Timeline
        </motion.a>
        <motion.a
          href="#contact"
          className="text-gray-800 dark:text-gray-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact
        </motion.a>
        {/* Blog */}
        <motion.a
          href="/blog"
          className="text-gray-800 dark:text-gray-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Blog
        </motion.a>
      </nav>
    </header>
  );
}
