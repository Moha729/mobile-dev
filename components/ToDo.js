import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

const ToDo = (props) => {

    const goToEdit = () => {
        props.navigation.navigate('EditToDo', { toDo: props.toDo, navigation: props.navigation}, )
    }
    return (
        <TouchableOpacity onPress={goToEdit}>
            <View style={[styles.toDoWrapper, props.toDo.done  && {backgroundColor: '#3CB371'}]}>
                <Text style={styles.toDoTitle}>{props.toDo.note}</Text>
                <Text style={styles.scheduledDate}>Scheduled to: {props.toDo.date}</Text>
                {props.toDo.done && (<Text style={styles.doneDate}>Done at: {props.toDo.done} </Text>)}
            </View>
        </TouchableOpacity>
    )
}
//I want to make each item clickable which sends us to a new page with the information about the toDo, where it 
//is possible to edit the text, the date, and register as done or unregister, and in a confirm case delete
export {ToDo}

const styles = StyleSheet.create({
    toDoWrapper: {
        marginTop: 15,
        backgroundColor: '#FFA07A',
        width: 300,
        padding: 8
    },
    toDoTitle: {
        marginLeft: 5,
        color: '#4B0082',
        fontSize: 22,
        fontWeight: '800',
        fontStyle: 'normal',
        letterSpacing: 2
    },
    scheduledDate: {
        marginTop: 5,
        color: '#4B0082',
        fontSize: 17,
        fontWeight: '400',
        fontStyle: 'italic',
    },
    doneDate: {
        color: '#4B0082',
        fontSize: 16,
        fontWeight: '400',
        fontStyle: 'italic',
    }
})