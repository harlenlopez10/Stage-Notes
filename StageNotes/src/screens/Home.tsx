import React from "react";
import { View, Text } from "react-native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { TabsParamList } from "../navigation/TabNavigator";

type HomeProps = BottomTabScreenProps<TabsParamList, 'HomeTab'>;

export default function Home({ route }: HomeProps){
    const { email } = route.params;

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Bienvenido a StageNotes</Text>
            <Text>{email}</Text>
        </View>
    )
}