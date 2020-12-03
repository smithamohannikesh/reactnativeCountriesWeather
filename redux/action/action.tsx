
import CONSTS from '../../constants/constants'
import {http,http2} from "../../http/http"
//name/{{FORM_INPUT_HERE}}   name/{{FORM_INPUT_HERE}}
export const  getCountryDetails=(country:any,navigation:any)=>{

    return async(dispatch:any)=>{
        const result=await http.get(`name/${country}`);
        if(result){
            //console.log(result.data[1]);
            const finalResult=result.data[1];
            dispatch({type:CONSTS.GET_COUNTRY,action:finalResult})
            navigation.navigate('Country');
        }

    }

}


//http://api.weatherstack.com/current? access_key={{YOUR_ACCESS_KEY}}&query ={{ENTER CAPITAL CITY HERE}}


export const  getWeather=(capital:any,navigation:any)=>{
    const key='b7d7f802a2ec37d37936b1eace8a0fe3';
    console.log(capital)
    return async(dispatch:any)=>{
        const result=await http2.get(`current?access_key=${key}&query=${capital}`);
        if(result){
           // console.log("fffffffffffffffffff")
            //console.log(result.data);
            const finalResult=result.data.current;
            dispatch({type:CONSTS.GET_WEATHER,action:finalResult})
            navigation.navigate("Weather")
        }

    }

}