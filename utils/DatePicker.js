import { View } from "react-native"
import { useState } from "react"
import DateTmePicker from '@react-native-community/datetimepicker'
import { Button } from "../uicomponents/Button"

const DatePicker = (props) => {
    
    const [showPicker, setShowPicker] = useState(false)

    const togglePicker = () => {
        setShowPicker(!showPicker)
    }

    const [newDate, setNewDate] = useState(new Date())

    const onDateChange = (event, selectedDate) => {

        setNewDate(selectedDate)
        let dateString = selectedDate.getDate()+'-' + selectedDate.toLocaleString('default', { month: 'short' })+'-' + selectedDate.getFullYear()
        props.setFormattedDate(dateString)
        setShowPicker(false)

    }
    
    return (
        <View>
            <Button text={props.buttonText} function={togglePicker} />
            {showPicker && (
                <DateTmePicker
                    value={newDate}
                    mode="date"
                    display="default"
                    onChange={onDateChange}
                />
            )}
        </View>
    )
}

export {DatePicker}