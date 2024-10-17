import { Link, useLocation } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import useGlobalContext from "../../hooks/globalContext";

type sideContent = {
  title: string;
  Link: string;
  icon: JSX.Element;
};
type Props = {
  sideContent: sideContent[];
};
export default function MobileMenu({ sideContent }: Props) {
  const location = useLocation();
  const pathname = location.pathname;

  const { showMenu, setShowMenu } = useGlobalContext()

  return (
    <div
      className={` ${
        showMenu ? " opacity-100 visible" : " opacity-0 invisible"
      } transition-all duration-700  fixed w-[95%] py-5 z-50   rounded-lg h-[95vh] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] shadow-2xl drop-shadow-lg  bg-white md:hidden`}
    >
      <div className="">
        <button
          onClick={() => setShowMenu(false)}
          className="text-left mx-5 border-2 p-2"
        >
          <IoClose className=" text-blue text-2xl" />
        </button>
        <h1 className=" text-center px-14 text-blue text-2xl font-openSans  py-3">
          <Link to="/">JobQuest</Link>
        </h1>

        <div className="  text-center font-medium   text-blue my-5">
          {sideContent.map((item, index) => (
            <div
              onClick={() => setShowMenu(false)}
              key={index}
              className={`${
                pathname === item.Link
                  ? " bg-primary text-blue border-l-4 border-blue"
                  : ""
              } transition-all border-b-2 py-10 border-b-[#ECEEF1] duration-500`}
            >
              <Link
                to={item.Link}
                className="px-14 text-2xl flex justify-center items-center gap-5 hover:text-[#4A76E1]"
              >
                <span className=" inline-block text-center mx-auto w-[20%] ">
                  {item.icon}
                </span>
                <p className=" w-[55%] text-left mx-auto  ">{item.title}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
