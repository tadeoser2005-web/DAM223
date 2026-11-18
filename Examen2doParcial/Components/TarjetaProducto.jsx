import {View,Text,StyleSheet,Pressable,Platform,Alert} from 'react-native';

const mostrarAlerta = (nombre,precio) => {
    if (Platform.OS === 'web') {
        window.alert(`${nombre}\n\n${precio}`);
    } else {
        Alert.alert(`${nombre}\n\n "Precio" ${precio}`);
    }
}


export default function TarjetaProducto({nombre,descripcion,precio}) {

    const handle = () => mostrarAlerta(nombre,precio);


    return (
        <View style={styles.tarjeta}>
            <Text style={styles.tarjetaText}>Nombre del producto: {nombre}</Text>
            <Text style={styles.tarjetaText}>Desccripcion del producto: {descripcion}</Text>
            <Text style={styles.tarjetaText}>El precio del producto es: {precio}</Text>
            <Pressable style={styles.boton} onPress={() => handle()}>Ver Producto</Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    tarjeta: {
        flexDirection:'column',
        gap:8,
        padding:16,
        alignItems:'center',
        justifyContent:'flex-start',
        backgroundColor:'black',
        width:320,
        borderRadius:20,
        marginTop:15,
    },
    tarjetaText: {
        color:'white',
        fontWeight:'bold',
        textAlign:'center',
        justifyContent:'center',
    },
    boton: {
        backgroundColor:'white',
        color:'black',
        borderRadius:5,
        fontWeight:'bold',
        width:100,
        textAlign:'center'
    }
})