import { StyleSheet, Text, View } from "react-native"

const ToDo = (props) => {
    return (
        <View style={styles.toDoWrapper}>
            <Text style={styles.toDoTitle}>{props.toDo.note}</Text>
            <Text style={styles.scheduledDate}>Scheduled to: {props.toDo.date}</Text>
            {props.toDo.doneAt && (<Text>Done at: {props.toDo.doneAt} </Text>)}
        </View>
    )
}

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
    }
})