import { View, Text, Alert, TextInput, Button, StyleSheet, Platform, Switch } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const mostrarAlerta = (titulo, mensaje) => {
    if (Platform.OS === 'web') {
        window.alert(`${titulo}\n\n${mensaje}`);
    } else {
        Alert.alert(titulo, mensaje);
    }
};

const opcionesIniciales = {
    taller: 'no',
    constancia: 'no',
    deportes: 'no',
};

export default function EncuestaScreen() {
    const [nombre, setNombre] = useState('');
    const [carrera, setCarrera] = useState('');
    const [cuatrimestre, setCuatrimestre] = useState('');
    const [opciones, setOpciones] = useState(opcionesIniciales); //para no poner un hook por cada opcion mejor las meto dentro de un objeto

    const toggleSwitch = (campo, valor) => {
        setOpciones({
            ...opciones, //copia las propiedades del objeto
            [campo]: valor ? 'si' : 'no', //actualiza la propiedad correspondiente
        });
    };

    const registrar = () => {
        const faltantes = [];
        if (nombre.trim() === '') faltantes.push('Nombre');
        if (carrera.trim() === '') faltantes.push('Carrera');
        if (cuatrimestre.trim() === '') faltantes.push('Cuatrimestre');

        if (faltantes.length > 0) {
            mostrarAlerta('Faltan datos', 'Completa: ' + faltantes.join(', '));
            return;
        }

        const numCuatri = Number(cuatrimestre);
        if (!Number.isInteger(numCuatri)) {
            mostrarAlerta('Cuatrimestre inválido', 'El cuatrimestre debe ser un número entero');
            return;
        }

        if (numCuatri < 1 || numCuatri > 10) {
            mostrarAlerta('Cuatrimestre inválido', 'El cuatrimestre debe estar entre 1 y 10');
            return;
        }

        mostrarAlerta(
            'Datos registrados',
            `Nombre: ${nombre}\nCarrera: ${carrera}\nCuatrimestre: ${cuatrimestre}\nTaller: ${opciones.taller}\nConstancia: ${opciones.constancia}\nDeportes: ${opciones.deportes}`
        );

        setNombre('');
        setCarrera('');
        setCuatrimestre('');
        setOpciones(opcionesIniciales);
    };

    return (
        <SafeAreaView style={styles.contenedor}>
            <Text style={styles.titulo}>Registro de datos</Text>

            <TextInput
                style={styles.input}
                placeholder="Nombre"
                value={nombre}
                onChangeText={setNombre}
            />

            <TextInput
                style={styles.input}
                placeholder="Carrera"
                value={carrera}
                onChangeText={setCarrera}
            />

            <TextInput
                style={styles.input}
                placeholder="Cuatrimestre"
                value={cuatrimestre}
                onChangeText={setCuatrimestre}
                keyboardType="numeric"
                maxLength={2}
            />

            <Text style={styles.titulo}>Opciones</Text>



            {/* metemos el text y el switch en un view para poder meterle un estilo y q aparezcan uno al lado del otro */}
            <View style={styles.fila}>
                <Text style={styles.texto}>¿Asistirá al taller?</Text>
                <Switch
                    value={opciones.taller === 'si'}
                    onValueChange={(valor) => toggleSwitch('taller', valor)}
                />
            </View>

            <View style={styles.fila}>
                <Text style={styles.texto}>¿Requiere constancia?</Text>
                <Switch
                    value={opciones.constancia === 'si'}
                    onValueChange={(valor) => toggleSwitch('constancia', valor)}
                />
            </View>

            <View style={styles.fila}>
                <Text style={styles.texto}>¿Participará en deportes?</Text>
                <Switch
                    value={opciones.deportes === 'si'}
                    onValueChange={(valor) => toggleSwitch('deportes', valor)}
                />
            </View>

            <Button title="Registrar" onPress={registrar} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        justifyContent: 'flex-start',
        padding: 20,
        maxWidth: 400,
        width: '100%',
        alignSelf: 'center',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#999',
        borderRadius: 8,
        padding: 10,
        marginBottom: 12,
    },
    fila: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    texto: {
        fontSize: 16,
    },
});