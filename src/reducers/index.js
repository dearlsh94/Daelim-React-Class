import {combineReducers} from 'redux'
import getTodoList from './listReducer'
import changeColText from './colListReducer'
import daoReducer from './daoReducer'
import getCounter from './counterReducer'

const reducer = combineReducers({
    changeColText,
    getTodoList,
    daoReducer,
    getCounter
})

export default reducer