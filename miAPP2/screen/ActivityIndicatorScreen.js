import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Button,
    ActivityIndicator,
    KeyboardAvoidingView,
    Platform, Switch, SwitchBase
} from 'react-native';
import {useState} from 'react';

export default function ActivityIndicatorScreen() {
    const [cargando,setCargando] = useState(false);
    const [esGrande, setEsGrande] = useState(false);
    const [cambiarColor,setCambiarColor] = useState(false);

    const handleEnviar = () => {
        setCargando(true);
        setTimeout(() => setCargando(false),4000);
    };
    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        KeyboardVerticalOfsset={20}
        style={styles.container}
        >
            <TextInput
            placeholder="Escribe algo.."
            style={styles.input}
            />
            <View style={styles.actionContainer}>
                {cargando ? (
                    <ActivityIndicator
                    size={esGrande ? "large" : "small"}
                    color={cambiarColor ? "#00bfff" : "#ff00fb"}
                    />
                    ) : (
                        <Button
                        title = "Enviar"
                        onPress={handleEnviar}
                        />
                )}
            </View>
            <View style={styles.switchBox}>
                <View style={styles.switchBox}>
                    <Text style={styles.switchText}> Hacer mas grande</Text>
                    <Switch
                        value={esGrande}
                        onValueChange={setEsGrande}
                        />
                </View>
                <View style={styles.switchRow}>
                    <Text style={styles.switchText}>Cambiar color</Text>
                    <Switch
                        value={cambiarColor}
                        onValueChange={setCambiarColor}
                        />
                </View>
            </View>
         </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'flex-end',
        padding:20,
        backgroundColor: '#fff',
    },
    input: {
        borderWidth:1,
        borderColor: '#00bfff',
        padding:10,
        borderRadius:8,
        marginBottom:20,
        backgroundColor: '#fff',
    },
    actionContainer: {
        height:40,
        justifyContent: 'center',
        marginBottom:20,
    },
    switchBox: {
        borderWidth:1,
        borderColor: '#ddd',
        borderRadius:8,
        padding:15,
        backgroundColor: '#fff',
    },
    switchRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom:15,
    },
    switchText: {
        fontSize:16,
    },
})
