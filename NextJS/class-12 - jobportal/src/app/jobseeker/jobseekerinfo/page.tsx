"use client";

import { auth, db, storage } from "@/firebase/firebaseconfig";
import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function JobSeekerInfo() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [pic, setPic] = useState<File>();
  const [resume, setResume] = useState<File>();

  const [picURL, setPicURL] = useState("");
  const [resumeURL, setResumeURL] = useState("");

  const route = useRouter();

  const uploadFiles = () => {
    if (!name || !description || !address || !phone || !pic || !resume) return;
    uploadPic();
    uploadResume();
  };

  const saveJobSeekerInfo = async () => {
    const jobSeeker = {
      name,
      description,
      address,
      phone,
      pic: picURL,
      resume: resumeURL,
    };
    let docId = auth.currentUser?.uid;
    let userRef = doc(db, "users", docId!);

    try {
      await setDoc(userRef, jobSeeker, { merge: true });
      route.push("/jobseeker");
    } catch (e) {
      console.log(e);
    }
  };

  const uploadPic = () => {
    const storageRef = ref(storage, `jobseekerimages/${makeImageName()}`);
    const uploadTask = uploadBytesResumable(storageRef, pic!);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setPicURL(downloadURL);
        });
      }
    );
  };
  const uploadResume = () => {
    const storageRef = ref(storage, `resume/${makeImageName()}`);
    const uploadTask = uploadBytesResumable(storageRef, resume!);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setResumeURL(downloadURL);
        });
      }
    );
  };

  const makeImageName = () => {
    let imageName = pic?.name.split(".");
    let lastIndex = imageName!?.length - 1;
    let imageType = imageName![lastIndex];
    let newName = `${auth.currentUser?.uid}.${imageType}`;
    return newName;
  };

  useEffect(() => {
    console.log(picURL, "=======", resumeURL);
    if (picURL && resumeURL) {
      saveJobSeekerInfo();
    }
  }, [picURL, resumeURL]);

  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <h1>Job Seeker Information</h1>
      <p>Please complete your profile.</p>
      <div className="card bg-base-100 w-96 shadow-xl">
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
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

        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Phone"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Upload Picture:
          <input
            type="file"
            className="file-input w-full "
            onChange={(e) => {
              let files = e.target.files;
              if (files?.length) {
                setPic(files[0]);
              }
            }}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Upload Resume:
          <input
            type="file"
            className="file-input w-full "
            onChange={(e) => {
              let files = e.target.files;
              if (files?.length) {
                setResume(files[0]);
              }
            }}
          />
        </label>
        <button className="btn btn-primary" onClick={uploadFiles}>
          Save Job Seeker Details
        </button>
      </div>
    </div>
  );
}
