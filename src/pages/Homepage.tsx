import { Link } from "react-router-dom";
import illustation from "../assets/illustration.svg";
import { useNavigate } from "react-router";
import Logo from "../components/Logo";

function Homepage() {
  const navigate = useNavigate();
  const token= localStorage.getItem('token');
  return (
    <>
      <div className="flex justify-between items-center px-3  py-3 sm:px-14 ">
        <Logo />

        {token && (
          <Link to="/dashboard">
            <button className=" bg-blue h-fit py-2 sm:py-3 rounded sm:text-xl shadow-md px-3 sm:px-6 drop-shadow-md font-semibold text-white">
              Dashboard
            </button>
          </Link>
        )}
      </div>

      <main className=" flex flex-col sm:flex-row text-[#333333] justify-between py-[5em] sm:py-[8em] px-3 sm:px-14">
        <div className=" sm:w-[65%]">
          <p className=" text-[13px] font-circular bg-[#A8DADC] w-fit px-2 py-1 rounded-full">
            Apply, Track Your Job Search & Get Hired.
          </p>
          <h1 className=" text-[1.5rem] sm:text-[2rem] pb-3 font-semibold font-openSans">
            STREAMLINE YOUR <span className=" text-[#1a3e70]">JOB </span>SEARCH
            WITH EASE
          </h1>
          <h2 className="pb-5 font-DMSans">
            Apply to jobs, Keep track of all your job applications and interviews in one place.
            Stay organized, focused, and on top of your career journey. Join
            thousands of job seekers who have streamlined their search and
            secured their dream job with our application tracking tool.
          </h2>

          <div className=" font-openSans flex gap-5 my-3 ">
            <button
              className="   border-2 border-[#1D3557] w-[180px] py-3 text-xl  login-button "
              onClick={() => navigate("/apply")}
            >
              Apply
            </button>
            <button
              className=" border-2 border-[#1D3557]  w-[180px] py-3 text-xl getstarted-button"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>
        </div>

        <img
          src={illustation}
          alt="homepage-illustration"
          className=" hidden sm:block sm:w-[45%] sm:mt-[-80px]"
        />
      </main>
    </>
  );
}

export default Homepage;
