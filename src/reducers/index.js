import {combineReducers} from 'redux'
import TodoListReducer from './listReducer'
import changeTextColor from './colorReducer'
import counterReducer from './counterReducer'

const reducer = combineReducers({
    changeTextColor,
    TodoListReducer,
    counterReducer,
})

export default reducer