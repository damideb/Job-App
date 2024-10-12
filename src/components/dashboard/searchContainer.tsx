import React, {useState} from 'react';
import {toast} from 'react-toastify'
import { AxiosError } from "axios";
import { AuthBase } from '../../api/authBase';
import { jobDetails } from '../../types/types';
 type search ={
    company: string;
    status: string;
    jobType: string;
  
 }

type Props = {
  setJobDetails: React.Dispatch<React.SetStateAction<jobDetails[]>>;
  setCount: (count: number) => void;
  setTotalPages: (totalPages: number) => void;
  setSearchValue: React.Dispatch<React.SetStateAction<search>>;
  searchValue: search;
};

export default function SearchContainer({setJobDetails, setCount, setTotalPages, setSearchValue, searchValue}:Props) {
  
    const [submitting, setSubmitting] = useState(false);
      const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
      ) => {
        const { name, value } = e.target;
        setSearchValue((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };

      const searchJob = async () => {
        setSubmitting(true);
        const { company, status, jobType } = searchValue;
        try {
          const response = await AuthBase.get(
            `/jobs?company=${company}&status=${status}&jobType=${jobType}`
          );
          // const status = response.status;
          const data = response.data.jobs;
          setJobDetails(data);
          setCount(response.data.count);
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
          setSubmitting(false);
        }
      };
  return (
    <div className=" mb-5">
      <div className=" bg-white font-DMSans    rounded-lg h-fit p-5 sm:p-10">
        <h2 className=" text-4xl text-center font-openSans">Search Job</h2>
        {/* Form for adding job */}

        <section className=" py-5 gap-y-5 grid md:grid-cols-3 gap-3">
          <div>
            <label htmlFor="Search" className="block w-full my-2 font-circular">
              Search
            </label>
            <input
              type="text"
              placeholder="search by company name"
              id="Search"
              name="company"
              onChange={handleChange}
              required
              className=" w-full bg-primary px-5 py-2 rounded outline-none border"
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
              name="status"
              onChange={handleChange}
              className="w-full bg-primary px-2 py-2 rounded outline-none border"
            >
              <option value="All">All</option>
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
              name="jobType"
              onChange={handleChange}
              className="w-full bg-primary px-2 py-2 rounded outline-none border"
            >
              <option value="All">All</option>
              <option value="Full-time">Full Time</option>
              <option value="Part-time">Part Time</option>
              <option value="Internship">Internship</option>
            </select>
          </div>
        </section>
        <button
          onClick={searchJob}
          className=" flex justify-center bg-blue text-white p-3 text-xl font-openSans w-full md:w-[70%] mx-auto mt-7 "
        >
          {submitting ? "Submiting ..." : "Submit"}
        </button>
      </div>
    </div>
  );
}
