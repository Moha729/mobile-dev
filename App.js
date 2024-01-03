import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from "react"


import { WelcomeBar } from './components/WelcomeBar';
import { ToDos } from './components/ToDos';
import { NewToDo } from './components/NewToDo';

export default function App() {

  const [showToDos, setShowToDos] = useState(false)
  const [showNewToDo, setShowNewToDo] = useState(false)

  const [toDosSection, setToDosSection] = useState(true)

  

  return (
    <View style={styles.background}>
      <WelcomeBar />
      {toDosSection && !showNewToDo &&
        <ToDos showToDos={showToDos} setShowToDos={setShowToDos} />}
      <NewToDo showNewToDo={showNewToDo} setShowNewToDo={setShowNewToDo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    backgroundColor: '#FFE4B5',
  }
});
