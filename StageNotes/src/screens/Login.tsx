import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Alert } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { useAuth } from "../contexts/AuthContext";

export default function Login({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const { login } = useAuth(); 

  
  const handleLogin = async () => {
   
    if (!email || !password) {
      Alert.alert("Error", "Ingresa tu email y contraseña");
      return;
    }

    try {
      
      await login(email, password);
      
     
      navigation.navigate("MainTabs", { email });
      
    } catch (error: any) {
      
      console.log("Error al iniciar sesión:", error.message);
      

      Alert.alert("Error real de Supabase", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/logo.png")}
        style={styles.logo}
      />

      <Text style={styles.title}>StageNotes</Text>
      <Text style={styles.subtitle}>Tu libreta digital interactiva</Text>

      <CustomInput
        onChangeText={setEmail}
        value={email}
        placeholder={"Ingresa tu email"}
        type="email"
      />
      
      <CustomInput
        onChangeText={setPassword}
        value={password}
        placeholder={"Ingresa tu contraseña"}
        type="password"
      />
      
      <CustomButton 
        title="Iniciar Sesión" 
        onPress={handleLogin} 
      />

      <CustomButton
        title="Crear Cuenta"
        onPress={() => navigation.navigate("RegisterScreen")}
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
  logo: {
    width: 120,
    height: 120,
    marginBottom: 10,
    resizeMode: "contain",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "navy",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "gray",
    marginBottom: 30,
  },
});