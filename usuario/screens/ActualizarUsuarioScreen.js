import React, { useState } from 'react';
import { SafeAreaView,View,Text, TextInput, Pressable, StyleSheet,ActivityIndicator} from 'react-native';
import {router, useLocalSearchParams} from "expo-router";
import {actualizarUsuario as actualizarUsuarioServicio} from "../Services/usuariosServices";

export default function ActualizarUsuarioScreen() {

    const params = useLocalSearchParams(); //se viene desde detalle

    const [nombre,setNombre] = useState(String(params.nombre ?? ''));
    const [edad,setEdad] = useState(String(params.edad ?? ''));
    const [cargando,setCargando] = useState(false);
    const [mensaje,setMensaje] = useState('');


    const actualizarUsuario = async () => {
        try {
            setCargando(true);
            setMensaje('');

            const datosActualizados = {
                nombre: nombre,
                edad: edad
            };
            const usuarioActualizado = await actualizarUsuarioServicio(
                params.id,
                datosActualizados
            );
            router.replace({
                pathname:'/detalle',
                params: {
                    id:usuarioActualizado.id,
                    nombre:usuarioActualizado.nombre,
                    edad:String(usuarioActualizado.edad)
                }
                }
            );
        } catch (error) {
            setMensaje(error.message);
        } finally {
            setCargando(false);
        }
    }



    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.titulo}>
                Actualizar Usuario
            </Text>

            <View style={styles.card}>

                <Text style={styles.label}>
                    Nombre
                </Text>

                <TextInput
                    style={styles.input}
                    value={nombre}
                    onChangeText={setNombre}
                    placeholder="Nombre"
                />

                <Text style={styles.label}>
                    Edad
                </Text>

                <TextInput
                    style={styles.input}
                    value={edad}
                    onChangeText={setEdad}
                    placeholder="Edad"
                    keyboardType="numeric"
                />

                {mensaje !== '' && (
                    <Text style={styles.mensajeError}>
                        {mensaje}
                    </Text>
                )}

                <Pressable
                    style={styles.boton}
                    onPress={actualizarUsuario}
                >
                    {cargando ? (
                        <ActivityIndicator size="small" color='#1f2937'/>
                    ):(
                        <Text style={styles.textoBoton}>
                            Guardar cambios
                        </Text>
                    )}
                </Pressable>

            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#F5F7FA',
        padding: 20,
    },

    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#1F2937',
        marginBottom: 25,
    },

    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        padding: 25,
        elevation: 5,
    },

    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#374151',
        marginBottom: 8,
    },

    input: {
        borderWidth: 1,
        borderColor: '#D1D5DB',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        marginBottom: 20,
    },

    boton: {
        backgroundColor: '#FACC15',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
    },

    textoBoton: {
        color: '#1F2937',
        fontSize: 16,
        fontWeight: 'bold',
    },
    mensajeError: {
        color: 'red',
        fontSize: 14,
        marginBottom: 10,
        textAlign: 'center',
    },
});