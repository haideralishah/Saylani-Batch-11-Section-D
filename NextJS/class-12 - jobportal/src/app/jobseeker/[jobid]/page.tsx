"use client";

import { auth, db } from "@/firebase/firebaseconfig";
import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type JobApplicationType = {
  params: { jobid: string };
};

export default function JobApplication({
  params: { jobid },
}: JobApplicationType) {
  const [coverLetter, setCoverLetter] = useState("");
  const [companyUID, setCompanyUID] = useState("");
  const route = useRouter();

  useEffect(() => {
    fetchJobDetails();
  }, []);

  const fetchJobDetails = async () => {
    let jobRef = doc(db, "jobs", jobid);
    let jobSnapshot = await getDoc(jobRef);
    let job = jobSnapshot.data();
    setCompanyUID(job?.uid);
  };

  const submitApplication = async () => {
    const application = {
      jobseekerUID: auth.currentUser?.uid,
      jobDocID: jobid,
      companyUID,
      coverLetter,
    };
    console.log(application);
    let applicationRef = collection(db, "applications");
    // try {
    //   await addDoc(applicationRef, application);
    //   route.push("/jobseeker");
    // } catch (e) {
    //   console.error(e);
    // }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-20 ">
      <h1 className="text-4xl font-bold">Write a suitable cover letter</h1>
      <textarea
        className="textarea w-96"
        placeholder="Cover Letter"
        value={coverLetter}
        onChange={(e) => {
          setCoverLetter(e.target.value);
        }}
      ></textarea>
      <br />
      <button className="btn btn-primary" onClick={submitApplication}>
        Submit Application
      </button>
    </div>
  );
}

// {
// uid
// companyUID
// jobID
// coverletter

// }
