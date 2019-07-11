import {actionTypes} from '../actions'

const defaultCol = "#343a40";
const initColorList = [
    {
        "id": "0",
        "color": "#343a40"
    },
    {
        "id": "1",
        "color": "#f03e3e"
    },
    {
        "id": "2",
        "color": "#12b886"
    },
    {
        "id": "3",
        "color": "#228ae6"
    }
];

const initialState = {
    list: initColorList,
    inputCol: defaultCol
};

function changeTextColor(state = initialState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_TODOINPUT_COLOR_SUCCESS:
            return {
                ...state,
                inputCol: action.data
            };
        default:
            return state
    }
}

export default changeTextColor