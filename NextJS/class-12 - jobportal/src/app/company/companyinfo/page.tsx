"use client";

import { auth, db, storage } from "@/firebase/firebaseconfig";
import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CompanyInfo() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [logo, setLogo] = useState<File>();

  const route = useRouter();

  const uploadLogo = () => {
    if (!name || !description || !address || !phone || !logo) return;

    const storageRef = ref(storage, `images/${makeImageName()}`);
    const uploadTask = uploadBytesResumable(storageRef, logo!);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          saveCompanyInfo(downloadURL);
        });
      }
    );
  };

  const saveCompanyInfo = async (logoURL: string) => {
    const company = {
      name,
      description,
      address,
      phone,
      logo: logoURL,
    };
    let docId = auth.currentUser?.uid;
    let userRef = doc(db, "users", docId!);

    try {
      await setDoc(userRef, company, { merge: true });
      route.push("/company");
    } catch (e) {
      console.log(e);
    }
  };

  const makeImageName = () => {
    let imageName = logo?.name.split(".");
    let lastIndex = imageName!?.length - 1;
    let imageType = imageName![lastIndex];
    let newName = `${auth.currentUser?.uid}.${imageType}`;
    return newName;
  };

  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <h1>Company Information</h1>
      <p>Please enter company details.</p>
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
          <input
            type="file"
            className="file-input w-full "
            onChange={(e) => {
              let files = e.target.files;
              if (files?.length) {
                setLogo(files[0]);
              }
            }}
          />
        </label>
        <button className="btn btn-primary" onClick={uploadLogo}>
          Save Company Details
        </button>
      </div>
    </div>
  );
}
