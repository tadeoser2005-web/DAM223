import { StyleSheet, View,Text} from 'react-native';

export default function PressableScreen() {
    return (
        <View style={styles.container}>
            <Text>Aqui va la practica 16 </Text>
            <text>Equipo de Judith</text>
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