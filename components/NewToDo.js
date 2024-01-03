import { View, Text, StyleSheet, TextInput } from "react-native"
import { Button } from "../uicomponents/Button"

import DateTimePicker from '@react-native-community/datetimepicker'
import { useState } from "react"
import { ToDo } from "./ToDo"

import { addDoc, collection } from "firebase/firestore"
import { database } from "../firebase"


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
    const [toDoReady, setToDoReady] = useState(false)
    const [newToDo, setNewToDo] = useState(null)

    const [toDoDate, setToDoDate] = useState(new Date())
    const [toDoText, setToDoText] = useState('')

    const togglePicker = () => {
        setShowPicker(!showPicker)
    }

    const onDateChange = (event, selectedDate) => {
        
        let dateString = selectedDate.getDate()+'-' + selectedDate.toLocaleString('default', { month: 'short' })+'-' + selectedDate.getFullYear()
        console.log(dateString);
        setToDoDate(selectedDate)

        setToDoReady(true)
        setNewToDo(
            {
                note: toDoText,
                date: dateString
            }

        ) 
    }

    const persistData = async () => {
        await addDoc(collection(database, 'notes'), {
            note: newToDo.note,
            date: newToDo.date
        }, props.setShowNewToDo(false))
    }

    return (
        <View style={styles.viewItems}>
            <TextInput style={styles.inputField} onChangeText={(txt) => setToDoText(txt)} />

            <Button text={'next'} function={togglePicker} />

            {showPicker && (<DateTimePicker
                value={toDoDate}
                mode="date"
                display="default"
                onChange={onDateChange}
            />)}

            {toDoReady && (
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
    inputField: {
        borderColor: '#4B0082',
        borderWidth: 2,
        borderRadius: 10,
        width: 250,
        marginTop: 20,
        height: 45,
        padding: 10,
        backgroundColor: '#E6E6FA',
        fontSize: 20,
        color: '#2F4F4F',
        fontStyle: 'italic',
        fontWeight: '500'

    }
})