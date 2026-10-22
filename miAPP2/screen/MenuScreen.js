import { StyleSheet, View,Text,Button} from 'react-native';
import {useState} from "react";
import SafeScreen  from "./SafeScreen";
import PressableScreen from "./PressableScreen";
import TarjetasScreen from "./TarjetasScreen";
import TextInputScreen from "./TextInputScreen";
import ListScreen from "./ListScreen";
import SlapshScreen from "./SlapshScreen";
import ModalScreen from "./ModalScreen";
import ActivityIndicator from "./ActivityIndicatorScreen";

export default function MenuScreen() {
    const [screen, setScreen] = useState('menu'); /*en el parametro ponemos la primera pantalla que quiero q se muestre*/

    switch (screen) {
        case 'safe':
            return <SafeScreen/>;
        case 'press':
            return <PressableScreen/>;
        case 'tarjetas':
            return <TarjetasScreen/>;
        case 'text':
            return <TextInputScreen/>;
        case 'list':
            return <ListScreen/>;
        case 'splash':
            return <SlapshScreen/>;
        case 'modal':
            return <ModalScreen/>;
        case 'activity':
            return <ActivityIndicator/>;
        case 'menu':
        default:

            return (
                <View style={styles.container}>
                    <Text>Menu de practicas</Text>
                    <Button title="Practica tarjetas" onPress={() => setScreen('tarjetas')} />
                    <Button title="Practica SafeAreaView" onPress={() => setScreen('safe')} />
                    <Button title="Practica Pressable"  onPress={() => setScreen('press')}/>
                    <Button title="Practica TextInput" onPress={() => setScreen('text')}/>
                    <Button title="Practica List" onPress={() => setScreen('list')}/>
                    <Button title="Practica Splash" onPress={() => setScreen('splash')}/>
                    <Button title="Practica Modal" onPress={() => setScreen('modal')}/>
                    <Button title="Practica ActivityIndicator" onPress={() => setScreen('activity')}/>
                </View>
            );
    } //switch
}// funcion
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
});