import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center px-4 mt-[100px]">
      <h2 className="text-4xl sm:text-5xl md:text-6xl text-cyan font-bold text-center mb-10">
        Sobre mí
      </h2>
      <p className="text-base sm:text-lg max-w-[700px] text-white">
        Álvaro Solano  Desarrollador Full Stack (React, Angular, Java, .NET, Node.js, PHP) 
        con más de 3 años de experiencia creando aplicaciones web atractivas y funcionales.
        Apasionado por los desafíos y en constante aprendizaje.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-base sm:text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          Mis Proyectos
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
