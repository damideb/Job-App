import JobDetails from "./jobDetails";
import { jobSearch } from "../../types/types";

type Props = {
  foundJobs: jobSearch[];
  setJobIndex: (index: number) => void;
  setShowDescription?: (show: boolean) => void;
};
export default function JobDetailsSection({
  foundJobs,
  setJobIndex,
  setShowDescription,
}: Props) {

  const handleClick = (index:number)=>{
    setJobIndex(index);
    if(setShowDescription) setShowDescription(true)
  }
  return (
    <section className="grid overflow-y-auto scrollbar h-screen gap-y-5  md:w-[35%]">
      {foundJobs.map((job, index: number) => {
        return (
          <div
            key={index}
            onClick={()=>handleClick(index)}
            className=" p-5 hover:bg-[#E0E8F9] transition-all duration-300 border-2 rounded-lg "
          >
            <JobDetails job={job} />
          </div>
        );
      })}
    </section>
  );
}
