import { GoSearch } from "react-icons/go";

type Details = {
  query: string;
  location: string;
  employment_types: string;
};
type Props = {
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  searchDetails:Details
  setSearchParams:(searchParams:Details)=>void;
  searching:boolean
};

export default function JobSearch({
  handleInputChange,
  searchDetails,
  setSearchParams,
  searching
}: Props) {
  function handleJobSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const { query, location, employment_types } = searchDetails;

    setSearchParams({
      query: query,
      location: location,
      employment_types: employment_types,
    });
  }

  return (
    <form
      onSubmit={handleJobSearch}
      className=" grid grid-cols-2 md:grid-cols-4 gap-2 font-circular lg:flex  bg-white p-2 shadow-lg rounded-lg"
    >
      <input
        placeholder="Job title"
        required
        value={searchDetails.query}
        onChange={handleInputChange}
        type="search"
        name="query"
        className=" bg-white px-7 py-3 lg:w-[30%] rounded outline-none border"
      />
      <input
        placeholder="Job Location"
        required
        value={searchDetails.location}
        name="location"
        type="search"
        onChange={handleInputChange}
        className=" bg-white px-7 lg:w-[30%]  py-3 rounded outline-none border"
      />
      <select
        className=" bg-white px-5 py-3 lg:w-[30%] rounded outline-none border"
        onChange={handleInputChange}
        name="employment_types"
        value={searchDetails.employment_types}
      >
        <option value="FULLTIME">Full-time</option>
        <option value="PARTTIME">Part-time</option>
        <option value="INTERN">Intern</option>
        <option value="CONTRACTOR">Contractor</option>
      </select>
      <button
        disabled={searching}
        className=" bg-blue lg:w-[10%] px-5 py-2 text-2xl grid place-content-center text-white rounded"
      >
        <GoSearch />
      </button>
    </form>
  );
}
