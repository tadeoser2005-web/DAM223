import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Saludo} from './componentes/Saludo';
import {Saludo2}  from './componentes/Saludo2';
import {Nombre,Carrera,Materia,Cuatrimestre} from './componentes/Perfil';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola mundo ReactNative !</Text>
      <Image source={require('./assets/wave.png')}></Image>
      <Saludo></Saludo>
      <Saludo2></Saludo2>
      <Nombre></Nombre>
      <Carrera></Carrera>
      <Materia></Materia>
      <Cuatrimestre></Cuatrimestre>
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
});
