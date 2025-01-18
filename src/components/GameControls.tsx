import { motion } from "framer-motion";
import {
  faPlay,
  faStop,
  faTrash,
  faRandom,
} from "@fortawesome/free-solid-svg-icons";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import ControlButton from "./ControlButton";

interface GameControlsProps {
  isRunning: boolean;
  onToggleRunning: () => void;
  onClear: () => void;
  onRandom: () => void;
}

export default function GameControls({
  isRunning,
  onToggleRunning,
  onClear,
  onRandom,
}: GameControlsProps) {
  return (
    <motion.div
      className="flex gap-4"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <ControlButton
        icon={isRunning ? (faStop as IconProp) : (faPlay as IconProp)}
        onClick={onToggleRunning}
      />
      <ControlButton icon={faTrash as IconProp} onClick={onClear} />
      <ControlButton icon={faRandom as IconProp} onClick={onRandom} />
    </motion.div>
  );
}
