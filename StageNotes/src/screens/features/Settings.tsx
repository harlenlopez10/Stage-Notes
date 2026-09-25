import React from "react";
import { View, Text, StyleSheet, Switch, Alert } from "react-native";
import CustomButton from "../../components/CustomButton";
import { useAuth } from "../../contexts/AuthContext";
import { useTheme } from "../../contexts/ThemeContext";

export default function Settings({ navigation }: any) {
  const { logout, user } = useAuth();

  const { isDark, colors, toggleTheme } = useTheme(); 

  const handleLogout = async () => {
    try {
      await logout();
      
    
      navigation.reset({
        index: 0,
        routes: [{ name: "LoginScreen" }],
      });
    } catch (error) {
      Alert.alert("Error", "Hubo un problema al cerrar sesión.");
      console.log(error);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Configuración</Text>
      
      
      <Text style={[styles.subtitle, { color: colors.text }]}>
        Sesión activa: {user?.email || "Usuario"}
      </Text>

      
      <View style={styles.settingRow}>
        <Text style={[styles.label, { color: colors.text }]}>
          {isDark ? 'Modo Oscuro Activado' : 'Modo Claro Activado'}
        </Text>
        <Switch 
          value={isDark} 
          onValueChange={toggleTheme} 
          thumbColor={isDark ? colors.primary : '#f4f3f4'} 
          trackColor={{ false: '#ccc', true: '#9B59B6' }} 
        />
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton 
          title="Cerrar Sesión" 
          onPress={handleLogout} 
          variant="secondary" 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20
  },
  title: { 
    fontSize: 24, 
    fontWeight: "bold", 
    marginBottom: 5,
    marginTop: 20
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 30,
    opacity: 0.6 
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 40,
  },
  label: {
    fontSize: 16,
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center"
  }
});