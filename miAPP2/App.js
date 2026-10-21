import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Saludo} from './componentes/Saludo';
import {Saludo2}  from './componentes/Saludo2';
import {Perfil} from './componentes/Perfil';


export default function App() {
  return (
    <View style={styles.container}>


        <Perfil
            nombre="Donald Trump "
            carrera="TIID "
            materia="Aplicaciones Móviles "
            cuatrimestre="5 "
            style={styles.tarjeta3}>
        </Perfil>

        <Perfil
            nombre="Bill Clinton "
            carrera="TIID "
            materia="Aplicaciones Móviles "
            cuatrimestre="6 "
            style={styles.tarjeta2}>
        </Perfil>

        <Perfil
            nombre="Jeffrey E "
            carrera="TIID "
            materia="Aplicaciones Móviles "
            cuatrimestre="5 "
            style={styles.tarjeta1}
        >
        </Perfil>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
      flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
    tarjeta1: {
      backgroundColor:'red',
    },
    tarjeta2: {
        backgroundColor:'oranje',
    },
    tarjeta3: {
        backgroundColor:'green',
    },
});
