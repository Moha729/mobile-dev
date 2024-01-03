import { StyleSheet, TouchableOpacity, Text } from "react-native"


const Button = (props) => {
    return (
        <TouchableOpacity 
            style={styles.button}
            onPress={props.function}
            >
            <Text style={styles.buttonText}>
                {props.text}</Text>
        </TouchableOpacity>
    )
}

export {Button}

const styles = StyleSheet.create({
    button: {
        marginTop: 20,
        width: '50%',
        backgroundColor: '#00BFFF',
        padding: 10,
        borderRadius: 5
    },
    buttonText: {
        color: '#4B0082',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '800',
        fontStyle: 'italic',
    },
})