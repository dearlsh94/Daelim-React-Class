
import {put, call, take} from 'redux-saga/effects'
import {actionTypes, delay} from '../actions'

function* changeTodoInputColor(color) {
    try {
        yield call(delay, 100);
        yield put({
            type: actionTypes.CHANGE_TODOINPUT_COLOR_SUCCESS,
            data: color
        });

        return true;
    } catch (err) {
        yield put({type: actionTypes.CHANGE_TODOINPUT_COLOR_FAILED});

        return false;
    }
}

export function* changeTodoInputColorFlow() {
    while (true) {
        let request = yield take(actionTypes.CHANGE_TODOINPUT_COLOR_REQUEST);
        yield call(changeTodoInputColor, request.color);
    }
}