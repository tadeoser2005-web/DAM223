import {Stack} from 'expo-router';

export default function RootLayout() {
    return (
        <Stack>
      <Stack.Screen
          name="(tabs)"
      options={{headerShown: false}} //la iniciamos en falso para q sea navegacion secundaria
      />
            <Stack.Screen
                name="detalle"
                options={{title:"Detalle de usuario"}} //la iniciamos en falso para q sea navegacion secundaria
            />
            <Stack.Screen
                name="actualiza"
                options={{title:"Actualizacion de usuario"}} //la iniciamos en falso para q sea navegacion secundaria
            />
        </Stack>
    );
}