import { app } from '@/firebase/firbaseconfig';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { saveUser } from './firebasefirestore';

export const auth = getAuth(app);

export function signupWithEmailPassword(email: string, password: string, rollNum: string, studentName: string) {
    // console.log(email, password, rollNum, studentName, 'inside func')

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const { email, uid } = userCredential.user;
            console.log(email, uid, rollNum, studentName, 'user created successfully.');

            saveUser({ email: email as string, uid, rollNum, studentName });

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorMessage);
            // ..
        });
}


export function loginWithEmailPassword(email: string, password: string) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const { email, uid } = userCredential.user;

            console.log(email, uid, 'user LOGGED IN successfully.', userCredential);

            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorMessage);

        });
}


























