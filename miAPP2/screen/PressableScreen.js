import { StyleSheet, View, Text, Switch, Pressable } from 'react-native';
import { useState } from 'react';

export default function PressableScreen() {
    const [encendido, setEncendido] = useState(false);
    const [contador, setContador] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Practica Switch y Pressable
            </Text>
            <Switch
                value={encendido}
                onValueChange={(valor ) => setEncendido(valor)}
            />
            <Text style={styles.texto}>El switch esta: {encendido ? 'Encendido' : 'Apagado'}</Text>
            <Pressable
                style={styles.boton}
                onPress={() => setContador(contador + 1)}
            >
                <Text style={styles.textoBoton}>Prsioname</Text>
            </Pressable>
            <Text style={styles.texto}>Veces presionado: {contador}</Text>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 40,
    },
    texto: {
        fontSize: 18,
        marginVertical: 15,
    },
    boton: {
        backgroundColor: 'blue',
        padding: 15,
        borderRadius: 10,
        marginTop: 30,
    },
    textoBoton: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});