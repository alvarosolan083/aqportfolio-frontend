import { Link } from "react-scroll";
import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <button
      className="px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full 
                 text-sm sm:text-base md:text-lg font-semibold font-body 
                 text-white border-cyan border flex items-center gap-1 
                 bg-gradient-to-r from-darkCyan to-orange 
                 transition-all duration-300 hover:scale-105 
                 hover:border-orange cursor-pointer hover:shadow-cyanShadow"
    >
      <Link
        spy={true}
        smooth={true}
        duration={500}
        offset={-120}
        to="contact"
      >
        Contáctame
      </Link>
      <div className="sm:hidden md:block">
        <LuArrowDownRight />
      </div>
    </button>
  );
};

export default NavbarBtn;
