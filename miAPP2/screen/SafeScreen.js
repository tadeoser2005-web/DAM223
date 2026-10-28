import {StyleSheet, View, Text} from 'react-native';
import SafeAreaEjemplo from '../componentes/SafeAreaEjemplo';
import ScrollViewEjemplo from '../componentes/ScrollViewEjemplo';

export default function SafeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.tituloPrincipal}>Aqui va la practica 10</Text>
            <Text style={styles.subtitulo}>Equipo de dulce</Text>
            <SafeAreaEjemplo />
            <ScrollViewEjemplo />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection:'column',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        padding: 16,
    },
    tituloPrincipal: {
        fontSize:24,
        fontWeight:'bold',
        textAlign: 'center',
        marginBottom: 15,
    },
    subtitulo: {
        textAlign: 'center',
        marginBottom: 10,
    }
});