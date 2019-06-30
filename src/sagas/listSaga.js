
import { put, call, take } from 'redux-saga/effects'
import { actionTypes, delay } from '../actions'
import {getSectionsDB, insertItem, insertItemDept1, deleteItem, updateItem } from "../shared/Firebase";

function* changeInputColor(color) {
    try {
        yield call(delay, 100);
        yield put({
            type: actionTypes.CHANGE_COL_TEXT_SUCCESS,
            data: color
        });

        return true;
    } catch (err) {
        yield put({type: actionTypes.CHANGE_COL_TEXT_FAILED});

        return false;
}
}

export function* changeInputColorFlow() {
    while (true) {
        let request = yield take(actionTypes.CHANGE_COL_TEXT_REQUEST);
        yield call(changeInputColor, request.color);
    }
}

function* addItem(text, checked, color) {
    try {
        yield call(delay, 100);

        return insertItem(text, checked, color)
            .then(() => {
                return call(getSectionsDB);
            })
            .then((list) => {
                put({
                    type: actionTypes.ADD_ITEM_SUCCESS,
                    data: list
                });
            })
            .catch((response) => {
                console.log(response);
            });
    } catch (err) {
        console.log(err);
        yield put({type: actionTypes.ADD_SECTION_FAILED});

        return false;
    }
}

function* addItemDept1(code, text, checked, color) {
    try {
        yield call(delay, 100);

        return insertItemDept1(code, text, checked, color)
            .then(() => {
                return call(getSectionsDB);
            })
            .then((list) => {
                put({
                    type: actionTypes.ADD_ITEM_SUCCESS,
                    data: list
                });
            })
            .catch((response) => {
                console.log(response);
            });
    } catch (err) {
        console.log(err);
        yield put({type: actionTypes.ADD_SECTION_FAILED});

        return false;
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

        return deleteItem(key)
            .then(() => {
                return call(getSectionsDB);
            })
            .then((list) => {
                put({
                    type: actionTypes.REMOVE_ITEM_SUCCESS,
                    data: list
                });
            })
            .catch((response) => {
                console.log(response);
            });
    } catch (err) {
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

        return updateItem(key, checked)
            .then(() => {
                return call(getSectionsDB);
            })
            .then((list) => {
                put({
                    type: actionTypes.TOGGLE_ITEM_SUCCESS,
                    data: list
                });
            })
            .catch((response) => {
                console.log(response);
            });
    } catch (err) {
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