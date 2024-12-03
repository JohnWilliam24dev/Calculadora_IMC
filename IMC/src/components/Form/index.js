import React,{useState,memo} from "react";
import { Text,TextInput, View, TouchableOpacity } from "react-native";
import Result from "./Result";
import styles from "./styles";
 


export default function Form(props){

const[height,setHeigth]=useState(null)
const[weight,setWeight]=useState(null)
const[messageImc,setMessageImc]=useState("Preencha os campos")
const[imc,setimc]=useState(null)
const[TextButton, setTextButton]=useState("calcular")
const[Alert, setAlert]=useState(null)
function imcCalculator(){
    return setimc((weight/(height*height)).toFixed(2))
}
function validatorimc(){
    if(weight!=null && height!=null){
        imcCalculator()
        let imc2=weight/(height*height);
        setHeigth(null)
        setWeight(null)
        setMessageImc("Seu imc é igual a:")
        setTextButton("Calcular Novamente")
        if (imc2<=18.50){
            setAlert("Voçê está a baixo do peso.")
        }
        else if (imc2>=25.00){
            setAlert("Voçê está acima do peso.")
        }
        else if(imc2<24.90){
            setAlert("Voçê está no peso normal.")
        }
       
        
        return
    }
    setAlert(null)
    setimc(null)
    setTextButton("Calcular")
    setMessageImc("Preencha os campos")

}
    return(
        <View style={styles.formContent}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput style={styles.formInput} 
                placeholder="ex: 1.75" 
                keyboardType="numeric"
                onChangeText={setHeigth}
                value={height}
                ></TextInput>
                <Text style={styles.formLabel}>Peso</Text>
                <TextInput style={styles.formInput}
                placeholder="ex: 60,1" 
                keyboardType="numeric"
                onChangeText={setWeight} 
                value={weight}></TextInput>
                <TouchableOpacity
                style={styles.ButtonCalculator}
                onPress={() =>{validatorimc()}}
                ><Text style={styles.textButtonCalculator}>{TextButton}</Text></TouchableOpacity>
                

            </View>
         <Result menssageResultIMC={messageImc} resultIMC={imc} Alert={Alert}/>
        </View>
    )

}