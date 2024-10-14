"use client";

import JobCard from "@/components/job-card";
import JobseekerCard from "@/components/jobseeker-job-card";
import { db } from "@/firebase/firebaseconfig";
import { collection, DocumentData, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function JobSeekerHome() {
  const [myJobs, setMyJobs] = useState<DocumentData[]>([]);
  useEffect(() => {
    fetchAllJobs();
  }, []);
  const fetchAllJobs = async () => {
    let jobsRef = collection(db, "jobs");

    const unsub = onSnapshot(jobsRef, (doc) => {
      let allJobs = doc.docs.map((job) => ({ ...job.data(), id: job.id }));
      setMyJobs(allJobs);
    });
  };
  return (
    <>
      {myJobs.length > 0 &&
        myJobs.map(
          ({
            jobTitle,
            jobDescription,
            salaryRange,
            qualification,
            skillSet,
          }) => (
            <JobseekerCard
              jobTitle={jobTitle}
              jobDescription={jobDescription}
              salaryRange={salaryRange}
              qualification={qualification}
              skillSet={skillSet}
            />
          )
        )}
    </>
  );
}
