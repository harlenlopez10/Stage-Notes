import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {KeyboardTypeOptions, StyleSheet, TextInput, TouchableOpacity, View, Text } from "react-native";

//esto es un tipado de props
type CustomInputProps = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  type?: "default" | "password" | "email" | "number"

}

export default function CustomInput({placeholder, value, onChangeText, type="default"}: CustomInputProps) {

    const [isSecureTex, SetisSecureText] = useState(type === "password");

    const isPasswordField = type==="password";

    const iconName: (typeof MaterialIcons)["name"] | undefined = 
        type === "password" ? "lock" :
            type === "email" ? "alternate-email" : undefined

    const keyboardType: KeyboardTypeOptions = 
        type === "email" ? "email-address" :
            type === "number" ? "number-pad" :
                "default"

     const getError = () => {
        if (value.length === 0) return undefined;
        if (type === "email" && !value.includes('@'))
            return 'Correo Inválido';
        if (type === "password" && value.length < 4)
            return 'La contraseña debe ser más fuerte';
    };

    const error = getError();
    
    

  
  return (

    <View style = {styles.wrapper}>
      <View style = {[styles.inputContainer , error && styles.errorText,]}>
        <MaterialIcons name={iconName as any} size={22} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType = {keyboardType}
        secureTextEntry = {isSecureTex}
      />
      { isPasswordField && <TouchableOpacity onPress={()=>{
          SetisSecureText(!isSecureTex);
        }}>
        <Ionicons name ="eye" size={22}/>
      </TouchableOpacity> }
      </View >
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
    wrapper:{
      marginBottom: 10
    },
    inputContainer: {
      backgroundColor: "lightgray",
      //distribucion de componentes con Flexbox
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 9,
      borderColor: 'gray',
      borderWidth: 1,
      paddingLeft: 20,
      paddingRight: 20,

    },

    input: {
      width: "70%",
    },

    errorText: {
        color: "red",
        borderColor: "red",
        fontSize: 12,
        marginTop: 4,
        marginLeft: 4,
        fontWeight: '500',
    },
})


  
    
