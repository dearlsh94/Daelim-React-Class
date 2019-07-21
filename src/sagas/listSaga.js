
import { put, call, take } from 'redux-saga/effects'
import { actionTypes, delay } from '../actions'
import {selectItem, insertItem, insertItemDept1, deleteItem, updateItem } from "../shared/Firebase";

function* loadItem() {
    try {
        yield call(delay, 100);
        let items = yield call(selectItem);
        yield put({
            type: actionTypes.LOAD_ITEM_SUCCESS,
            items: items.val()
        });
        return items.val();
    } catch (err) {
        yield put({type: actionTypes.LOAD_ITEM_FAILED});

        return false;
    }
}

export function* loadItemFlow() {
    while (true) {
        yield take(actionTypes.LOAD_ITEM_REQUEST);
        yield call(loadItem);
    }
}

function* addItem(text, checked, color) {
    try {
        yield call(delay, 100);

        const res = yield insertItem(text, checked, color)
            .then((res) => {
                console.log(res);

                return res;
            })
            .catch((err) => {
                throw new Error('insert Item failed cause : ' + err);

                return false;
            });

        if (res) {
            yield put({
                type: actionTypes.ADD_ITEM_SUCCESS,
            });
            yield put({
                type: actionTypes.LOAD_ITEM_REQUEST,
            });
        }

    } catch (err) {
        console.log(err);
        yield put({type: actionTypes.ADD_ITEM_FAILED});

        return false;
    }
}

function* addItemDept1(code, text, checked, color) {
    try {
        yield call(delay, 100);

        const res = yield insertItemDept1(code, text, checked, color)
            .then((res) => {
                console.log(res);

                return res;
            })
            .catch((err) => {
                throw new Error('insert Item failed cause : ' + err);

                return false;
            });

        if (res) {
            yield put({
                type: actionTypes.ADD_ITEM_SUCCESS,
            });
            yield put({
                type: actionTypes.LOAD_ITEM_REQUEST,
            });
        }

    } catch (err) {
        console.log(err);

        yield put({
            type: actionTypes.ADD_ITEM_FAILED,
        });
    }
}

export function* addItemFlow() {
    while (true) {
        let request = yield take(actionTypes.ADD_ITEM_REQUEST);

        if (!request.code) {
            yield call(addItem, request.text, request.checked, request.color);
        } else {
            yield call(addItemDept1, request.code, request.text, request.checked, request.color);
        }

    }
}

function* removeItem(key) {
    try {
        yield call(delay, 100);

        const res = yield deleteItem(key)
            .then((res) => {
                console.log(res);

                return res;
            })
            .catch((err) => {
                throw new Error('toogle Item failed cause : ' + err);

                return false;
            });

        if (res) {
            yield put({
                type: actionTypes.REMOVE_ITEM_SUCCESS,
            });
            yield put({
                type: actionTypes.LOAD_ITEM_REQUEST,
            });
        }

    } catch (err) {
        console.log(err);

        yield put({type: actionTypes.REMOVE_ITEM_FAILED});

        return false;
    }
}

export function* removeItemFlow() {
    while (true) {
        let request = yield take(actionTypes.REMOVE_ITEM_REQUEST);
        yield call(removeItem, request.key);
    }
}

function* toggleItem(key, checked) {
    try {
        yield call(delay, 100);

        const res = yield updateItem(key, checked)
            .then((res) => {
                console.log(res);

                return res;
            })
            .catch((err) => {
                throw new Error('toogle Item failed cause : ' + err);

                return false;
            });

        if (res) {
            yield put({
                type: actionTypes.TOGGLE_ITEM_SUCCESS,
            });
            yield put({
                type: actionTypes.LOAD_ITEM_REQUEST,
            });
        }

    } catch (err) {
        console.log(err);

        yield put({type: actionTypes.TOGGLE_ITEM_FAILED});

        return false;
    }
}

export function* toggleItemFlow() {
    while (true) {
        let request = yield take(actionTypes.TOGGLE_ITEM_REQUEST);
        yield call(toggleItem, request.key, request.checked);
    }
}