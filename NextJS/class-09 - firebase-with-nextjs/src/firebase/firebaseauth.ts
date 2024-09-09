import { app } from '@/firebase/firbaseconfig';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

export function signupWithEmailPassword(email: string, password: string) {
    console.log(email, password, 'inside func')
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const { email, uid } = userCredential.user;
            console.log(email, uid, 'user created successfully.', userCredential);
            // ...
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