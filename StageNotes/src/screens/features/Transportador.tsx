import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";
import CustomButton from "../../components/CustomButton";

const ACORDES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

export default function Transportador() {
  const { colors } = useTheme();
  const [cancion, setCancion] = useState("C\nVenimos ante ti\nF          G\nPara adorarte");
  const [tonoActual, setTonoActual] = useState(0);

  

  const transponer = (texto: string, pasos: number) => {
    
    return texto.replace(/\b[CDEFGAB]#?(?!\w)/g, (match) => {
      const index = ACORDES.indexOf(match);
      if (index === -1) return match;
      
      const nuevoIndex = (index + pasos + 12) % 12;
      return ACORDES[nuevoIndex];
    });
  };

  const subirTono = () => {
    setCancion(transponer(cancion, 1));
    setTonoActual(tonoActual + 1);
  };

  const bajarTono = () => {
    setCancion(transponer(cancion, -1));
    setTonoActual(tonoActual - 1);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Transportador (Cifrado)</Text>
      
      <View style={styles.controles}>
        <CustomButton title="-1 Semitono" onPress={bajarTono} variant="secondary" />
        <Text style={[styles.tono, { color: colors.text }]}>{tonoActual > 0 ? `+${tonoActual}` : tonoActual}</Text>
        <CustomButton title="+1 Semitono" onPress={subirTono} variant="primary" />
      </View>

      <TextInput
        style={[styles.inputArea, { color: colors.text, borderColor: colors.primary }]}
        multiline
        value={cancion}
        onChangeText={(text) => {
          setCancion(text);
          setTonoActual(0); 
        }}
        placeholder="Escribe tus acordes y letra aquí..."
        placeholderTextColor="gray"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  controles: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 20 },
  tono: { fontSize: 20, fontWeight: "bold", width: 40, textAlign: "center" },
  inputArea: { flex: 1, borderWidth: 1, borderRadius: 10, padding: 15, fontSize: 18, textAlignVertical: "top", fontFamily: "monospace" }
});