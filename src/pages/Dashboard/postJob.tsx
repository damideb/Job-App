import { useState } from "react";
import { useNavigate } from "react-router";
import JobForm from "../../components/jobForm";
import { AuthBase } from "../../api/authBase";
import { toast } from "react-toastify";
import { jobDetails } from "../../types/types";

export default function PostJob() {
  const [jobDetails, setJobDetails] = useState<jobDetails>({
    position: "",
    company: "",
    jobLocation: "",
    jobType: "",
    status: "",
  });
  const [Loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const createJobs = async () => {
    try {
      const response = await AuthBase.post("/jobs", jobDetails);

      if (response.status === 201) {
        toast.success("Job posted successfully!");
        navigate("/dashboard/all-jobs");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setJobDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // useEffect(()=>{
  // const url = "https://api.apijobs.dev/v1/job/search";
  // const data = {
  //   "q": "Frontend developer",
  // };

  // const jobs = () => {
  //   fetch(url, {
  //     method: "POST",
  //     headers: {
  //       apikey:
  //         "e02c00a56dfae7a3c29476985898680f5977d812bc5e55c101776d84c3baf6a4",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //     mode:"no-cors",
  //   })
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => console.error("Error:", error));
  // };

  // jobs()
  // },[])

  return (
    <JobForm
      title="Add Job"
      handleInputChange={handleInputChange}
      jobDetails={jobDetails}
      handleFormSubmit={createJobs}
      Loading={Loading}
    />
  );
}
