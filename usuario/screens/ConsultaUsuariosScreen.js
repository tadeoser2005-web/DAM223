import React from 'react';
import {SafeAreaView,View,Text,FlatList,StyleSheet,Pressable
} from 'react-native';
import {router} from "expo-router";
//router permite usar las rutas
export default function ConsultaUsuariosScreen() {

  const usuarios = [
    { id: '1', nombre: 'Glenda Barrera', edad: 18 },
    { id: '2', nombre: 'Tadeo Servin', edad: 19 },
    { id: '3', nombre: 'Fermin Lopez', edad: 25 },
    { id: '4', nombre: 'Frankie De Jong', edad: 21 },
    { id: '5', nombre: 'Luisa Martínez', edad: 28 },
  ];

  const renderTarjeta = ({ item }) => (
      <Pressable
      onPress={() => router.push({pathname:'/detalle',params:{id:item.id,nombre:item.nombre,edad:item.edad}})} //con el push le digo mandame a esta ruta
      >
    <View style={styles.card}>
      <Text style={styles.nombre}>{item.nombre}</Text>
      <View style={styles.linea}></View>
      <Text style={styles.info}>
        Edad: {item.edad} años
      </Text>
    </View>
      </Pressable>
  );

  return (

    <SafeAreaView style={styles.container}>

      <Text style={styles.titulo}>
        Lista de Usuarios
      </Text>

      <FlatList
        data={usuarios}
        keyExtractor={(item) => item.id}
        renderItem={renderTarjeta}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

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
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 18,
    marginBottom: 15,
    elevation: 4,

    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  nombre: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2563EB',
  },

  linea: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 10,
  },

  info: {
    fontSize: 16,
    color: '#4B5563',
  },

});