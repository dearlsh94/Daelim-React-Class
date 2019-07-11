
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

        return insertItem(text, checked, color)
            .then((list) => {
                put({
                    type: actionTypes.ADD_ITEM_SUCCESS,
                    items: list
                });
            })
            .then(() => {
                put({
                    type: actionTypes.LOAD_ITEM_SUCCESS,
                });
            })
            .catch((response) => {
                console.log(response);
                put({type: actionTypes.ADD_SECTION_FAILED});
                return false;
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
            .then((list) => {
                put({
                    type: actionTypes.ADD_ITEM_SUCCESS,
                    items: list
                });
            })
            .then(() => {
                put({
                    type: actionTypes.LOAD_ITEM_SUCCESS,
                });
            })
            .catch((response) => {
                console.log(response);
                put({type: actionTypes.ADD_SECTION_FAILED});

                return false;
            });
    } catch (err) {
        console.log(err);

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
            .then((list) => {
                put({
                    type: actionTypes.REMOVE_ITEM_SUCCESS,
                    items: list
                });
            })
            .then(() => {
                put({
                    type: actionTypes.LOAD_ITEM_SUCCESS,
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
            .then((list) => {
                put({
                    type: actionTypes.TOGGLE_ITEM_SUCCESS,
                    items: list
                });
            })
            .then(() => {
                put({
                    type: actionTypes.LOAD_ITEM_SUCCESS,
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