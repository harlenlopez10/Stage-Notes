import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { useAuth } from "../contexts/AuthContext";

export default function Register({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 1. Extraemos la función register de tu contexto, justo como en la imagen
  const { register } = useAuth();

  // 2. La función asíncrona exacta que pide la inge
  const handleRegister = async () => {
    // Pequeña validación extra para que no manden datos vacíos a Supabase
    if (!email || !password) {
      Alert.alert("Error", "Por favor llena todos los campos");
      return;
    }

    try {
      // Intentamos registrar en Supabase
      await register(email, password);
      
      // Si funciona, lo mandamos al login
      navigation.navigate("LoginScreen");
      
    } catch (error: any) {
      // El console.log de la pizarra para debuggear
      console.log("error al registrarse: ", error.message);
      
      // Una alerta visual para que tú lo notes en el emulador
      Alert.alert("Error al registrarse", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear Cuenta</Text>

      <CustomInput
        onChangeText={setEmail}
        value={email}
        placeholder={"Ingresa tu email"}
        type="email"
      />

      <CustomInput
        onChangeText={setPassword}
        value={password}
        placeholder={"Crea tu contraseña"}
        type="password"
      />

      <CustomButton
        title="Registrarse"
        onPress={handleRegister}
      />

      <CustomButton
        title="Volver al Login"
        onPress={() => navigation.navigate("LoginScreen")}
        variant="secondary" // Usando el botón secundario que ya tenías configurado
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "navy",
    marginBottom: 20,
  },
});