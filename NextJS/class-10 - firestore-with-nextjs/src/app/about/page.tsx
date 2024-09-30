"use client";

import { app } from "@/firebase/firbaseconfig";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";


export default function About() {
   const [file, setFile] = useState<File>();
   const [errorMsg, setErrorMsg] = useState("");
   const [progress, setProgress] = useState<null | number>(null);
   const [imageURL, setImageURL] = useState("")

   const storage = getStorage(app);

   const uploadImage = async () => {
      if (!file) {
         setErrorMsg("first select an image.");
         return;
      }
      setErrorMsg("");
      console.log(file);

      const imageRef = ref(storage, `images/${file.name}`);
      try {
         const uploadTask = uploadBytesResumable(imageRef, file);

         uploadTask.on('state_changed',
            (snapshot) => {

               const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
               console.log('Upload is ' + progress + '% done');
               setProgress(progress)

            },
            (error) => {
               console.log(error);
            },
            () => {

               getDownloadURL(uploadTask.snapshot.ref)
                  .then((downloadURL) => {
                     console.log('File available at', downloadURL);
                     setImageURL(downloadURL);
                  })
                  .catch((e) => {
                     console.log(e);
                  })
            }
         );

      } catch (e) {
         console.log(e);
      }


   }
   return (
      <>
         <h1>Upload Image</h1>
         <input type="file"
            onChange={(e) => {
               let files = e.target.files;
               if (files) setFile(files[0]);
            }}
         />

         <button onClick={uploadImage}>Upload Image</button>



         {progress && <p>Upload is {progress} % done</p>}
         {errorMsg && <p>{errorMsg}</p>}

      </>
   )
}