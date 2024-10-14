import JobDetails from "./jobDetails";
import { jobSearch } from "../../types/types";

type Props = {
  foundJobs: jobSearch[];
  setJobIndex: (index: number) => void;
};
export default function JobDetailsSection({ foundJobs, setJobIndex }: Props) {
  return (
    <section className="grid overflow-y-auto scrollbar h-screen gap-y-5  w-[35%]">
      {foundJobs.map((job, index: number) => {
        return (
          <div
            key={index}
            onClick={() => setJobIndex(index)}
            className=" p-5 hover:bg-[#E0E8F9] transition-all duration-300 border-2 rounded-lg "
          >
            <JobDetails job={job} />
          </div>
        );
      })}
    </section>
  );
}
