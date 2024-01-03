import { useState } from "react"
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from "react-native"
import { useCollection } from 'react-firebase-hooks/firestore'
import { collection, doc } from 'firebase/firestore'
import { database } from "../firebase"
import { ToDo } from './ToDo' 

const ToDos = () => {

    const [showToDos, setShowToDos] = useState(false)
    const toggleView = () => {
        setShowToDos(!showToDos)
        console.log(showToDos);
    }

    const [values, loading, error] = useCollection(collection(database, 'notes'))
    const data = values?.docs.map((doc) => ({...doc.data(), id: doc.id}))

    return (
        <View style={styles.viewItems}>
            <TouchableOpacity 
            style={styles.button}
            onPress={toggleView}
            >
                <Text style={styles.buttonText}>To Dos</Text>
            </TouchableOpacity>

            {showToDos && (
                <View>
                    <FlatList 
                        data={data}
                        renderItem={(todo) => {
                            return (
                                <ToDo toDo={todo} />
                            )
                        }}
                    />
                </View>
            )}
        </View>
    )
}

export {ToDos}

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
    viewItems: {
        alignItems: 'center'
    }
})