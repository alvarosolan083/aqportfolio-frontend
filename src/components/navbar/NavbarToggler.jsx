import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../state/menuSlice";

const NavbarToggler = () => {
  const dispatch = useDispatch();
  const menuOpen = useSelector((state) => state.menu.menuOpen);

  const handleToggle = () => {
    dispatch(toggleMenu());
  };

  return (
    <button
      onClick={handleToggle}
      style={menuOpen ? { backgroundColor: "rgb(251 151 24)" } : {}}
      className={`text-2xl p-3 border border-orange rounded-full 
        transition-all duration-300 ease-in-out 
        ${menuOpen ? "text-black scale-110" : "bg-black text-white hover:scale-105"}`}
    >
      {menuOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
    </button>
  );
};

export default NavbarToggler;
