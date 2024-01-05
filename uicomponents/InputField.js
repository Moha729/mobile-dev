import { StyleSheet, View, TextInput } from "react-native"


const InputField = (props) => {

    return (
        <View>
            <TextInput placeholder={props.placeholder} style={styles.inputField} onChangeText={(txt) => props.setText(txt)} />
        </View>
    )
}

export {InputField}

const styles = StyleSheet.create({
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