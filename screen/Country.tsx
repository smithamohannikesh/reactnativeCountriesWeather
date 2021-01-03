

import React, { useState } from 'react'
import {View,Text,TextInput,StyleSheet,TouchableOpacity,Image} from 'react-native'
import {useDispatch,useSelector} from 'react-redux'
import {getWeather} from '../redux/action/action'
export const Country=({navigation}:any)=>{
    //const [country,setCountry] =useState("")
    const dispatch =useDispatch();
    const infoCountry= useSelector((state:any)=>state.app.country)
    console.log("infoCountry");
    console.log(infoCountry);
    const submitWeather=()=>{
    
        const capital=infoCountry.capital;
        dispatch(getWeather(infoCountry.capital,navigation))
        //Props.navigation.navigate("Weather")


    }
    return(
            <View style={styles.container} testID="cccc">
                <Text>Capital:{infoCountry.capital} </Text>
                <Text>Population:{infoCountry.population} </Text>
                <Text>Lattitude:{infoCountry.latlng} </Text>
                <Image   style={{width: 20, height:20}}  source={{ uri: infoCountry.flag}}/>
               
                <View>
                   
                    <TouchableOpacity onPress={()=>{ submitWeather()}}>
                        <Text style={styles.button}>Capital Weather</Text>
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
        backgroundColor:'gray',
        margin:10
    },
    button:{
        margin:10,
        height:40,
        width:'100%',
        backgroundColor: '#7a42f4',
        padding: 10,
    }
  });
  