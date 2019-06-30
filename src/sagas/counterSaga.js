
import { put, call, take } from 'redux-saga/effects'
import { actionTypes, delay } from '../actions'

function* increase() {
    try {
        yield call(delay, 100);
        yield put({
            type: actionTypes.INCREMENT_SUCCESS,
        });

        return true;
    } catch (err) {
        yield put({
            type: actionTypes.INCREMENT_FAILED,
        });

        return false;
    }
}

export function* increaseFlow() {
    while (true) {
        yield take(actionTypes.INCREMENT_REQUEST);
        yield call(increase);
    }
}

function* decrease() {
    try {
        yield call(delay, 100);
        yield put({
            type: actionTypes.DECREMENT_SUCCESS,
        });

        return true;
    } catch (err) {
        yield put({
            type: actionTypes.DECREMENT_FAILED,
        });

        return false;
    }
}

export function* decreaseFlow() {
    while (true) {
        yield take(actionTypes.DECREMENT_REQUEST);
        yield call(decrease);
    }
}
