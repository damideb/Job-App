import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import JobSearch from "../components/application/JobSearch";
import axios from "axios";
import SummaryCard from "../components/application/summaryCard";
import JobDetailsSection from "../components/application/JobDetailsSection";
import { jobSearch } from "../types/types";
import Loader from "../components/loader";
import Logo from "../components/Logo";
import { useError } from "../hooks/error";
import { AxiosError } from "axios";
import { IoIosArrowBack } from "react-icons/io";

export default function Application() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchDetails, setSearchDetails] = useState({
    query: searchParams.get("query") || "",
    location: searchParams.get("location") || "",
    employment_types: searchParams.get("employment_types") || "FULLTIME",
  });
  const [jobList, setJobList] = useState<jobSearch[]>([
    {
      employer_name: "",
      job_title: "",
      job_apply_link: "",
      job_city: "",
      job_state: "",
      job_description: "",
      job_is_remote: false,
      job_employment_type: "",
      job_posted_at_datetime_utc: "",
    },
  ]);

  const [jobIndex, setJobIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [searching, setSearching] = useState(true);
  const [showDescription, setShowDescription] = useState(false);

  const options = {
    method: "GET",
    url: "https://jsearch.p.rapidapi.com/search",
    params: {
      query: `${searchDetails.query} in ${searchDetails.location}`,
      employment_types: searchDetails.employment_types,
      page: "1",
      num_pages: "1",
      date_posted: "all",
    },
    headers: {
      "x-rapidapi-key": import.meta.env.VITE_API_KEY,
      "x-rapidapi-host": "jsearch.p.rapidapi.com",
    },
  };

  const {setError} = useError()
  useEffect(() => {
    const getJobs = async () => {
      setSearching(true);
      try {
        const response = await axios.request(options);

        const data = response.data.data;

        const dataList = data.map((job: jobSearch) => ({
          employer_name: job.employer_name,
          job_title: job.job_title,
          job_apply_link: job.job_apply_link,
          job_city: job.job_city,
          job_state: job.job_state,
          job_description: job.job_description,
          job_is_remote: job.job_is_remote,
          job_employment_type: job.job_employment_type,
          job_posted_at_datetime_utc: job.job_posted_at_datetime_utc,
        }));

        const sortedList = (): jobSearch[] => {
          return dataList.sort((a: jobSearch, b: jobSearch) => {
            const dateA = new Date(a.job_posted_at_datetime_utc).getTime();
            const dateB = new Date(b.job_posted_at_datetime_utc).getTime();
            return dateB - dateA;
          });
        };

        setJobList(sortedList());
        console.log(jobList, data);
      } catch (err) {
         const error = err as AxiosError;
         console.log(error)
         if (!error.response) {
           setError(
             "Network Error: Please check your internet connection and refresh."
           );
         }
        setError(` ${error.status} ${error.message}. Dismiss to reload the app`);
       
        
      } finally {
        setLoading(false);
        setSearching(false);
      }
    };
    getJobs();
  }, [searchParams]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setSearchDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <main className=" mx-auto">
      <div className="sm:px-10  w-fit ">
        <Logo />
      </div>

      {loading ? (
        <Loader />
      ) : (
        <div className="md:py-10 py-3  sm:px-10  mx-auto ">
          {!showDescription && <JobSearch
            handleInputChange={handleInputChange}
            searchDetails={searchDetails}
            setSearchParams={setSearchParams}
            searching={searching}
          />}

          <main className=" hidden md:flex  mt-10 gap-5">
            <JobDetailsSection foundJobs={jobList} setJobIndex={setJobIndex} />

            <section className="  w-[65%] relative overflow-y-auto h-[90vh] rounded-lg border-2 ">
              <SummaryCard job={jobList[jobIndex]} />
            </section>
          </main>
          {/* mobile component */}
          <main className=" md:hidden font-circular  mt-5 gap-5">
            {showDescription && (
              <button
                className="py-1 my-3 flex items-center gap-2"
                onClick={() => setShowDescription((prev) => !prev)}
              >
                <IoIosArrowBack /> Back to search
              </button>
            )}
            {!showDescription ? (
              <JobDetailsSection
                foundJobs={jobList}
                setJobIndex={setJobIndex}
                setShowDescription={setShowDescription}
              />
            ) : (
              <section className="  relative overflow-y-auto h-[80vh] border-2 ">
                <SummaryCard job={jobList[jobIndex]} />
              </section>
            )}
          </main>
        </div>
      )}
    </main>
  );
}
