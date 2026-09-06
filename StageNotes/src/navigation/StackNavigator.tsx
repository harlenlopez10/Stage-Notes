import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Register from "../screens/Register";
import TabNavigator from "./TabNavigator"; 


export type RootStackParamList = {
    LoginScreen: undefined;
    MainTabs: { email: string }; 
    RegisterScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName="LoginScreen">
            <Stack.Screen name="LoginScreen" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="RegisterScreen" component={Register} />
            <Stack.Screen name="MainTabs" component={TabNavigator} options={{ headerShown: false }} />
        </Stack.Navigator>  
    );
}