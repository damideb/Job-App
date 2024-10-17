
import { useError } from "../../hooks/error"; 
import { MdErrorOutline } from "react-icons/md";

const GlobalErrorDisplay = () => {
    
  const { error, setError } = useError(); 
 const handleDismiss = () => {
   setError(null); 
   window.location.reload()

 };
  if (!error) return null; // If no error, don't render anything

  return (
    <div className="bg-blue font-circular fixed space-x-3 top-0 z-50 shadow-md drop-shadow-md text-white p-3 w-full text-center">


      <p className=" text-sm   pb-3">
        {" "}
        <MdErrorOutline className="text-red-500 inline-block  text-xl mx-2" />{" "}
        {error}
      </p>
      <button onClick={handleDismiss} className=" border-2  px-3">
        Dismiss
      </button>
    </div>
  );
};

export default GlobalErrorDisplay;
