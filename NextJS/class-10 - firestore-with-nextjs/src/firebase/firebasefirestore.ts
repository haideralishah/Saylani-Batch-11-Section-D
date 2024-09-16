import { addDoc, collection, doc, getFirestore, setDoc } from "firebase/firestore"
import { app } from "./firbaseconfig"
import { auth } from "./firebaseauth";

const db = getFirestore(app);

type UserType = {
    email: string,
    rollNum: string,
    studentName: string,
    uid: string
}

export async function saveUser(user: UserType) {
    // let docRef = doc(db, "collectionName", "docId")
    // await setDoc("where", "what");

    try {
        let docRef = doc(db, 'users', user.uid);
        await setDoc(docRef, user);
    } catch (error) {
        console.log(error);
    }
}


export async function saveTodo(todo: string) {
    // collection(db, "collectionName")
    // addDoc("where", "what");


    let uid = auth.currentUser?.uid;
    let newTodo = { todo, uid };

    try {
        let collectionRef = collection(db, "todos")
        await addDoc(collectionRef, newTodo);
    } catch (error) {
        console.log(error)
    }

}