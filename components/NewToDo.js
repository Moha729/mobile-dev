import { View, Text, StyleSheet, TextInput } from "react-native"
import { Button } from "../uicomponents/Button"

import { useState } from "react"
import { ToDo } from "./ToDo"

import { InputField } from "../uicomponents/InputField"
import { addToFirebase } from "../utils/databaseConnection"
import { DatePicker } from "../utils/DatePicker"


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

    const [formattedDate, setFormattedDate] = useState(null)
    const [toDoText, setToDoText] = useState('')


    return (
        <View style={styles.viewItems}>

            <InputField setText={setToDoText} />

            <DatePicker buttonText={'next'} setFormattedDate={setFormattedDate} />


            {formattedDate && (
                <>
                    <ToDo toDo={{note: toDoText, date: formattedDate}}/>

                    <Button text={'finish'} function={() => {
                        addToFirebase(toDoText, formattedDate)
                        props.setShowNewToDo(false)
                        }} />
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