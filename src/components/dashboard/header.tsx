import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../authContext/context";
import { AuthContextProvider } from "../../types/types";
import { CiMenuBurger } from "react-icons/ci";
import { MdOutlineArrowDropDown, MdArrowDropUp } from "react-icons/md";
import Logout from "../logout";

export default function Header() {
  const { state, setShowMenu } = useContext(AuthContext) as AuthContextProvider;

  const [showLogout, setShowLogout] = useState(false);

  return (
    <div className="  flex justify-between px-3 sm:px-10 items-center z-50 bg-white text-  p-3 h-[90px] fixed top-0 w-full">
      <button className="md:hidden" onClick={() => setShowMenu(true)}>
        <CiMenuBurger className="text-3xl " />
      </button>
      <h1 className=" hidden sm:block sm:px-5 text-xl sm:text-2xl font-openSans text-blue  py-5">
        <Link to="/">JobQuest</Link>
      </h1>
      <h2 className="hidden md:block  text-center font-semibold font-openSans text-2xl ">
        Dashboard
      </h2>
      <div className="relative">
        <button
          onClick={() => setShowLogout((prev) => !prev)}
          className=" shadow-lg drop-shadow-lg flex justify-center items-center gap-2 text-lg sm:text-xl bg-blue font-circular text-primary  px-3  py-2 rounded "
        >
          <span className=" bg-primary size-6 sm:size-8 grid place-content-center  rounded-full text-blue">
            {state.user?.name.charAt(0)}
          </span>
          {state.user?.name}
        { !showLogout ?  <span className=" font-bold">
            <MdOutlineArrowDropDown className="" />
          </span> :
          <span><MdArrowDropUp/></span>}
        </button>
        {showLogout && <Logout />}
      </div>
    </div>
  );
}
