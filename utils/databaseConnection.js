import { addDoc, doc, collection, updateDoc, deleteDoc } from "firebase/firestore";
import { database } from "../firebase";

const addToFirebase = async (toDoText, toDoDate) => {
    await addDoc(collection(database, 'notes'), {
        note: toDoText,
        date: toDoDate
    })
}

const updateToFirebase = async (toDoId, toDoText, toDoDate) => {
    await updateDoc(doc(database, 'notes', toDoId), {
        note: toDoText,
        date: toDoDate
        //done: doneDate
    })
}
export {addToFirebase, updateToFirebase}