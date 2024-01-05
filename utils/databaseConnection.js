import { addDoc, doc, collection, updateDoc, deleteDoc } from "firebase/firestore";
import { database } from "../firebase";
import { Alert } from "react-native";

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

const deleteFromFirebase = async (id) => {

    const performDeletion = async () => {

        await deleteDoc(doc(database, 'notes', id))
    }

    Alert.alert(
        'Delete confirmation',
        'Are you sure you want to delete this to-do',
        [
            {
                text: 'Cancel', 
                style: 'cancel'
            },
            {
                text: 'yes',
                onPress: () => performDeletion()
            }
        ]
    )
}

export {addToFirebase, updateToFirebase, deleteFromFirebase}