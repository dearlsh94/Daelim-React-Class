
import {put, call, take} from 'redux-saga/effects'
import { getSectionsDB } from '../shared/Firebase'
import {actionTypes, delay} from '../actions'

function* loadSection() {
    try {
        yield call(delay, 100);
        let sections = yield call(getSectionsDB);
        yield put({
            type: actionTypes.LOAD_SECTIONS_SUCCESS,
            sections: sections.val()
        });
        return sections.val();
    } catch (err) {
        yield put({type: actionTypes.LOAD_SECTIONS_FAILED});

        return false;
    }
}

export function* loadSectionFlow() {
    while (true) {
        yield take(actionTypes.LOAD_SECTIONS_REQUEST);
        yield call(loadSection);
    }
}
