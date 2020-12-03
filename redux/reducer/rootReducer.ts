import {combineReducers} from 'redux'
import {appREducer} from './appREducer'

export const rootReducer =combineReducers({app:appREducer});