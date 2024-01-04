import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from "react"


import { WelcomeBar } from './components/WelcomeBar';
import { ToDos } from './components/ToDos';
import { NewToDo } from './components/NewToDo';

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { EditToDo } from './components/EditToDo';

export default function App() {

  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name='Main' component={MainScreen} />
        <Stack.Screen name='EditToDo' component={EditToDo} />
      </Stack.Navigator>
    </NavigationContainer>
  )

}

const MainScreen = ({ navigation }) => {
  
  const [showToDos, setShowToDos] = useState(false)
  const [showNewToDo, setShowNewToDo] = useState(false)
  
  const [toDosSection, setToDosSection] = useState(true)
  
  return (
    <View style={styles.background}>
      <WelcomeBar />
      {toDosSection && !showNewToDo &&
        <ToDos showToDos={showToDos} setShowToDos={setShowToDos} navigation={navigation} />}
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
    height: 500
  },
  background: {
    backgroundColor: '#FFE4B5',
    minHeight: '150%'
  }
});
