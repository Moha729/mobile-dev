import { StyleSheet, Text, View, TouchableOpacity, FlatList } from "react-native"
import { useCollection } from 'react-firebase-hooks/firestore'
import { collection, doc } from 'firebase/firestore'
import { database } from "../firebase"
import { ToDo } from './ToDo' 
import { Button } from "../uicomponents/Button"

const ToDos = (props) => {

    const toggleView = () => {
        props.setShowToDos(!props.showToDos)
    }

    const [values, loading, error] = useCollection(collection(database, 'notes'))
    const data = values?.docs.map((doc) => ({...doc.data(), id: doc.id}))

    return (
        <View style={styles.viewItems}>
            
            <Button text={'To Dos'} function={toggleView} />

            {props.showToDos && (
                <View>
                    <FlatList 
                        data={data}
                        renderItem={(todo) => {
                            return (
                                <ToDo toDo={todo.item} />
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
    viewItems: {
        alignItems: 'center'
    }
})