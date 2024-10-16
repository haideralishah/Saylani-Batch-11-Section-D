import { useRouter } from "next/navigation";

type JobCardType = {
  jobTitle: string;
  jobDescription: string;
  salaryRange: string;
  qualification: string;
  skillSet: string;
  name: string;
  jobId: string;
};

export default function JobseekerCard({
  jobTitle,
  jobDescription,
  salaryRange,
  qualification,
  skillSet,
  name,
  jobId,
}: JobCardType) {
  const route = useRouter();

  const goToApplyPage = () => {
    route.push(`/jobseeker/${jobId}`);
  };

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <div className="card-body">
        <h3 className="card-title">Company Name: {name}</h3>
        <h3 className="card-title">Job Title: {jobTitle}</h3>
        <p>Job Description: {jobDescription}</p>
        <p>Expected Salary: {salaryRange}</p>
        <p>Required Skills: {skillSet}</p>
        <p>Minimum Qualification: {qualification}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Favorite</button>
          <button className="btn btn-primary" onClick={goToApplyPage}>
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}
