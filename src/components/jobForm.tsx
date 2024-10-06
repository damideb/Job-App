import { jobDetails } from "../types/types";
type Props = {
  title: string;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  jobDetails: jobDetails;
  handleFormSubmit: ()=>void
};
export default function JobForm({
  title,
  handleInputChange,
  jobDetails,
  handleFormSubmit,
}: Props) {
  return (
    <div className=" bg-white w-[90%] mx-auto   rounded-lg h-fit p-10">
      <h2 className=" text-4xl text-center py-5 font-openSans">{title}</h2>
      {/* Form for adding job */}

      <section className=" py-5 gap-y-5 grid grid-cols-3 gap-3">
        <div>
          <label htmlFor="position" className="block w-full my-2 font-circular">
            Position
          </label>
          <input
            type="text"
            id="position"
            name="position"
            required
            onChange={handleInputChange}
            value={jobDetails.position}
            className=" w-full bg-primary px-10 py-2 rounded outline-none border"
          />
        </div>

        <div>
          <label htmlFor="comapany" className="block w-full my-2 font-circular">
            Company Name
          </label>
          <input
            className=" w-full bg-primary px-10 py-2 rounded outline-none border"
            type="text"
            id="company"
            name="company"
            onChange={handleInputChange}
            value={jobDetails.company}
            required
          />
        </div>

        <div>
          <label className="block w-full my-2 font-circular" htmlFor="location">
            Job Location
          </label>
          <input
            className=" w-full bg-primary px-10 py-2 rounded outline-none border"
            type="text"
            id="location"
            name="jobLocation"
            onChange={handleInputChange}
            value={jobDetails.jobLocation}
            required
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
            onChange={handleInputChange}
            value={jobDetails.status}
            className="w-full bg-primary px-2 py-2 rounded outline-none border"
          >
            <option value="Pending">Pending</option>
            <option value="Interview">Interview</option>
            <option value="Accepted">Accepted</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
        <div>
          <label className="block w-full my-2 font-circular" htmlFor="jobType">
            Job Type
          </label>
          <select
            id="jobType"
            name="jobType"
            onChange={handleInputChange}
            value={jobDetails.jobType}
            className="w-full bg-primary px-2 py-2 rounded outline-none border"
          >
            <option value="">Select Job Type</option>
            <option value="Full-time">Full Time</option>
            <option value="Part-time">Part Time</option>
            <option value="Internship">Internship</option>
          </select>
        </div>
      </section>
      <button onClick={handleFormSubmit} className=" flex justify-center bg-blue text-white p-3 text-xl font-openSans w-[70%] mx-auto mt-7 ">
        Submit
      </button>
    </div>
  );
}
