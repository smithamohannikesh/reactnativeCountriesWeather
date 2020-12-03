


import CONSTS from '../../constants/constants'
interface InitialState{
    country:any,
    weather:any
}
const InitialState={
   country:[],
   weather:[]
}
export const appREducer=(state=InitialState,action:any)=>{
    switch(action.type){
        case CONSTS.GET_COUNTRY :
            return {...state,country:action.action}
        case CONSTS.GET_WEATHER :
            return {...state,weather:action.action}
        default: return state;

    }

}