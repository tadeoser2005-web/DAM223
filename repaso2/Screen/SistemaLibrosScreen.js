import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    FlatList,
    Alert,
    ActivityIndicator,
    ImageBackground,
    Pressable,
    StyleSheet,
    StatusBar,
} from 'react-native';

export default function SistemaLibrosScreen() {
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [genero, setGenero] = useState('');
    const [libros, setLibros] = useState([]);
    const [guardando, setGuardando] = useState(false);

    const agregarLibro = () => {

        if (!titulo.trim() || !autor.trim() || !genero.trim()) {
            Alert.alert('Alert', 'Todos los campos son obligatorios.');
            return;
        }

        setGuardando(true);
        setTimeout(() => {
            const nuevo = {
                id: Date.now().toString(),
                titulo: titulo.trim(),
                autor: autor.trim(),
                genero: genero.trim(),
            };
            setLibros((prev) => [nuevo, ...prev]);

            setTitulo('');
            setAutor('');
            setGenero('');
            setGuardando(false);

            Alert.alert('Alert', 'Libro guardado correctamente.');
        }, 4000);
    };

    return (
        <ImageBackground
            source={require('../assets/barcelona.png')}
            style={styles.fondo}
            resizeMode="contain"
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.contenedor}>
                <Text style={styles.titulo}>Catálogo de Libros</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Título del libro"
                    value={titulo}
                    onChangeText={setTitulo}
                    editable={!guardando}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Autor"
                    value={autor}
                    onChangeText={setAutor}
                    editable={!guardando}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Género"
                    value={genero}
                    onChangeText={setGenero}
                    editable={!guardando}
                />

                <Pressable
                    style={[styles.boton, guardando && styles.botonDeshabilitado]}
                    onPress={agregarLibro}
                    disabled={guardando}
                >
                    <Text style={styles.botonTexto}>
                        {guardando ? 'Guardando...' : 'Agregar Libro'}
                    </Text>
                </Pressable>

                {guardando && (
                    <View style={styles.cargando}>
                        <ActivityIndicator size="large" color="#fff" />
                        <Text style={styles.cargandoTexto}>Guardando libro...</Text>
                    </View>
                )}

                <Text style={styles.total}>Total de libros: {libros.length}</Text>

                <FlatList
                    data={libros}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.tarjeta}>
                            <Text style={styles.tarjetaTitulo}>{item.titulo}</Text>
                            <Text style={styles.tarjetaTexto}>Autor: {item.autor}</Text>
                            <Text style={styles.tarjetaTexto}>Género: {item.genero}</Text>
                        </View>
                    )}
                />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: '#0B1F4B'
    },
    contenedor: {
        flex: 1,
        paddingTop: 60,
        paddingHorizontal: 16
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 16,
    },
    input: {
        backgroundColor: 'rgba(255,255,255,0.85)',
        borderRadius: 8,
        padding: 12,
        marginBottom: 10,
    },
    boton: {
        backgroundColor: '#1565C0',
        borderRadius: 8,
        padding: 14,
        alignItems: 'center',
    },
    botonDeshabilitado: {
        backgroundColor: '#888'
    },
    botonTexto: {
        color: '#fff',
        fontWeight: 'bold'
    },
    cargando: {
        alignItems: 'center',
        marginTop: 12
    },
    cargandoTexto: {
        color: '#fff',
        fontWeight: 'bold',
        marginTop: 4
    },
    total: {
        color: '#fff',
        fontWeight: 'bold',
        marginVertical: 12
    },
    tarjeta: {
        backgroundColor: 'rgba(255,255,255,0.9)',
        borderRadius: 10,
        padding: 12,
        marginBottom: 10,
    },
    tarjetaTitulo: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 2
    },
    tarjetaTexto: {
        fontSize: 12
    },
});