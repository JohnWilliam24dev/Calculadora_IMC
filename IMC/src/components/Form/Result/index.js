import React from "react";
import {View,Text} from "react-native"
import styles from "./styles";

export default function Result(props){
    return(
    <View style={styles.contextImc}>
        <Text style={styles.titleResultImc}>{props.menssageResultIMC}</Text>
        <Text style={styles.resultImc}>{props.resultIMC}</Text>
        <Text style={styles.titleResultImc}>{props.Alert}</Text>
    </View>)
}