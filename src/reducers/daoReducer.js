import {actionTypes} from '../actions'

const initialState = {
    sections: []
};

function daoReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.LOAD_SECTIONS_SUCCESS:
            return {
                ...state,
                sections: action.sections
            };
        default:
            return state
    }
}

export default daoReducer