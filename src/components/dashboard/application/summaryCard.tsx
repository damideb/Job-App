import { jobSearch } from "../../types/types";

type Props = {
  job: jobSearch;
};
export default function SummaryCard({ job }: Props) {
  const paragraphs = job.job_description.split("•");
  return (
    <div className=" transition-all translate-y-0 duration-100">
      <section className=" p-5 shadow-md sticky top-0 w-full rounded-b-lg bg-primary  drop-shadow-lg">
        <p className=" ">{job.employer_name}</p>
        <h2 className=" text-2xl font-circular leading-[1.8em]">
          {job.job_title}
        </h2>
        <p>{job.job_city}</p>

        <p>{job.job_is_remote ? "Remote" : "Onsite"}</p>
        <a target="_blank" rel="noopener noreferrer" href={job.job_apply_link}>
          <button className=" bg-blue px-10 font-openSans py-2 rounded my-2 text-white">
            {" "}
            Apply
          </button>
        </a>
      </section>

      <div className=" mt-5 p-5 font-circular leading-[2em]">
        {paragraphs.map((p: string, i: number) => {
          return <p key={i}>• {p}</p>;
        })}
      </div>
    </div>
  );
}
