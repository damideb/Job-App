import React from "react";

type search = {
  company: string;
  status: string;
  jobType: string;
};

type Props = {
  setSearchValue: React.Dispatch<React.SetStateAction<search>>;
  searchValue: search;
  setSearchParams: (searchParams: search) => void; //New prop added to update search parameters in URL
  resetFilter: () => void;
  loadingJobs: boolean;
  searchParams: URLSearchParams;
};

export default function SearchContainer({
  setSearchValue,
  searchValue,
  setSearchParams,
  searchParams,
  resetFilter,
  loadingJobs,
}: Props) {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setSearchValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // const debounce = (func, delay) => {
  //   let timer;
  //   return (...args) => {
  //     clearTimeout(timer);
  //     timer = setTimeout(() => func(...args), delay);
  //   };
  // };.
  // const deboundeFunc = debounce(searchJob, 300)
  //Debounce function to handle delay if search is done on every keystroke

  const searchJob = async () => {
    const { company, status, jobType } = searchValue;

    const currentParams = Object.fromEntries(searchParams.entries());

    setSearchParams({ ...currentParams, company, status, jobType });
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
              value={searchValue.company}
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
              value={searchValue.status}
              className="w-full bg-primary px-2 py-2 rounded outline-none border"
            >
              <option value="All">All</option>
              <option value="Pending">Pending</option>
              <option value="Interview">Interview</option>
              <option value="Accepted">Accepted</option>
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
              value={searchValue.jobType}
              className="w-full bg-primary px-2 py-2 rounded outline-none border"
            >
              <option value="All">All</option>
              <option value="Full-time">Full Time</option>
              <option value="Part-time">Part Time</option>
              <option value="Internship">Internship</option>
            </select>
          </div>
        </section>
        <div className=" flex gap-3 mt-7 md:text-xl font-circular">
          <button
            onClick={searchJob}
            disabled={loadingJobs}
            className=" bg-blue text-white md:p-3 p-2 w-full md:w-[70%]   "
          >
            Submit
          </button>
          <button
            onClick={resetFilter}
            disabled={loadingJobs}
            className=" bg-blue text-white min-w-fit p-2 md:p-3  w-full md:w-[25%] "
          >
            Reset Search filter
          </button>
        </div>
      </div>
    </div>
  );
}
