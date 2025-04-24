import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Software Engineer",
    company: "Vass Chile",
    date: "2022 - 2024",
    responsibilities: [
      "Diseño de consultas en Oracle (paquetes, procedimientos, funciones y vistas).",
      "Responsable funcional de sitios web y APIs REST.",
      "Implementación de microservicios con Node.js y Angular.",
      "Participación en proyecto de pasarela de pagos para Caja Los Andes.",
    ],
  },
  {
    job: "Desarrollador Full Stack",
    company: "Grupo SYCAR",
    date: "2019 - 2022",
    responsibilities: [
      "Desarrollo completo de aplicaciones web (frontend y backend).",
      "Uso de React, Node.js y Laravel para proyectos robustos y seguros.",
      "Diseño de interfaces intuitivas para clientes internos y externos.",
    ],
  },
  {
    job: "Práctica Profesional",
    company: "Vass Chile",
    date: "2023",
    responsibilities: [
      "Desarrollo Front-End y Back-End con React, Angular y Node.js.",
      "Participación en proyectos del sector salud.",
      "Diseño de interfaces modernas y funcionales.",
      "Cursos internos de especialización en tecnologías web.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-stretch justify-between flex-wrap gap-6 mt-16">
      {experiences.map((experience, index) => (
        <div key={index} className="flex items-stretch gap-6">
          <SingleExperience experience={experience} />
          {index < experiences.length - 1 && (
            <motion.div
              variants={fadeIn("right", 0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
            >
              <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AllExperiences;
