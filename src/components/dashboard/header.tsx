import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../authContext/context";
import { AuthContextProvider } from "../../types/types";

export default function Header() {
  const { state } = useContext(AuthContext) as AuthContextProvider;

  return (
    <div className="  flex justify-between px-10 items-center z-50 bg-white text-  p-3 h-[90px] fixed top-0 w-full">
      <h1 className=" px-10 text-2xl font-openSans text-blue  py-5">
        <Link to="/">JobQuest</Link>
      </h1>
      <h2 className="  text-center font-semibold font-openSans text-2xl ">
        Dashboard
      </h2>
      <h2 className=" shadow-lg drop-shadow-lg text-xl bg-blue font-openSans text-primary grid place-content-center  px-4 py-2 rounded ">
        {state.user?.name}
      </h2>
    </div>
  );
}
