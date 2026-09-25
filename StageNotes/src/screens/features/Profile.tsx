import React from "react";
import { View, Text } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";

export default function Profile() {
  const { colors } = useTheme();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background }}>
      <Text style={{ fontSize: 20, color: colors.text }}>Mi Perfil</Text>
    </View>
  );
}