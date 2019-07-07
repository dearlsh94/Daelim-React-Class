import {combineReducers} from 'redux'
import TodoListReducer from './listReducer'
import changeColText from './colorReducer'
import counterReducer from './counterReducer'

const reducer = combineReducers({
    changeColText,
    TodoListReducer,
    counterReducer,
})

export default reducer