import { StyleSheet, View,Text} from 'react-native';

export default function SafeScreen() {
    return (
        <View style={styles.container}>
            <Text>Aqui va la practica 10 </Text>
            <text>Equipo de dulce</text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
});