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
 // icons= weather.weather_icons.map((icon:any) => <Image key={icon} style={{width: 20, height:20}} source={{uri:icon}}/>)
    
    return(
      <View style={Styles.container}>
     
      <View style={Styles.listDisplay}>
        <View style={Styles.pb}>
          <Text>
            <Text style={Styles.mr}>temperature: </Text>
            <Text>{weather.temperature}</Text>
          </Text>
        </View>
        <View style={Styles.pb}>
        <Text>
            <Text style={Styles.mr}>Weather Icons: </Text>
              {weather.weather_icons.map((icon:any) => <Image key={icon} style={{width: 20, height:20}} source={{uri:icon}}/>)}
          </Text>
        
        </View>
        <View style={Styles.pb}>
          <Text>
            <Text style={Styles.mr}>Wind Speed: </Text>
            <Text>{weather.wind_speed}</Text>
          </Text>
        </View>
        <View style={Styles.pb}>
          <Text>
            <Text style={Styles.mr}>Precip: </Text>
            <Text>{weather.precip}</Text>
          </Text>
        </View>
      </View>
    </View>
    )
}


const Styles = StyleSheet.create({
    container: {
      padding: 20
    },
    flag: {
      width: 30,
      height: 20
    },
    listDisplay: {
      padding: 50
    },
    pb: {
      paddingBottom: 10
    },
    mr: {
      fontWeight: 'bold',
     
    }
  });
  