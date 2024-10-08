import { useNavigate } from "react-router";
import { IoLocationOutline } from "react-icons/io5";
import { CgCalendarDates } from "react-icons/cg";
import { MdOutlineWorkHistory } from "react-icons/md";

type job = {
  position: string;
  company: string;
  jobLocation: string;
  createdAt: string;
  jobType: string;
  status: string;
  _id:string
};

type Props ={
  job:job,
  handleDelete: (id:string) => Promise<void>,
}
export default function JobCard({job, handleDelete}:Props) {
  const navigate = useNavigate();

  const deleteJob = async()=>{

   await handleDelete(job._id)
  }

  const status = job.status;

  const date = job.createdAt
  const dateObject = new Date(date);

  const formattedDate = dateObject.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const position = job.position
 const newPosition = position.charAt(0).toUpperCase() + position.slice(1);

  return (
    <div className="bg-white w-[450px] shadow-lg rounded-lg px-5 py-10">
      <div className=" flex gap-7 pt-2 pb-4 border-b">
        <div className=" bg-blue px-5  py-3 grid place-content-center rounded text-white font-bold text-2xl">
          {job.company.charAt(0).toUpperCase()}
        </div>
        <div>
          <h2 className=" text-2xl font-openSans">{newPosition}</h2>
          <h3 className=" text-gray-500">{job.company}</h3>
        </div>
      </div>
      <div className=" grid grid-cols-2 text-[15px]  gap-5 py-5">
        <h3 className="flex gap-2 text-[1.1rem] font-circular">
          <IoLocationOutline/>
          {job.jobLocation}</h3>
        <h3 className=" flex gap-2  font-circular">
          <CgCalendarDates/>
          {formattedDate}</h3>
        <h3 className=" flex gap-2 font-circular">
          <MdOutlineWorkHistory/>
          {job.jobType}</h3>
        <h3
          className={`${
            status === "Accepted"
              ? "Accepted"
              : status === "Rejected"
              ? "Rejected"
              : "bg-[#E0E8F9]"
          } font-circular w-fit px-2 py-1 rounded`}
        >
          {job.status}
        </h3>
      </div>
      <div className=" flex gap-2">
        <button
          className="bg-blue py-1 px-3 text-white rounded"
          onClick={() => navigate(`/dashboard/edit/${job?._id}`)}
        >
          Edit
        </button>
        <button
          className="bg-blue py-1 px-3 text-white rounded"
          onClick={deleteJob}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
