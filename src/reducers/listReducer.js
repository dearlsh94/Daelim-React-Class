import {actionTypes} from '../actions'

const initialState = {
    sections: []
};

function TodoListReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.LOAD_SECTIONS_SUCCESS:
            console.log("LOAD_SECTIONS_SUCCESS");
            return {
                ...state,
                sections: action.sections
            };
        case actionTypes.LOAD_SECTIONS_FAILED:
            console.log("LOAD_SECTIONS_FAILED");
            return {
                ...state,
                sections: []
            };
        case actionTypes.LOAD_ITEM_SUCCESS:
            console.log("LOAD_ITEM_SUCCESS");
            return {
                ...state,
                sections: action.sections
            };
        case actionTypes.LOAD_ITEM_FAILED:
            console.log("LOAD_ITEM_FAILED");
            return {
                ...state,
                sections: []
            };
        case actionTypes.ADD_ITEM_SUCCESS:
            console.log("ADD_ITEM_SUCCESS");
            return{
                ...state,
                sections:action.sections
            };
        case actionTypes.ADD_ITEM_FAILED:
            console.log("ADD_ITEM_FAILED");
            return{
                ...state,
            };
        case actionTypes.REMOVE_ITEM_SUCCESS:
            console.log("REMOVE_ITEM_SUCCESS");
            return{
                ...state,
                sections:action.sections
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
                sections:action.sections
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