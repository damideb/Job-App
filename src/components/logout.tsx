
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

export default function Logout() {
    const navigate = useNavigate();
    const handleLogout = ()=>{
        
        localStorage.removeItem('token');
        toast.success('Logout Succesful')
        // Redirect to login page
        setTimeout(()=>{
             navigate("/login");
        },1000)
       
    }
  return (
    <button className=' rounded mt-1 font-circular text-center bg-blue px-3 py-2 absolute w-full text-white' onClick={handleLogout}>
      Logout
    </button>
  );
}
