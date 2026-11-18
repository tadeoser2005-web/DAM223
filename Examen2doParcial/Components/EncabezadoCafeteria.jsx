import {Text,View,StyleSheet} from "react-native";

export default function EncabezadoCafeteria() {
    return (
        <Text style={styles.titulo} >Antojo Express</Text>
    )
}

const styles =StyleSheet.create({
    titulo: {
        fontSize:24,
        fontWeight:'bold',
        alignItems:'center',
    },
})