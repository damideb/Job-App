import {Link} from 'react-router-dom'

export default function Logo() {
  return (
    <>
      <Link to='/'>
        <div className=" w-fit text-xl sm:text-3xl font-openSans text-[#1D3557] py-5">
          <span className=" font-openSans bg-blue px-3 sm:px-5 py-1 sm:py-3 sm:mx-2 mx-1 rounded text-white font-bold w-fit text-xl sm:text-2xl">
            JQ
          </span>{" "}
          JobQuest
        </div>
      </Link>
    </>
  );
}
