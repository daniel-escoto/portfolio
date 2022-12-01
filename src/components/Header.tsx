import { motion } from "framer-motion";
import { useLocation, Link } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  return (
    <header className="flex justify-between items-center px-6 py-4">
      <Link to="/">
        <p className="text-2xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
          {location.pathname !== "/" ? "Daniel Escoto" : ""}
          {location.pathname === "/blog" ? (
            <span className="text-gray-500 dark:text-gray-400 italic font-light mt-2">
              /blog
            </span>
          ) : (
            ""
          )}
        </p>
      </Link>
      <nav className="flex space-x-4">
        {/* TODO: convert these to links */}
        {location.pathname === "/" ? (
          <>
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
            <Link to="/blog" className="text-gray-800 dark:text-gray-200">
              <motion.p whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Blog
              </motion.p>
            </Link>
          </>
        ) : (
          ""
        )}
      </nav>
    </header>
  );
}
