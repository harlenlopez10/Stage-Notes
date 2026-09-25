import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Profile from "../screens/features/Profile";
import Settings from "../screens/features/Settings";
import { useTheme } from "../contexts/ThemeContext"; 
import Transportador from "../screens/features/Transportador";
import Metronomo from "../screens/features/Metronomo";

export type TabsParamList = {
    TransportadorTab: undefined;
    MetronomoTab: undefined;
    SettingsTab: undefined;
};

const Tab = createBottomTabNavigator<TabsParamList>();

export default function TabNavigator({ route }: any) {
    const email = route?.params?.email || "Usuario";
    const { colors } = useTheme(); 

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: { backgroundColor: colors.background },
                headerStyle: { backgroundColor: colors.background },
                headerTintColor: colors.text,
                tabBarActiveTintColor: colors.primary || "navy",
                tabBarInactiveTintColor: "gray",
            }}
        >
          
            <Tab.Screen 
                name="TransportadorTab" 
                component={Transportador} 
                options={{
                    title: "Acordes",
                    tabBarIcon: ({ color }) => <Ionicons name="document-text" size={24} color={color} />
                }}
            />
            
            <Tab.Screen 
                name="MetronomoTab" 
                component={Metronomo} 
                options={{
                    title: "Tempo",
                    tabBarIcon: ({ color }) => <Ionicons name="pulse" size={24} color={color} />
                }}
            />
        
            <Tab.Screen 
                name="SettingsTab" 
                component={Settings} 
                options={{
                    title: "Ajustes",
                    tabBarIcon: ({ color }) => <Ionicons name="settings" size={24} color={color} />
                }}
            />
        </Tab.Navigator>
    )
}