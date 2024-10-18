import { db } from "@/firebase/firebaseconfig";
import { doc, updateDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

type JobCardType = {
  jobTitle: string;
  jobDescription: string;
  salaryRange: string;
  qualification: string;
  skillSet: string;
  name: string;
  jobId: string;
  hold?: boolean;
  deleted?: boolean;
};

export default function AdminJobCard({
  jobTitle,
  jobDescription,
  salaryRange,
  qualification,
  skillSet,
  name,
  jobId,
  hold,
  deleted,
}: JobCardType) {
  const changePublishStatus = () => {
    const jobRef = doc(db, "jobs", jobId);
    if (hold) {
      updateDoc(jobRef, { hold: false });
    } else {
      updateDoc(jobRef, { hold: true });
    }
  };
  const changeDeleteStatus = () => {
    const jobRef = doc(db, "jobs", jobId);
    if (deleted) {
      updateDoc(jobRef, { deleted: false });
    } else {
      updateDoc(jobRef, { deleted: true });
    }
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
          <button className="btn btn-primary" onClick={changePublishStatus}>
            {hold ? "Publish" : "Hold"}
          </button>
          <button className="btn btn-primary" onClick={changeDeleteStatus}>
            {deleted ? "Recover" : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}
