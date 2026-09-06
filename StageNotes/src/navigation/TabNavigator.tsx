import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons"; 
import Home from "../screens/Home";
import Profile from "../screens/features/Profile";
import Settings from "../screens/features/Settings";

export type TabsParamList = {
    HomeTab: { email: string };
    Profile: undefined;
    Settings: undefined;
};

const Tab = createBottomTabNavigator<TabsParamList>();

export default function TabNavigator({ route }: any) {
    const email = route?.params?.email || "Usuario";

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "navy",
                tabBarInactiveTintColor: "gray",
            }}
        >
            <Tab.Screen 
                name="HomeTab" 
                component={Home} 
                initialParams={{ email }} 
                options={{
                    title: "Inicio",
                    tabBarIcon: ({ color }) => <Ionicons name="musical-notes" size={24} color={color} />
                }}
            />
            <Tab.Screen 
                name="Profile" 
                component={Profile} 
                options={{
                    title: "Perfil",
                    tabBarIcon: ({ color }) => <Ionicons name="person" size={24} color={color} />
                }}
            />
            <Tab.Screen 
                name="Settings" 
                component={Settings} 
                options={{
                    title: "Ajustes",
                    tabBarIcon: ({ color }) => <Ionicons name="settings" size={24} color={color} />
                }}
            />
        </Tab.Navigator>
    )
}