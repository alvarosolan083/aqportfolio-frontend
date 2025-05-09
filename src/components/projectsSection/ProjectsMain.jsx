import ProjectsText from "./ProjectsText";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col items-center justify-center gap-10 max-w-[900px] mx-auto mt-12">
        <p className="text-center text-xl text-lightGrey">
          Actualmente estoy trabajando en varios proyectos interesantes. ¡Muy pronto estarán disponibles aquí!
        </p>
      </div>
    </div>
  );
};

export default ProjectsMain;
