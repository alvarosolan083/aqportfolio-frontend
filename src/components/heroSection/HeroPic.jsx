import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { PiHexagonThin } from "react-icons/pi";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="relative flex items-center justify-center h-[460px] w-[400px]"
    >
      {/* Fondo hexagonal animado */}
      <div className="absolute inset-0 z-0 flex justify-center items-center animate-pulse">
        <PiHexagonThin className="h-full w-full text-cyan blur-md animate-[spin_20s_linear_infinite]" />
      </div>

      {/* Imagen centrada y recortada dentro del hexágono */}
      <div className="z-10 w-[260px] h-[300px] overflow-hidden clip-hexagon">
        <img
          src="/images/image.png"
          alt="Álvaro Solano"
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>
  );
};

export default HeroPic;
