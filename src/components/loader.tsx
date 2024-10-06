import { HashLoader } from "react-spinners";
//bg-[rgba(0,0,0,0.5)] 
export default function Loader() {
  return (
    <div className="h-screen w-full bg-[rgba(0,0,0,0.5)]   ">
      <div className="  absolute   top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]  ">
        <HashLoader color="#1D3557" size={150} />
      </div>
    </div>
  );
}
