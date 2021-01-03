import React, { useState } from 'react'
import {View,Text,TextInput,StyleSheet,TouchableOpacity} from 'react-native'
import {useDispatch} from 'react-redux'
import {getCountryDetails} from '../redux/action/action'
export const Home=({navigation}:any)=>{
    const [country,setCountry] =useState("")
    const dispatch =useDispatch();
    const submitCountry=()=>{
      dispatch(getCountryDetails(country,navigation))
    //Props.navigation.navigate("Country")
    }
    return(
            <View style={styles.container} testID="HomeScreen">
                <Text>Choose Country to know weather </Text>
                <View>
                    <TextInput style={styles.input}   onChangeText={(value)=>setCountry(value)}/>
                    <TouchableOpacity onPress={()=>{ submitCountry()}}>
                        <Text style={styles.button}>Submits</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input :{
        borderColor: '#7a42f4',
        borderWidth: 1,
        margin:10,
        width:'100%',
        height:40,
    },
    button:{
        
        margin:10,
        height:40,
        width:'100%',
        backgroundColor: '#7a42f4',
        padding: 10,
        
    }
  });
  