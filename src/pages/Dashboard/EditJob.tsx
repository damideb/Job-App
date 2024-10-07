import JobForm from "../../components/jobForm";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { AuthBase } from "../../api/authBase";
import { jobDetails } from "../../types/types";
import { toast } from "react-toastify";

export default function EditJob() {
  const [jobDetails, setJobDetails] = useState<jobDetails>({
    position: "",
    company: "",
    jobLocation: "",
    jobType: "",
    status: "",
  });
  const [Loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    // fetch the job details using the id
    const getJob = async () => {
      try {
        const response = await AuthBase.get(`/jobs/${id}`);
        const data = response.data.job;
        setJobDetails(data);
      } catch (error) {
        console.error(error);
      }
    };
    getJob();
  }, [id]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setJobDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const EditJobDetails = async () => {
    setLoading(true);
    try {
      const response = await AuthBase.patch(`/jobs/${id}`, jobDetails);
      const data = response.data.job;
      if (response.status === 200) {
        toast.success("Job updated successfully");
        setJobDetails(data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <JobForm
      title="Edit Job"
      handleInputChange={handleInputChange}
      jobDetails={jobDetails}
      handleFormSubmit={EditJobDetails}
      Loading={Loading}
    />
  );
}
