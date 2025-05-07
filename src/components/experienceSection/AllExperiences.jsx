import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Práctica Profesional",
    company: "Vass Chile",
    date: "2019",
    responsibilities: [
      "Apoyo en tareas de desarrollo Front-End y Back-End con tecnologías como React, Angular y Node.js.",
      "Colaboración en proyectos internos del área de salud.",
      "Participación en el diseño básico de interfaces de usuario.",
      "Capacitación en herramientas y metodologías ágiles dentro de la empresa.",
    ],
  },
  {
    job: "Software Engineer",
    company: "Vass Chile",
    date: "2019 - 2023",
    responsibilities: [
      "Desarrollo de consultas complejas en bases de datos Oracle (procedimientos y vistas).",
      "Mantenimiento y mejora de sistemas web empresariales y servicios REST.",
      "Integración de microservicios para soluciones escalables con Node.js y Angular.",
      "Colaboración en la evolución técnica de plataformas para clientes corporativos.",
    ],
  },
  {
    job: "Desarrollador Full Stack",
    company: "Grupo SYCAR",
    date: "2023 - 2025",
    responsibilities: [
      "Desarrollo integral de sistemas web utilizando React en el frontend y Node.js o Laravel en el backend.",
      "Implementación de nuevas funcionalidades enfocadas en rendimiento y seguridad.",
      "Optimización de interfaces centradas en la experiencia de usuario (UX).",
      "Liderazgo técnico en proyectos para clientes internos y externos del sector privado.",
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
