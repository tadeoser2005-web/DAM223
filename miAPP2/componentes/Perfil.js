import {Text,Button,View,StyleSheet} from 'react-native';
import {useState} from "react";


export const Perfil = ({nombre,carrera,materia,cuatrimestre,style})=> {

    const[mostrar,setMostrar] = useState(false);

    return (
        <View style={[estilos.tarjeta,style]}>
        <Text style={estilos.nombres}>{nombre}</Text>
            {/*renderizado condicional es un tipo if, si mostrar es true muestra todo esto, y si es false lo oculta */}
            { mostrar &&
                <>
        <Text style={estilos.carrera}>{carrera}</Text>
        <Text style={estilos.otroTexto}>{materia}</Text>
        <Text style={estilos.otroTexto}>{cuatrimestre}</Text>
                </>
}
<Button title= "Ver perfil" onPress={ ()=> setMostrar(!mostrar) }></Button>
    </View>
    );
};/*hola*/

const estilos = StyleSheet.create({
    nombres: {
        fontSize:24,
        fontWeight:800,
        textTransform:'uppercase',/*todos los nombres los convierte a mayuscula*/
    },
    carrera: {
        fontSize:19,
        fontFamily:'Roboto',
        color:'black',
    },
    otroTexto: {
      fontSize:16,
      fontFamily:'Courier',
      color:'blue',
      fontStyle:'italic',
    },
    tarjeta: {
      borderWidth:2,
      borderRadius:12,
      padding:15,
      margin:10,
        backgroundColor:'#f0f0f0',
        borderColor:'#ccc',
    },
});