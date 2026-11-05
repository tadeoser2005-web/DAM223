import {StyleSheet, View} from 'react-native';
import MenuScreen from "./screen/MenuScreen";
import {SafeAreaProvider} from 'react-native-safe-area-context';


export default function App() {
    return (
        <SafeAreaProvider>

            <View style={styles.container}>
                <MenuScreen/>
            </View>

        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection:'column',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    },
});
