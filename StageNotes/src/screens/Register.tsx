import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { useAuth } from "../contexts/AuthContext";

export default function Register({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const { register } = useAuth();

  //La función asíncrona exacta que pide la inge
  const handleRegister = async () => {

    if (!email || !password) {
      Alert.alert("Error", "Por favor llena todos los campos");
      return;
    }

    try {
     
      await register(email, password);
      
     
      navigation.navigate("LoginScreen");
      
    } catch (error: any) {
      
      console.log("error al registrarse: ", error.message);
      
      
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
        variant="secondary" 
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