import { StyleSheet, View,TextInput} from 'react-native';
import MenuScreen from "./screen/MenuScreen";
export default function App() {
    return (
        <View style={styles.container}>
            <MenuScreen/>
            <TextInput>

            </TextInput>
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
