import { jobSearch } from "../../types/types";

type Props = {
  job: jobSearch;
};
export default function SummaryCard({ job }: Props) {
  const paragraphs = job.job_description.split("•");
  const descriptions =paragraphs.slice(1)
  const heading = paragraphs[0]
  return (
    <div className=" ">
      <section className=" md:p-5 p-3 shadow-md sticky top-0 w-full rounded-b-lg bg-primary  drop-shadow-lg">
        <p className=" ">{job.employer_name}</p>
        <h2 className=" text-xl md:text-2xl font-circular leading-[1.8em]">
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

      <div className="  p-5 font-circular leading-[2em]">
        <h3 className=" text-[1.1rem]">{heading}</h3>
        {descriptions.map((p: string, i: number) => {
          return <p key={i} className=" py-1">• {p}</p>;
        })}
      </div>
    </div>
  );
}
