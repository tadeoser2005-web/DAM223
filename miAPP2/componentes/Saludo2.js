import {Text,Image,Button,View} from 'react-native'

export const Saludo2 = ()=> {
    return (
        <View>
            <Text>Hola reactNative desde un componente propio compuesto</Text>
            <Image source={require('../assets/wave.png')}></Image>
            <Button title={"Presiona para saludarme"}></Button>
        </View>

    )
}