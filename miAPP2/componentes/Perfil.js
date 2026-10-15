import {Text,View,Button} from 'react-native';
import {useState} from "react";


export const Perfil = ({nombre,carrera,materia,cuatrimestre})=> {

    const[mostrar,setMostrar] = useState(false);

    return (
        <view>
        <Text>{nombre}</Text>
            {/*renderizado condicional es un tipo if, si mostrar es true muestra todo esto, y si es false lo oculta */}
            { mostrar &&
                <>
        <Text>{carrera}</Text>
        <Text>{materia}</Text>
        <Text>{cuatrimestre}</Text>
                </>
}
<Button title= "Ver perfil" onPress={ ()=> setMostrar(!mostrar) }></Button>
    </view>
    );
};