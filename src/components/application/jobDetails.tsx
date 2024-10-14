import { IoLocationOutline } from "react-icons/io5";
import { jobSearch } from "../../types/types";

type JobDetailsProps = {
  job: jobSearch;
};
export default function JobDetails({ job }: JobDetailsProps) {
  const date = job.job_posted_at_datetime_utc as string;
  const dateObject = new Date(date);

  const formattedDate = dateObject.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className=" cursor-pointer font-circular">
      <p className="text-blue font-medium">{job.employer_name}</p>
      <h2 className=" sm:text-xl font-circular sm:leading-[1.8em]">
        {job.job_title}
      </h2>
      <p className=" text-sm font-light opacity-70">
        {" "}
        <span className=" inline-block">
          <IoLocationOutline />
        </span>{" "}
        {job.job_city}, {job.job_state}
      </p>
      <div className=" mt-5 flex flex-wrap justify-between">
        <p>{job.job_employment_type}</p>
        <p className="text-sm opacity-80">posted on {formattedDate}</p>
      </div>
    </div>
  );
}
