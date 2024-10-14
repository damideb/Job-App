import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import JobSearch from "../components/application/JobSearch";
import axios from "axios";
import SummaryCard from "../components/application/summaryCard";
import JobDetailsSection from "../components/application/JobDetailsSection";
import { jobSearch } from "../types/types";
import Loader from "../components/loader";
import Logo from "../components/Logo";

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
      "x-rapidapi-key": "d4136ec5b8mshb19ab4391b3e124p1674aajsn8da47b34160a",
      "x-rapidapi-host": "jsearch.p.rapidapi.com",
    },
  };
  useEffect(() => {
    const getJobs = async () => {
      setSearching(true);
      try {
        const response = await axios.request(options);

        const data = response.data.data;

        setJobList(() => {
          return data.map((job: jobSearch) => ({
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
        });
        console.log(jobList, data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
        setSearching(false);
      }
    };
    // getJobs();
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
    <main className="">
      <div className=" w-[95%] sm:px-10  mx-auto ">
        <Logo />
      </div>

      {loading ? (
        <Loader />
      ) : (
        <div className="py-10  w-[95%] sm:px-10  mx-auto ">
          <JobSearch
            handleInputChange={handleInputChange}
            searchDetails={searchDetails}
            setSearchParams={setSearchParams}
            searching={searching}
          />
          <main className=" flex  mt-10 gap-5">
            <JobDetailsSection foundJobs={jobList} setJobIndex={setJobIndex} />

            <section className="  w-[60%] relative overflow-y-auto h-[80vh] border-2 ">
              <SummaryCard job={jobList[jobIndex]} />
            </section>
          </main>
        </div>
      )}
    </main>
  );
}
