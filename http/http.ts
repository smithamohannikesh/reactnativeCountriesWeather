import axios from 'axios'
export const http =axios.create({
    baseURL:'https://restcountries.eu/rest/v2/'
})
export const http2=axios.create({
    baseURL:'http://api.weatherstack.com/'
})