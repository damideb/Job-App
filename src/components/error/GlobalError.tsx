// import { useNavigate, useLocation } from "react-router";
import { useError } from "../../hooks/error"; 

const GlobalErrorDisplay = () => {
    
  const { error, setError } = useError(); // Get error and setError from context
 const handleDismiss = () => {
   setError(null); 
//    window.location.reload();
 };
  if (!error) return null; // If no error, don't render anything

  return (
    <div className="bg-blue font-circular fixed top-0 z-50 shadow-md drop-shadow-md text-white p-3 w-full text-center">
      <p className=" text-xl   pb-3">{error}</p>
      <button onClick={handleDismiss} className=" border-2 py-2 px-5">
        Dismiss
      </button>
    </div>
  );
};

export default GlobalErrorDisplay;
