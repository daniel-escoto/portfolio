import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";

interface ControlButtonProps {
  icon: IconProp;
  onClick: () => void;
}

export default function ControlButton({ icon, onClick }: ControlButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-400"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} />
    </motion.button>
  );
}
