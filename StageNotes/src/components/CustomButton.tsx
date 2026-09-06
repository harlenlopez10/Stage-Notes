import React from "react";
import {TouchableOpacity, Text, StyleSheet } from "react-native";

type CustomButtonProps = {
title: string;
onPress: ()=>void;
variant?: "primary" | "secondary" | "tertiary"

}


export default function CustomButton({title, onPress, variant='primary'}: CustomButtonProps){
const styles = getStyles(variant);
    return(
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonTitle}> {title} </Text>
        </TouchableOpacity>
    );
}

const getStyles = (variant: "primary" | "secondary" | "tertiary") => 
    StyleSheet.create({
        button:{
            backgroundColor: variant === "primary" ? 'navy' :  
                                variant === "secondary" ? 'lightblue' : '#bfc1c0',
            borderRadius: 5,
            width: 150,
            padding: 12,
            marginBottom: 5,

        },

        buttonTitle: {
            color: variant === "primary" ? 'white' :  
                        variant === "secondary" ? 'black' : '#171818',
        }
    }
)