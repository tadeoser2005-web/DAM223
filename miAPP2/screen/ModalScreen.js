import {StyleSheet, View, Text, TextInput, Pressable, Image, Button, ImageBackground} from 'react-native';
import React, {useEffect, useState} from "react";


export default function ModalScreen() {
    const [Titulo,setTitulo] = useState("");
    const [autor,setAutor] = useState("");
    const [genero,setGenero] = useState("");

    const [showSplash, setShowSplash] = useState(true);

    const bgMain = { uri: 'https://i.blogs.es/fb2535/hello-orange-2/1366_2000.webp' };
    const logoApp = { uri: 'https://reactnative.dev/img/tiny_logo.png' };

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    if (showSplash) {
        return (
            <View style={styles.splashBlackBackground}>
                <View style={styles.transparentCard}>
                    <Image
                        source={logoApp}
                        style={styles.logo}
                    />
                    <Text style={styles.splashTitle}>Registro de libros</Text>
                    <Text style={styles.splashSubtitle}>!Bienvenido!</Text>
                </View>
            </View>
        );
    }

  return(
      <ImageBackground
          source={bgMain}
          style={styles.mainContainer}
          resizeMode="cover"
      >
          <View style={styles.mainCard}>
              <Text style={styles.welcomeText}>¡Bienvenido a tu App!</Text>
          </View>
      </ImageBackground>
    )
};


const styles = StyleSheet.create({
    // SplashScreen: Contenedor negro de fondo completo
    splashBlackBackground: {
        width: '100%',
        flex: 1,
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },

    // Cuadro transparente
    transparentCard: {
        backgroundColor: 'rgba(255, 255, 255, 0.12)',
        borderWidth: 1,
        paddingVertical: 35,
        paddingHorizontal: 20,
        borderRadius: 20,
        alignItems: 'center',
        width: '90%',
    },

    logo: {
        width: 80,
        height: 80,
        marginBottom: 15,
        resizeMode: 'contain',
    },
    splashTitle: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 6,
    },
    splashSubtitle: {
        color: '#CCCCCC',
        fontSize: 14,
    },

    // Pantalla Principal
    mainContainer: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainCard: {
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        padding: 30,
        borderRadius: 18,
        alignItems: 'center',
        width: '80%',
    },
    welcomeText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 20,
        textAlign: 'center',
    },
});