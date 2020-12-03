import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {Home} from '../screen/Home'
import {Country} from '../screen/Country'
import {Weather} from '../screen/Weather'
const stack=createStackNavigator();


const Navigation=()=>{
    return(
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen
                    name="Home"
                    component={Home}
                   options={
                       {
                           title:"Home",
                           headerStyle:{
                               backgroundColor:'grey'
                           }
                       }
                   }

                />
                <stack.Screen
                    name="Country"
                    component={Country}
                   options={
                       {
                           title:"Country",
                           headerStyle:{
                               backgroundColor:'grey'
                           }
                       }
                   }

                />
                <stack.Screen
                    name="Weather"
                    component={Weather}
                   options={
                       {
                           title:"Weather",
                           headerStyle:{
                               backgroundColor:'grey'
                           }
                       }
                   }

                />
            </stack.Navigator>
        </NavigationContainer>
    )
}
export default Navigation;