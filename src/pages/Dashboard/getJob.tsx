import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
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
  const [searchParams, setSearchParams] = useSearchParams();

  const [jobDetails, setJobDetails] = useState<jobDetails[]>([]);
  const [loadingJobs, setLoadingJobs] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const [count, setCount] = useState(0);

  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);
  const [searchValue, setSearchValue] = useState({
    company: searchParams.get("company") || "",
    status: searchParams.get("status") || "All",
    jobType: searchParams.get("jobType") || "All",
  });

  const getAllJobs = async () => {
    const { company, status, jobType } = searchValue;
    setLoadingJobs(true);
    try {
      const response = await AuthBase.get(
        `/jobs?company=${company}&status=${status}&jobType=${jobType}&page=${page}`
      );
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
      setLoadingJobs(false);
    }
  };

  useEffect(() => {
    getAllJobs();
  }, [searchParams]);

  const handlePrevPage = () => {
    setPage((prevState) => {
      const CurrentPage = prevState - 1;
      setSearchParams((searchParams) => {
        searchParams.set("page", CurrentPage.toString());
        return searchParams;
      });
      return CurrentPage;
    });
  };

  const handleNextPage = () => {
    setPage((prevState) => {
      const next = prevState + 1;

      // fromEntries convert an array  of key/pair values to an object. entries convert a given object to an array of the enumerable own property.
      const currentParams = Object.fromEntries(searchParams.entries());
      setSearchParams({ ...currentParams, page: next.toString() });
      return next;
    });
  };

  const deleteJob = async (id: string) => {
    try {
      await AuthBase.delete(`/jobs/${id}`);
      getAllJobs();
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

  const resetFilter = () => {
    setSearchValue({ company: "", status: "All", jobType: "All" });
    console.log(searchValue);
    // check if search params are present
    if (searchParams.size) {
      setSearchParams({});
      setPage(1);
    }
  };
  return (
    <main className="w-[95%]  mx-auto">
      <SearchContainer
        setSearchValue={setSearchValue}
        searchValue={searchValue}
        setSearchParams={setSearchParams}
        searchParams={searchParams}
        resetFilter={resetFilter}
        loadingJobs={loadingJobs}
      />
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

            <section className=" grid sm:grid-cols-1 lg:grid-cols-2 gap-y-5 ">
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
