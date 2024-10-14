"use client";

import { auth, db } from "@/firebase/firebaseconfig";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";

export default function CreateNewJob() {
  const [jobTitle, setJobTitle] = useState("");
  const [jd, setJD] = useState("");
  const [qualification, setQualification] = useState("");
  const [skillSet, setSkillSet] = useState("");
  const [otherReq, setOtherReq] = useState("");
  const [jobType, setJobType] = useState("");
  const [salaryRange, setSalaryRange] = useState("");
  const [address, setAddress] = useState("");

  const createNewJob = async () => {
    const newJob = {
      jobTitle,
      jobDescription: jd,
      qualification,
      skillSet,
      otherRequirements: otherReq,
      jobType,
      salaryRange,
      address,
      uid: auth.currentUser?.uid,
    };
    console.log(newJob);
    let newJobsRef = collection(db, "jobs");
    try {
      await addDoc(newJobsRef, newJob);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <h1 className="text-xl font-bold">Job Requirements</h1>
      <p>Please enter job requirements.</p>

      <div className="card bg-base-100 w-96 shadow-xl gap-2">
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Job Title"
            value={jobTitle}
            onChange={(e) => {
              setJobTitle(e.target.value);
            }}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Job Description"
            value={jd}
            onChange={(e) => {
              setJD(e.target.value);
            }}
          />
        </label>

        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Qualification"
            value={qualification}
            onChange={(e) => {
              setQualification(e.target.value);
            }}
          />
        </label>

        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Skill Set"
            value={skillSet}
            onChange={(e) => {
              setSkillSet(e.target.value);
            }}
          />
        </label>

        <textarea
          className="textarea"
          placeholder="Other Requirements"
          value={otherReq}
          onChange={(e) => {
            setOtherReq(e.target.value);
          }}
        ></textarea>

        <select
          className="select select-bordered w-full"
          value={jobType}
          defaultValue={"Job Type"}
          onChange={(e) => {
            setJobType(e.target.value);
          }}
        >
          <option disabled>Job Type</option>
          <option value={"internship"}>Internship</option>
          <option value={"contract"}>Contract</option>
          <option value={"part time"}>Part Time</option>
          <option value={"full time"}>Full Time</option>
        </select>

        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Salary Range"
            value={salaryRange}
            onChange={(e) => {
              setSalaryRange(e.target.value);
            }}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Address"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </label>
        <button className="btn btn-primary" onClick={createNewJob}>
          Create New Job
        </button>
      </div>
    </div>
  );
}
