"use client";

import { app } from "@/firebase/firbaseconfig";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
import Image from 'next/image'
import { auth } from "@/firebase/firebaseauth";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase/firebasefirestore";
import style from "./about.module.css";

export default function About() {
   const [file, setFile] = useState<File>();
   const [errorMsg, setErrorMsg] = useState("");
   const [progress, setProgress] = useState<null | number>(null);
   const [imageURL, setImageURL] = useState("")
   const [caption, setCaption] = useState("");

   const storage = getStorage(app);

   const uploadImage = async () => {
      if (!file) {
         setErrorMsg("first select an image.");
         return;
      }
      setErrorMsg("");
      console.log(file);
      let newName = makeName(file.name);
      const imageRef = ref(storage, `images/${newName}`);


      try {
         const uploadTask = uploadBytesResumable(imageRef, file);

         uploadTask.on('state_changed', (snapshot) => {

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
                     saveDataToFirestore(downloadURL);
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

   const makeName = (fileName: string): string => {
      let fileNameArr = fileName.split(".")
      let lastIndex = fileNameArr.length - 1;
      let fileExtension = fileNameArr[lastIndex];
      let newName = `${crypto.randomUUID()}.${fileExtension}`;
      return newName;
   }

   const saveDataToFirestore = async (imageURL: string) => {
      const imageObj = {
         imageURL,
         caption,
         userUID: auth.currentUser?.uid
      }
      const imageDocRef = collection(db, "storyImages");
      await addDoc(imageDocRef, imageObj);
   }

   return (
      <>
         <h1 className={style.special}>Upload Image</h1>
         <input type="file"
            onChange={(e) => {
               let files = e.target.files;
               if (files) setFile(files[0]);
            }}
         />
         <textarea name="caption" value={caption}
            onChange={(e) => {
               setCaption(e.target.value)
            }}
         ></textarea>
         <br />
         <button onClick={uploadImage}>Upload Image</button>

         {
            imageURL &&
            <Image
               src={imageURL}
               width={400}
               height={300}
               alt="Akhtar Picture"
            />

         }

         {progress && <p>Upload is {progress} % done</p>}
         {errorMsg && <p>{errorMsg}</p>}

      </>
   )
}