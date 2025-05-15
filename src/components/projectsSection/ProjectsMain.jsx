import ProjectsText from "./ProjectsText";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    id: 1,
    title: "Administrador de Tareas 📋",
    description:
      "App fullstack con NestJS + React para crear, editar y eliminar tareas con autenticación JWT.",
    image: "/images/capture.jpeg",
    link: "https://tareas-frontend-dusky.vercel.app/",
  },
  {
    id: 2,
    title: "Portafolio Personal 💼",
    description:
      "Sitio web responsive con animaciones, navegación fluida y diseño moderno con Tailwind y React.",
    image: "/images/website-img-1.jpg",
    
  },
  // Agrega más proyectos aquí si quieres
];

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-[#1e293b] text-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition transform hover:scale-[1.02]"
            variants={fadeIn("up", index * 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.4 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full object-cover h-[180px]"
            />
            <div className="p-4 flex flex-col justify-between">
              <h3 className="text-lg font-bold mb-2 text-center">
                {project.title}
              </h3>
              <p className="text-xs text-lightGrey text-center mb-3">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center bg-cyan-600 hover:bg-cyan-700 text-white text-sm px-3 py-2 rounded"
              >
                Ver Proyecto
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <p className="text-center text-xl text-lightGrey mt-12">
        
      </p>
    </div>
  );
};

export default ProjectsMain;
