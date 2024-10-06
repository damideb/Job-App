import { useEffect, useState, useCallback } from "react";
import JobCard from "../../components/JobCard";
import { AuthBase } from "../../api/authBase";
import { useContext } from "react";
import { AuthContext } from "../../authContext/context";
import { AuthContextProvider } from "../../types/types";

type jobDetails = {
  position: string;
  company: string;
  jobLocation: string;
  createdAt: string;
  jobType: string;
  status: string;
  _id: string;
};
export default function GetJob() {
  const [jobDetails, setJobDetails] = useState<jobDetails[]>([])

   const {setLoading } = useContext(
     AuthContext
   ) as AuthContextProvider;

   const getAllJobs = useCallback( async() => {
 
       //  setLoading(true)
       try {
         const response = await AuthBase.get("/jobs");
         const status = response.status;
         const data = response.data.jobs;
         console.log(status, data);
         if (status === 200) {
           setJobDetails(data);
         }
       } catch (error) {
         console.error(error);
       } finally {
         setLoading(false);
       }
  
   }, [setLoading]);
   
   useEffect(() => {
     // const getAllJobs = async ()=>{
     //   //  setLoading(true)
     //   console.log('what')
     //   try {
     //     const response = await AuthBase.get('/jobs')
     //     const status = response.status
     //     const data = response.data.jobs
     //     console.log(status, data)
     //     if(status ===200){
     //       setJobDetails(data)
     //     }
     //   } catch (error) {
     //     console.error(error)
     //   }
     //   finally{
     //     setLoading(false)
     //   }
     // }

     getAllJobs();

     // return ()=>{
     //   console.log("Component Unmounted")
     //   setLoading(false)
     //}
   }, [getAllJobs]);

   const deleteJob = async (id:string) => {
     try {
       const response = await AuthBase.delete(`/jobs/${id}`);
       const filteredResult = jobDetails.filter((job)=>job?._id !==id)
       setJobDetails(filteredResult);
       console.log(response);
     } catch (error) {
       console.log(error);
     }
   };
  return (
    <main className="w-[90%] mx-auto">
      <div className=" mb-5">
        <div className=" bg-white    rounded-lg h-fit p-10">
          <h2 className=" text-4xl text-center font-openSans">Search Job</h2>
          {/* Form for adding job */}

          <section className=" py-5 gap-y-5 grid grid-cols-3 gap-3">
            <div>
              <label
                htmlFor="Search"
                className="block w-full my-2 font-circular"
              >
                Search
              </label>
              <input
                type="text"
                placeholder="search by job title"
                id="Search"
                name="Search"
                required
                className=" w-full bg-primary px-10 py-2 rounded outline-none border"
              />
            </div>

            <div>
              <label
                className="block w-full my-2 font-circular"
                htmlFor="jobStatus"
              >
                Job status
              </label>
              <select
                id="jobStatus"
                className="w-full bg-primary px-2 py-2 rounded outline-none border"
              >
                <option value="Pending">Pending</option>
                <option value="Interview">Interview</option>
                <option value="accepted">Accepted</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
            <div>
              <label
                className="block w-full my-2 font-circular"
                htmlFor="jobType"
              >
                Job Type
              </label>
              <select
                id="jobType"
                className="w-full bg-primary px-2 py-2 rounded outline-none border"
              >
                <option value="All">All</option>
                <option value="FullTime">Full Time</option>
                <option value="PartTime">Part Time</option>
                <option value="Remote">Internship</option>
              </select>
            </div>
          </section>
          <button className=" flex justify-center bg-blue text-white p-3 text-xl font-openSans w-[70%] mx-auto mt-7 ">
            Submit
          </button>
        </div>
      </div>
      <section className=" grid grid-cols-2 gap-y-3 my-10">
        {jobDetails?.map((job, i) => {
          return (
            <div key={i}>
              <JobCard job={job} handleDelete={deleteJob} />
            </div>
          );
        })}
      </section>
    </main>
  );
}
