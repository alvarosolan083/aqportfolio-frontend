import { FiCheckCircle } from "react-icons/fi";

const SubHeroMain = () => {
  return (
    <div className="w-full border-y bg-brown border-lightGrey text-lightGrey py-6 px-4">
      <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-center uppercase">
        <div className="flex items-center gap-2 w-full sm:w-auto justify-center">
          <FiCheckCircle className="text-orange text-base sm:text-lg" />
          <p className="text-sm sm:text-base md:text-lg lg:text-xl break-words whitespace-normal">
            Aprendizaje Rápido
          </p>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto justify-center">
          <FiCheckCircle className="text-orange text-base sm:text-lg" />
          <p className="text-sm sm:text-base md:text-lg lg:text-xl break-words whitespace-normal">
            Trabajo en Equipo
          </p>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto justify-center">
          <FiCheckCircle className="text-orange text-base sm:text-lg" />
          <p className="text-sm sm:text-base md:text-lg lg:text-xl break-words whitespace-normal">
            Detallista
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubHeroMain;
