import {actionTypes} from '../actions'

const initialState = {
    sections: []
};

function TodoListReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.LOAD_SECTIONS_SUCCESS:
            return {
                ...state,
                sections: action.sections
            };
        case actionTypes.LOAD_SECTIONS_FAILED:
            return {
                ...state,
                sections: []
            };
        case actionTypes.ADD_SECTION_SUCCESS:
            console.log("ADD_SECTION_SUCCESS");
            return{
                ...state,
                sections:action.sections
            };
        case actionTypes.ADD_SECTION_FAILED:
            console.log("ADD_SECTION_FAILED");
            return{
                ...state,
            };
        case actionTypes.DEL_SECTION_SUCCESS:
            console.log("DEL_SECTION_SUCCESS");
            return{
                ...state,
                sections:action.sections
            };
        case actionTypes.DEL_SECTION_FAILED:
            console.log("DEL_SECTION_FAILED");
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