import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { WelcomeBar } from './components/WelcomeBar';
import { ToDos } from './components/ToDos';

export default function App() {
  return (
    <View>
      <WelcomeBar />
      <ToDos />
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
});
