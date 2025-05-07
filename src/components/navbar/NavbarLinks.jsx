import { Link } from "react-scroll";
import { useDispatch } from "react-redux";
import { setMenuOpen } from "../../state/menuSlice";

const links = [
  { link: "Sobre mí", section: "about" },
  { link: "Habilidades", section: "skills" },
  { link: "Experiencia", section: "experience" },
  { link: "Proyectos", section: "projects" },
  { link: "Contacto", section: "contact" },
];

const NavbarLinks = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setMenuOpen(false));
  };

  return (
    <ul className="flex lg:flex-row sm:flex-col gap-6 text-white font-body lg:relative sm:absolute sm:top-[120%] text-center left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-gradient-to-b sm:from-cyan/40 sm:to-black/70 sm:shadow-xl sm:rounded-xl backdrop-blur-lg lg:bg-black sm:w-full py-4 px-6 sm:animate-slideFadeIn">
      {links.map((link, index) => (
        <li key={index} className="group relative">
          <Link
            activeClass="active-link"
            to={link.section}
            spy={true}
            smooth={true}
            duration={500}
            offset={-130}
            onClick={handleClick}
            className="cursor-pointer text-white hover:text-cyan transition-all duration-500 relative sm:pb-2"
          >
            <span className="relative">
              {link.link}
              {/* Línea inferior animada solo en mobile si está activo */}
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] w-[75%] origin-left scale-x-0 bg-gradient-to-r from-cyan to-orange transition-transform duration-300 sm:block hidden"></span>
            </span>
          </Link>

          {/* Línea para desktop (hover) */}
          <div className="mx-auto h-[2px] w-0 bg-gradient-to-r from-cyan to-orange transition-all duration-500 group-hover:w-full lg:block hidden"></div>
        </li>
      ))}

      {/* Estilo que activa el scale-x del subrayado en móvil */}
      <style jsx="true">{`
        .active-link span > span {
          transform: scaleX(1) !important;
        }
      `}</style>
    </ul>
  );
};

export default NavbarLinks;