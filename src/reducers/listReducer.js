import {actionTypes} from '../actions'

const initialState = {
    items: []
};

function TodoListReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.LOAD_ITEM_SUCCESS:
            console.log("LOAD_ITEM_SUCCESS");
            return {
                ...state,
                items: action.items
            };
        case actionTypes.LOAD_ITEM_FAILED:
            console.log("LOAD_ITEM_FAILED");
            return {
                ...state,
                items: []
            };
        case actionTypes.ADD_ITEM_SUCCESS:
            console.log("ADD_ITEM_SUCCESS");
            return{
                ...state
            };
        case actionTypes.ADD_ITEM_FAILED:
            console.log("ADD_ITEM_FAILED");
            return{
                ...state,
            };
        case actionTypes.REMOVE_ITEM_SUCCESS:
            console.log("REMOVE_ITEM_SUCCESS");
            return{
                ...state
            };
        case actionTypes.REMOVE_ITEM_FAILED:
            console.log("REMOVE_ITEM_FAILED");
            return{
                ...state,
            };
        case actionTypes.TOGGLE_ITEM_SUCCESS:
            console.log("TOGGLE_ITEM_SUCCESS");
            return{
                ...state,
            };
        case actionTypes.TOGGLE_ITEM_FAILED:
            console.log("TOGGLE_ITEM_FAILED");
            return{
                ...state,
            };
        default:
            return state
    }
}

export default TodoListReducer