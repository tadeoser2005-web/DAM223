import { StyleSheet, Text, View } from 'react-native';
import EncuestaScreen from './screen/EncuestaScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaProvider><EncuestaScreen /></SafeAreaProvider>

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
