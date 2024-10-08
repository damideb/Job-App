import { Link, useNavigate } from "react-router-dom";
import image from "../assets/auth.png";
import { useState } from "react";
import { AuthBase } from "../api/authBase";
import { toast } from "react-toastify";
import { AxiosError } from "axios";



export default function Register() {

    const [formData, setFormData] = useState({ email: "", password: "", username:'', matchPassword:'' });
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [errors, setErrors] = useState(false);

    const Navigate = useNavigate()
  const Register = async (e: React.FormEvent<HTMLFormElement>) => {
    const userData = {
      email: formData.email,
      password: formData.password,
     name: formData.username,
    };
    e.preventDefault();
    if (errors) return false;

    setIsLoggedIn(true);
    //API call to register user

    try{
      const data = await AuthBase.post("auth/register", userData);

      const{token} = data.data
      if(token){
        Navigate('/dashboard')
         toast.success('Registration successfull');
      }

      localStorage.setItem("token", token)
      
    console.log(data);
    }
    catch(err){
       const error = err as AxiosError;
       if (!error.response) {
         toast.error(
           "Network Error: Please check your internet connection and refresh."
         );
       } 
       toast.error('Registeration failed. Try again')
    }
    finally{
      setIsLoggedIn(false);
    }
    
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState =>({ ...prevState, [name]: value }));
   
  };

  const validateInput = () => {
 if (formData.password !== formData.matchPassword) {
   setErrors(true);
   console.log(formData.password, formData.matchPassword);
 } else {
   setErrors(false);
 }
  }

  return (
    <div className="flex justify-between h-[100svh]">
      <div className=" px-5 bg-[#a8dadc49] flex flex-col gap-3 w-[40%]  justify-center">
        <h1 className=" text-3xl font-openSans mb-3">Register your account</h1>
        <form onSubmit={Register} className=" space-y-7 font-circular">
          <div className={`input-container flex flex-col gap-2`}>
            <input
              type="text"
              id="emailAddress"
              autoComplete="off"
              value={formData.email}
              name="email"
              onChange={handleInput}
              placeholder=" "
              required
              className="outline-none p-3 bg-[#f1faee] rounded border border-black"
            />
            <label htmlFor="emailAddress" className="floating-label">
              <span className="px-2">Enter your email</span>
            </label>
          </div>
          <div className={` input-container flex flex-col gap-2`}>
            <input
              type="text"
              id="username"
              autoComplete="off"
              value={formData.username}
              name="username"
              onChange={handleInput}
              placeholder=" "
              required
              className="outline-none p-3 bg-[#f1faee] rounded border border-black"
            />
            <label htmlFor="username" className="floating-label">
              <span className="px-2">Username</span>
            </label>
          </div>
          <div className={` input-container flex flex-col gap-1`}>
            <input
              type="password"
              id="password"
              autoComplete="off"
              value={formData.password}
              name="password"
              onChange={handleInput}
              placeholder=" "
              required
              onBlur={validateInput}
              className="outline-none p-3 bg-[#f1faee] rounded border border-black"
            />
            <label htmlFor="password" className="floating-label">
              <span className="px-2">Password</span>
            </label>
          </div>

          <div className={` input-container flex flex-col gap-2`}>
            <input
              type="password"
              id="matchPassword"
              autoComplete="off"
              value={formData.matchPassword}
              name="matchPassword"
              onChange={handleInput}
              placeholder=" "
              required
              onBlur={validateInput}
              className="outline-none p-3 bg-[#f1faee] rounded border border-black"
            />
            <label htmlFor="matchPassword" className="floating-label">
              <span className="px-2">Confirm Password</span>
            </label>

            {errors && (
              <p className="text-[13px] text-center text-red-600">
                password must match
              </p>
            )}
          </div>

          <button className=" bg-[#1D3557] w-full text-white p-3">
            {" "}
            {isLoggedIn ? "Registering ..." : "Register"}
          </button>
        </form>
        <p className=" text-center text-sm">
          Have an account?{" "}
          <span className="text-[#1D3557] font-semibold">
            <Link to="/login"> Log in</Link>
          </span>
        </p>
      </div>
      <img src={image} alt="illuustration" className=" h-full w-[60%]" />
    </div>
  );
}
