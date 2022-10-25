import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Hola, Coder!</Text>
      <Text style={styles.text2}>Usando Expo conectando un celular fisico JM-500......</Text>
      <StatusBar style="auto" />
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
  text1: {
    fontSize: 92,
    color: '#9E7676',
    textAlign: 'center'
  },
  text2: {
    fontSize: 22,
    color: '#CF0A0A',
    marginTop:45,
    textAlign: 'center'
  }
});
