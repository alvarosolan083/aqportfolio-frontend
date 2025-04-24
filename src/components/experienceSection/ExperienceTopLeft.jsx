import ExperienceInfo from "./ExperienceInfo";
import { FaArrowRight } from "react-icons/fa";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Experiencia Profesional
      </p>

      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="5+" text="Años" />
        <FaArrowRight className="text-lightBrown text-3xl" />
        <ExperienceInfo number="+5" text="Proyectos" />
      </div>

      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="10+" text="Tecnologías" />
        <FaArrowRight className="text-lightBrown text-3xl" />
        <ExperienceInfo number="+3" text="Empresas" />
      </div>

      <p className="text-center text-lightGrey text-[15px]">
        Experiencia creando soluciones modernas, eficientes y escalables con
        enfoque en frontend y backend.
      </p>
    </div>
  );
};

export default ExperienceTopLeft;
