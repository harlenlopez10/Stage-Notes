import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";
import CustomButton from "../../components/CustomButton";
import { Audio } from 'expo-av';

export default function Metronomo() {
  const { colors } = useTheme();
  const [bpm, setBpm] = useState(120);
  const [isPlaying, setIsPlaying] = useState(false);
  const [flash, setFlash] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | number | null>(null);

  const togglePlay = () => setIsPlaying(!isPlaying);

  useEffect(() => {
    if (isPlaying) {
      
      const intervalo = (60 / bpm) * 1000;
      
      timerRef.current = setInterval(() => {
       
        setFlash(true);
        setTimeout(() => setFlash(false), 100); 
        
        
      }, intervalo);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, bpm]);

  return (
    <View style={[styles.container, { backgroundColor: flash ? colors.primary : colors.background }]}>
      <Text style={[styles.title, { color: flash ? '#fff' : colors.text }]}>Metrónomo</Text>
      
      <View style={styles.bpmContainer}>
        <TouchableOpacity onPress={() => setBpm(Math.max(40, bpm - 5))} style={styles.circleBtn}>
          <Text style={styles.btnText}>-</Text>
        </TouchableOpacity>
        
        <Text style={[styles.bpmText, { color: flash ? '#fff' : colors.text }]}>{bpm} BPM</Text>
        
        <TouchableOpacity onPress={() => setBpm(Math.min(240, bpm + 5))} style={styles.circleBtn}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>

      <CustomButton 
        title={isPlaying ? "DETENER" : "INICIAR"} 
        onPress={togglePlay} 
        variant={isPlaying ? "secondary" : "primary"} 
      />
    </View>
  );
}



const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 50 },
  bpmContainer: { flexDirection: "row", alignItems: "center", marginBottom: 50 },
  bpmText: { fontSize: 40, fontWeight: "bold", marginHorizontal: 30 },
  circleBtn: { width: 60, height: 60, borderRadius: 30, backgroundColor: "gray", justifyContent: "center", alignItems: "center" },
  btnText: { fontSize: 30, color: "white", fontWeight: "bold" }
});