
import {put, call, take} from 'redux-saga/effects'
import { actionTypes, delay } from '../actions'

function* increase(number) {
    try {
        yield call(delay, 100);
        yield put({
            type: actionTypes.INCREMENT_SUCCESS,
            data: number + 1
        });

        return true;
    } catch (err) {
        yield put({
            type: actionTypes.INCREMENT_FAILED
        });

        return false;
    }
}

export function* increaseFlow() {
    while (true) {
        let request = yield take(actionTypes.INCREMENT_REQUEST);
        yield call(increase, request.number);
    }
}

function* decrease(number) {
    try {
        yield call(delay, 100);
        yield put({
            type: actionTypes.DECREMENT_SUCCESS,
            data: number - 1
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
        let request = yield take(actionTypes.DECREMENT_REQUEST);
        yield call(decrease, request.number);
    }
}
