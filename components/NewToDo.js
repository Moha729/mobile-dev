import { View, Text, StyleSheet, TextInput } from "react-native"
import { Button } from "../uicomponents/Button"

import DateTimePicker from '@react-native-community/datetimepicker'
import { useState } from "react"
import { ToDo } from "./ToDo"

import { addDoc, collection } from "firebase/firestore"
import { database } from "../firebase"
import { InputField } from "../uicomponents/InputField"


const NewToDo = (props) => {

    const toggleView = () => {
        props.setShowNewToDo(!props.showNewToDo)
        props.showNewToDo && setButtonText('New to-do')
        !props.showNewToDo && setButtonText('Cancel')
    }

    const [buttonText, setButtonText] = useState('New to-do')

    return (
        <View style={styles.viewItems}>
            <Button text={buttonText} function={toggleView} />

            {props.showNewToDo &&
                <NewTodoForm setShowNewToDo={props.setShowNewToDo}/>}
            
        </View>
    )

}

const NewTodoForm = (props) => {

    const [showPicker, setShowPicker] = useState(false)
    const [readyToConfirm, setReadyToConfirm] = useState(false)
    const [newToDo, setNewToDo] = useState(null)

    const [toDoDate, setToDoDate] = useState(new Date())
    const [formattedDate, setFormattedDate] = useState('')
    const [toDoText, setToDoText] = useState('')

    const togglePicker = () => {
        setShowPicker(!showPicker)
    }

    const onDateChange = (event, selectedDate) => {
        
        setToDoDate(selectedDate)
        
        let dateString = selectedDate.getDate()+'-' + selectedDate.toLocaleString('default', { month: 'short' })+'-' + selectedDate.getFullYear()
        setFormattedDate(dateString)
        

        setNewToDo(
            {
                note: toDoText,
                date: formattedDate
            }
            
            ) 
            setShowPicker(false)
            setReadyToConfirm(true)
    }

    const persistData = async () => {
        await addDoc(collection(database, 'notes'), {
            note: newToDo.note,
            date: newToDo.date
        }, props.setShowNewToDo(false))
    }

    return (
        <View style={styles.viewItems}>

            <InputField setText={setToDoText} />

            <Button text={'next'} function={togglePicker} />

            {showPicker && (<DateTimePicker
                value={toDoDate}
                mode="date"
                display="default"
                onChange={onDateChange}
            />)}

            {readyToConfirm && (
                <>
                    <ToDo toDo={newToDo}/>

                    <Button text={'finish'} function={persistData} />
                </>
            )}



        </View>
    )
}

export {NewToDo}

const styles = StyleSheet.create({
    viewItems: {
        alignItems: 'center'
    },
})