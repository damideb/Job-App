import { useContext, useState } from "react";
import { AuthContext } from "../../authContext/context";
import { AuthContextProvider } from "../../types/types";
import { AuthBase } from "../../api/authBase";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
export default function Profile() {
  const { state, dispatch } = useContext(AuthContext) as AuthContextProvider;

  const [profile, setProfile] = useState({
    name: state?.user?.name,
    email: state?.user?.email,
    location: state?.user?.location,
  });

  const [updating, setUpdating] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const updateProfile = async () => {
    const { name, email, location } = profile;
   if (
     Object.values({ name,email, location }).some(
       (field) => !field
     )
   ) {
     toast.error("All fields are required");
     return false;
   }

    try {
      setUpdating(true);
      const response = await AuthBase.patch("/user/update", profile);
      const data = response.data;
      // console.log(data)
      if (response.status === 200) {
        toast.success("Profile updated successfully!");
        dispatch({
          type: "GetCurrentUser",
          payload: { user: data.user },
        });
      }
    } catch (err) {
      const error = err as AxiosError;
      if (!error.response) {
        toast.error(
          "Network Error: Please check your internet connection and refresh."
        );
      } 
      
      toast.error("Failed to update profile!. Please try again");
      console.error(error);
    } finally {
      setUpdating(false);
    }
  };
  return (
    <div className=" bg-white w-[90%] mx-auto   rounded-lg h-fit px-5 py-10 sm:p-5">
      <h2 className=" text-4xl text-center py-5 font-openSans">Edit Profile</h2>
      {/* Form for adding job */}

      <section className=" font-DMSans py-5 gap-y-5 grid sm:grid-cols-2 gap-3">
        <div>
          <label htmlFor="name" className="block w-full my-2 font-circular">
            Username
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={profile.name}
            onChange={handleInputChange}
            required
            className=" w-full bg-primary px-5 py-2 rounded outline-none border"
          />
        </div>

        {/* <div>
          <label htmlFor="LastName" className="block w-full my-2 font-circular">
            Last Name
          </label>
          <input
            className=" w-full bg-primary px-10 py-2 rounded outline-none border"
            type="text"
            id="LastName"
            name="LastName"
            required
          />
        </div> */}

        <div>
          <label className="block w-full my-2 font-circular" htmlFor="location">
            Location
          </label>
          <input
            className=" w-full bg-primary px-5 py-2 rounded outline-none border"
            type="text"
            id="location"
            name="location"
            onChange={handleInputChange}
            value={profile.location}
            required
          />
        </div>

        <div>
          <label className="block w-full my-2 font-circular" htmlFor="email">
            Email
          </label>
          <input
            className=" w-full bg-primary px-5 py-2 rounded outline-none border"
            type="text"
            id="email"
            onChange={handleInputChange}
            name="email"
            value={profile.email}
            required
          />
        </div>
      </section>
      <button
        onClick={updateProfile}
        className=" flex justify-center bg-blue text-white p-3 text-xl font-openSans w-full sm:w-[70%] mx-auto mt-7 "
      >
        {updating ? "Updating" : "Submit"}
      </button>
    </div>
  );
}
