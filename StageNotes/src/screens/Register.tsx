import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

export default function Register({ navigation }: any) {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleRegister = () => {
    // Validación de campos obligatorios
    if (!nombre || !telefono || !email || !password) {
      setErrorMsg("Todos los campos son obligatorios");
      return;
    }
    
    setErrorMsg("");
    navigation.navigate("MainTabs", { email: nombre });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Crear Cuenta</Text>
      
      <CustomInput
        onChangeText={setNombre}
        value={nombre}
        placeholder={"Nombre completo"}
        type="default"
      />

      <CustomInput
        onChangeText={setTelefono}
        value={telefono}
        placeholder={"Número de teléfono"}
        type="number" 
      />

      <CustomInput
        onChangeText={setEmail}
        value={email}
        placeholder={"Correo electrónico"}
        type="email"
      />

      <CustomInput
        onChangeText={setPassword}
        value={password}
        placeholder={"Contraseña"}
        type="password"
      />

      {errorMsg ? <Text style={styles.errorText}>{errorMsg}</Text> : null}

      <CustomButton 
        title="Registrarse" 
        onPress={handleRegister} 
      />
      
      <CustomButton 
        title="Volver al Login" 
        onPress={() => navigation.goBack()} 
        variant="secondary"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "navy"
  },
  errorText: {
    color: "red",
    marginBottom: 10,
    fontWeight: "500",
  }
});