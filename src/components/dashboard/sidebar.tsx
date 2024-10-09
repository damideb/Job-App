import { Link, useLocation } from "react-router-dom";
import MobileMenu from "./mobileMenu";

export default function Sidebar() {
  const location = useLocation();
  const pathname = location.pathname;

  const sideContent = [
    { title: "Add Jobs", Link: "/dashboard" },
    { title: "Get Jobs", Link: "/dashboard/all-jobs" },
    { title: "Profile", Link: "/dashboard/profile" },
  ];
  return (
    <>
    <MobileMenu />
      <div className="hidden md:block w-[300px] ">
        <div className=" fixed  text-black w-[250px] top-0 h-screen bg-white">
          <h1 className=" px-14 text-3xl font-openSans  py-5">
            <Link to="/">JobQuest</Link>
          </h1>

          <div className="   font-medium   text-blue my-20">
            {sideContent.map((item, index) => (
              <div
                key={index}
                className={`${
                  pathname === item.Link
                    ? " bg-primary text-blue border-l-4 border-blue"
                    : ""
                } transition-all border-b-2 py-10 border-b-[#ECEEF1] duration-500`}
              >
                <Link
                  to={item.Link}
                  className="px-14 text-2xl hover:text-[#4A76E1]"
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
