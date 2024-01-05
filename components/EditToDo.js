import { View, Text, StyleSheet } from "react-native"
import { WelcomeBar } from "./WelcomeBar"
import { InputField } from "../uicomponents/InputField"
import { useState } from "react"
import { updateDoc, doc } from "firebase/firestore"
import { database } from "../firebase"
import { Button } from "../uicomponents/Button"
import DateTimePicker from '@react-native-community/datetimepicker'


const EditToDo = (props) => {

    const { toDo } = props.route.params

    const [newText, setNewText] = useState(null)

    const persistData = async () => {
        let usedDate = formattedDate || toDo.date
        let usedText = newText || toDo.note
        await updateDoc(doc(database, 'notes', toDo.id), {note: usedText, date: usedDate})
    }

    const [showPicker, setShowPicker] = useState(false)

    const togglePicker = () => {
        setShowPicker(!showPicker)
    }

    const [newDate, setNewDate] = useState(new Date())
    const [formattedDate, setFormattedDate] = useState(null)


    const onDateChange = (event, selectedDate) => {

        setNewDate(selectedDate)
        let dateString = selectedDate.getDate()+'-' + selectedDate.toLocaleString('default', { month: 'short' })+'-' + selectedDate.getFullYear()
        setFormattedDate(dateString)
        setShowPicker(false)

    }

    return (
        <View style={styles.background}>
            <WelcomeBar />

            <Text>'Insert new title'</Text>
            <InputField placeholder={toDo.note} setText={setNewText}/>

            <Text>Scheduled to: {toDo.date}</Text>
            <Button text={'Change date'} function={togglePicker}/>

            {showPicker && (
                <DateTimePicker 
                    value={newDate}
                    mode="date"
                    display="default"
                    onChange={onDateChange}
                />
            )}

            <Button text={'finish'} function={persistData} />

        </View>
    )
}

export {EditToDo}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#FFE4B5',
        minHeight: '150%'
    },
    viewItems: {
        alignItems: 'center'
    },
})