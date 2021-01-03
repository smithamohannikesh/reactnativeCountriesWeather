import React, { useState } from 'react'
import {View,Text,TextInput,StyleSheet,TouchableOpacity,Image} from 'react-native'
import {useDispatch,useSelector} from 'react-redux'
import {getWeather} from '../redux/action/action'
export const Weather=()=>{
    //const [country,setCountry] =useState("")
    const dispatch =useDispatch();
    const weather= useSelector((state:any)=>state.app.weather)
    console.log("Weather")
    console.log(weather);
  //console.log(weather.weather_icons[0])
  var icons:any="";
  if(weather.length==0){
   // console.log("ho")
    
  }else{
    icons= weather.weather_icons.map((icon:any) => <Image key={icon} style={{width: 20, height:20}} source={{uri:icon}}/>)    ;
  }
    
    return(
      <View style={Styles.container}>
     
      <View style={Styles.listDisplay}>
        <View style={Styles.itemRaw}>
          <Text>
            <Text style={Styles.label}>temperature: </Text>
            <Text>{weather.temperature}</Text>
          </Text>
        </View>
        <View style={Styles.itemRaw}>
        <Text>
            <Text style={Styles.label}>Weather Icons: </Text>
              {weather.weather_icons.map((icon:any) => <Image key={icon} style={{width: 20, height:20}} source={{uri:icon}}/>)}
          </Text>
        
        </View>
        <View style={Styles.itemRaw}>
          <Text>
            <Text style={Styles.label}>Wind Speed: </Text>
            <Text>{weather.wind_speed}</Text>
          </Text>
        </View>
        <View style={Styles.itemRaw}>
          <Text>
            <Text style={Styles.label}>Precip: </Text>
            <Text>{weather.precip}</Text>
          </Text>
        </View>
      </View>
    </View>
    )
}


const Styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    flag: {
      width: 30,
      height: 20
    },
    listDisplay: {
      padding: 50
    },
    itemRaw: {
      paddingBottom: 10,
      
    },
    label: {
      fontWeight: 'bold',
      
      
     
    }
  });
  