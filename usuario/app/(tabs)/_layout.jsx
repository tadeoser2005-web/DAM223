import {Tabs} from "expo-router";

export default function TabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{title:"Inicio", href:null}}
            />
            <Tabs.Screen
                name="alta" //la ruta
                options={{title:"Alta Usuarios"}}
            />
            <Tabs.Screen
                name="consulta" //la ruta
                options={{title:"Consulta"}}
            />
        </Tabs>
    );
}