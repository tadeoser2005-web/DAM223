import {Stack} from 'expo-router';

export default function RootLayout() {
    return (
      <Stack
      screenOptions={{headerShown: false}} //la iniciamos en falso para q sea navegacion secundaria
      />
    );
}