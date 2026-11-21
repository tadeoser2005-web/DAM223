import {Tabs} from "expo-router";
import {Ionicons} from "@expo/vector-icons";

export default function TabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{title:"Inicio", href:null}}
            />
            <Tabs.Screen
                name="alta" //la ruta
                options={{
                    title:"Alta Usuarios",
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="person-add"
                                  size={size}
                                  color={color}
                                  />
                    )
                }}
            />
            <Tabs.Screen
                name="consulta" //la ruta
                options={{
                    title:"Consulta",
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="search"
                                  size={size}
                                  color={color}
                                  />
                    )
                }}
            />
        </Tabs>
    );
}