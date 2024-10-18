"use client";

import AdminJobCard from "@/components/admin-job-card copy";
import { db } from "@/firebase/firebaseconfig";
import {
  collection,
  doc,
  DocumentData,
  getDoc,
  onSnapshot,
} from "firebase/firestore";
import { useEffect, useState } from "react";

export default function AdminHome() {
  const [myJobs, setMyJobs] = useState<DocumentData[]>([]);

  useEffect(() => {
    fetchAllJobs();
  }, []);

  const fetchAllJobs = async () => {
    let jobsRef = collection(db, "jobs");

    const unsub = onSnapshot(jobsRef, async (jobsSnapshot) => {
      let allJobs = jobsSnapshot.docs.map(async (job) => {
        let jobData = job.data();

        let jobCreatorUID = jobData.uid;
        let jobCreatorRef = doc(db, "users", jobCreatorUID);
        let jobCreatorInfo = await getDoc(jobCreatorRef);
        let jobObject = {
          ...jobData,
          companyInfo: jobCreatorInfo.data(),
          docId: job.id,
        };

        return jobObject;
      });

      let alljobsResolved = await Promise.all(allJobs);
      console.log(alljobsResolved);
      setMyJobs(alljobsResolved);
    });

    return unsub;
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
            companyInfo,
            docId,
            hold,
            deleted,
          }) => (
            <AdminJobCard
              key={docId}
              jobId={docId}
              name={companyInfo.name}
              jobTitle={jobTitle}
              jobDescription={jobDescription}
              salaryRange={salaryRange}
              qualification={qualification}
              skillSet={skillSet}
              hold={hold}
              deleted={deleted}
            />
          )
        )}
    </>
  );
}
