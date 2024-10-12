import { useEffect, useState } from "react";
import JobCard from "../../components/JobCard";
import { AuthBase } from "../../api/authBase";
// import { useContext } from "react";
// import { AuthContext } from "../../authContext/context";
// import { AuthContextProvider } from "../../types/types";
import { GridLoader } from "react-spinners";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import SearchContainer from "../../components/dashboard/searchContainer";
import { jobDetails } from "../../types/types";
export default function GetJob() {
  const [jobDetails, setJobDetails] = useState<jobDetails[]>([]);
   const [searchValue, setSearchValue] = useState({
     company: "",
     status: "All",
     jobType: "All",
   });
  const [loadingJobs, setLoadingJobs] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [count, setCount] = useState(0)

  // const { setLoding } = useContext(AuthContext) as AuthContextProvider;

  // const getAllJobs = useCallback(async () => {
  //   //  setLoading(true)
  //   try {
  //     const response = await AuthBase.get("/jobs");
  //     // const status = response.status;
  //     const data = response.data.jobs;
  //     console.log(response.data);

  //       setJobDetails(data);
  //     setCount(response.data.count);
  //   } catch (err) {
  //     const error = err as AxiosError;
  //     if (!error.response) {
  //       toast.error(
  //         "Network Error: Please check your internet connection and refresh."
  //       );
  //     }
  //     console.error(error);
  //   } finally {
  //     setLoading(false);
  //     setLoadingJobs(false);
  //   }
  // }, []);

   const getAllJobs = async () => {
     const { company, status, jobType } = searchValue;
     //  setLoading(true)
     try {
       const response = await AuthBase.get(
         `/jobs?company=${company}&status=${status}&jobType=${jobType}&page=${page}`
       );
       // const status = response.status;
       const data = response.data.jobs;
       setCount(response.data.count);
       setJobDetails(data);
       setTotalPages(response.data.numOfPages);
     } catch (err) {
       const error = err as AxiosError;
       if (!error.response) {
         toast.error(
           "Network Error: Please check your internet connection and refresh."
         );
       }
       console.error(error);
     } finally {
       // setLoading(false);
       setLoadingJobs(false);
     }
   };

  useEffect(() => {
   

    getAllJobs();

  }, [page]);

  const handlePrevPage = () => {
    setPage((page) => page - 1);
  };

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
  };

  const deleteJob = async (id: string) => {
    try {
       await AuthBase.delete(`/jobs/${id}`);
      getAllJobs()
    } catch (err) {
      const error = err as AxiosError;
      if (!error.response) {
        toast.error(
          "Network Error: Please check your internet connection and refresh."
        );
      } else {
        toast.error("Unable to delete. Please try again");
      }
      console.log(error);
    }
  };

 

  return (
    <main className="w-[95%]  mx-auto">
      <SearchContainer setCount={setCount} setJobDetails={setJobDetails} setTotalPages={setTotalPages} setSearchValue ={setSearchValue} searchValue={searchValue}/>
      <div className="pt-10  my-10">
        {loadingJobs ? (
          <div className=" text-center pt-5">
            {" "}
            <GridLoader size={30} color={"#1d3557"} loading={loadingJobs} />
            <p>Loading Jobs ...</p>
          </div>
        ) : (
          <>
            {jobDetails.length === 0 ? (
              <p className=" font-openSans text-xl text-center">
                You have 0 jobs to track ):
              </p>
            ) : (
              <h2 className=" text-2xl py-10 font-semibold">
                {" "}
                {count} Jobs Found
              </h2>
            )}

            <section className=" grid sm:grid-cols-1  lg:grid-cols-2 gap-y-5 ">
              {jobDetails?.map((job, i) => {
                return (
                  <div key={i}>
                    <JobCard job={job} handleDelete={deleteJob} />
                  </div>
                );
              })}
            </section>
            {totalPages > 1 && (
              <section className=" my-10 mr-10 justify-end flex gap-6">
                <button
                  disabled={page === 1}
                  onClick={handlePrevPage}
                  className=" rounded-md border px-5 py-2 border-blue"
                >
                  Prev
                </button>
                <button
                  disabled={page >= totalPages}
                  onClick={handleNextPage}
                  className=" rounded-md border px-5 py-2 border-blue"
                >
                  Next
                </button>
              </section>
            )}
          </>
        )}
      </div>
    </main>
  );
}
