import { actionTypes } from '../actions'
// import { combineReducers } from 'redux';

const counterInitialState = {
    number: 0,
    diff: 1
};

const counterReducer = (state = counterInitialState, action) => {
    switch(action.type) {
        case actionTypes.INCREMENT_SUCCESS:
            return {
                ...state,
                number: action.data
            };
        case actionTypes.DECREMENT_SUCCESS:
            return {
                ...state,
                number: action.data
            };
        case actionTypes.SET_DIFF_SUCCESS:
            return {
                ...state,
                diff: state.number
            };
        default:
            return state;
    }
};

/*
const extra = (state = { value: 'this_is_extra_reducer' }, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

const getCounter = combineReducers({
    counter: counterReducer,
    extra
});
*/

export default counterReducer;
