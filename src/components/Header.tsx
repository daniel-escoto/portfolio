import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="flex justify-end items-center px-6 py-4">
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
      </nav>
    </header>
  );
}
