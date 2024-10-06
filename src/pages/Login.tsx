import { Link, useNavigate } from "react-router-dom";
import image from "../assets/auth.png";
import { AuthBase } from "../api/authBase";
import { useState, useContext } from "react";
import { AuthContext } from "../authContext/context";
import { AuthContextProvider } from "../types/types";
import { toast } from "react-toastify";

export default function Login() {
  const { dispatch } = useContext(AuthContext) as AuthContextProvider;

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const Navigate = useNavigate();

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
   e.preventDefault();
    const userData = {
      email: formData.email,
      password: formData.password,
    };

    
    try {
      setIsLoggedIn(true);
      const data = await AuthBase.post("auth/login", userData);

      const { token, user } = data.data;
      if (token) {
        dispatch({
          type: "LOGIN",
          payload: { user: user.name },
        });
        Navigate("/dashboard");
        toast.success(data?.data?.message);
        
      localStorage.setItem("token", token);
      }
      // console.log(token);
    } catch(error) {
      toast.error(error?.response?.data.msg);
      console.log(error);
    } finally {
      setIsLoggedIn(false);
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex justify-between">
      <div className="px-5 bg-[#a8dadc49] flex flex-col gap-5 w-[35%] justify-center">
        <h1 className="text-3xl font-openSans mb-10">Log in to your account</h1>
        <form onSubmit={login} className="space-y-10 font-circular">
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
          <div className={`input-container flex flex-col gap-2`}>
            <input
              type="password"
              id="new-password"
              autoComplete="off"
              name="password"
              onChange={handleInput}
              placeholder=" "
              value={formData.password}
              required
              className="p-3 bg-[#f1faee] rounded"
            />
            <label htmlFor="new-password" className="floating-label">
              Password
            </label>
          </div>

          <button
            disabled={isLoggedIn}
            className="bg-[#1D3557] w-full text-white p-3"
          >
            {isLoggedIn ? "Logging In ..." : "Log in"}
          </button>
        </form>
        <p className="text-center text-sm">
          Don't have an account?{" "}
          <span className="text-[#1D3557] font-semibold">
            <Link to="/register">Sign up</Link>
          </span>
        </p>
      </div>
      <img src={image} alt="illustration" className="h-full w-[65%]" />
    </div>
  );
}
