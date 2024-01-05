import { View, Text, StyleSheet } from "react-native"
import { WelcomeBar } from "./WelcomeBar"
import { InputField } from "../uicomponents/InputField"
import { useState } from "react"
import { Button } from "../uicomponents/Button"
import { deleteFromFirebase, updateToFirebase } from "../utils/databaseConnection"
import { DatePicker } from "../utils/DatePicker"
import { ToDo } from "./ToDo"



const EditToDo = (props) => {

    const { toDo } = props.route.params

    const [newText, setNewText] = useState(null)

    const [formattedDate, setFormattedDate] = useState(null)

    const [doneDate, setDoneDate] = useState(null)

    const goBackToHome = () => {
        props.navigation.navigate('Main')
    }

    const updateDoc = () => {
        const id = toDo.id
        let note = newText || toDo.note
        let date = formattedDate || toDo.date
        let done = doneDate || toDo.doneDate 

        updateToFirebase(id, note, date, done)

        goBackToHome()
    }

/*     const setAsDone = () => {
        setAsDone()
    } */

    return (
        <View style={styles.background}>
            <WelcomeBar />

            <InputField placeholder={toDo.note} setText={setNewText}/>
            
            <DatePicker buttonText={'Change date'} setFormattedDate={setFormattedDate} />

            <ToDo toDo={{note: newText || toDo.note, date: formattedDate || toDo.date, done: doneDate || toDo.done}}/>

            <Button text={'finish'} function={updateDoc} />

            <DatePicker buttonText={'Set as done'} setFormattedDate={setDoneDate} />
            
            <Button text={'Delete To-do'} function={() => {
                deleteFromFirebase(toDo.id)
                goBackToHome()
                }} />

            

        </View>
    )
}

export {EditToDo}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#FFE4B5',
        minHeight: '150%',
        alignItems: 'center'
    }
})