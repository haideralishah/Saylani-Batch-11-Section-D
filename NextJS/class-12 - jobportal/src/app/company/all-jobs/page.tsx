"use client";

import JobCard from "@/components/job-card";
import { useAuthContext } from "@/context/auth-context";
import { auth, db } from "@/firebase/firebaseconfig";
import { onAuthStateChanged } from "firebase/auth";
import {
  collection,
  DocumentData,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";

export default function AllJobs() {
  const { user } = useAuthContext()!;
  const [companyJobs, setCompanyJobs] = useState<DocumentData[]>([]);

  useEffect(() => {
    if (!user) return;
    fetchAllJobs();
  }, [user]);

  const fetchAllJobs = async () => {
    let jobsRef = collection(db, "jobs");
    let uid = user?.uid;
    let q = where("uid", "==", uid);
    let jobQuery = query(jobsRef, q);
    try {
      let allJobsSnapshot = await getDocs(jobQuery);
      let allJobs = allJobsSnapshot.docs.map((doc) => {
        let obj = doc.data();
        obj.id = doc.id;
        return obj;
      });
      setCompanyJobs(allJobs);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      {companyJobs.length > 0 &&
        companyJobs.map(({ jobTitle, jobDescription }) => (
          <JobCard jobTitle={jobTitle} jobDescription={jobDescription} />
        ))}
    </>
  );
}
