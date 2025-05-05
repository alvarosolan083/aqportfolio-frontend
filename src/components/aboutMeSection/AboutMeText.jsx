import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">Sobre mí</h2>
      <p>
        ¡Hola! Soy Álvaro Solano, un apasionado Analista Programador e Ingeniero en Informática Full Stack con experiencia en frontend y backend.
        Me especializo en el desarrollo de aplicaciones web atractivas y funcionales, utilizando tecnologías como React,
        Angular, Java, .NET, Node.js y PHP. Me encanta enfrentar nuevos desafíos y estoy en constante búsqueda de formas
        para mejorar mis habilidades y conocimientos en el mundo del desarrollo web.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
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
