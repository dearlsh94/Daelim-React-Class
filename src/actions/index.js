export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const actionTypes = {

    // Counter 관리 요청
    INCREMENT_REQUEST: 'INCREMENT_REQUEST',
    DECREMENT_REQUEST: 'DECREMENT_REQUEST',
    SET_DIFF_REQUEST: 'SET_DIFF_REQUEST',

    // Counter 관리 성공
    INCREMENT_SUCCESS: 'INCREMENT_SUCCESS',
    DECREMENT_SUCCESS: 'DECREMENT_SUCCESS',
    SET_DIFF_SUCCESS: 'SET_DIFF_SUCCESS',

    // Counter 관리 실패
    INCREMENT_FAILED: 'INCREMENT_FAILED',
    DECREMENT_FAILED: 'DECREMENT_FAILED',
    SET_DIFF_FAILED: 'SET_DIFF_FAILED',

    // Item 관리 요청
    ADD_ITEM_REQUEST: 'ADD_ITEM_REQUEST',
    REMOVE_ITEM_REQUEST: 'REMOVE_ITEM_REQUEST',
    TOGGLE_ITEM_REQUEST: 'TOGGLE_ITEM_REQUEST',
    CHANGE_TODOINPUT_COLOR_REQUEST: 'CHANGE_TODOINPUT_COLOR_REQUEST',

    // Item 관리 성공
    ADD_ITEM_SUCCESS: 'ADD_ITEM_SUCCESS',
    REMOVE_ITEM_SUCCESS: 'REMOVE_ITEM_SUCCESS',
    TOGGLE_ITEM_SUCCESS: 'TOGGLE_ITEM_SUCCESS',
    CHANGE_TODOINPUT_COLOR_SUCCESS: 'CHANGE_TODOINPUT_COLOR_SUCCESS',

    // Item 관리 실패
    ADD_ITEM_FAILED: 'ADD_ITEM_FAILED',
    REMOVE_ITEM_FAILED: 'REMOVE_ITEM_FAILED',
    TOGGLE_ITEM_FAILED: 'TOGGLE_ITEM_FAILED',
    CHANGE_TODOINPUT_COLOR_FAILED: 'CHANGE_TODOINPUT_COLOR_FAILED',

    // DB 섹션 관리 요청
    LOAD_SECTIONS_REQUEST: 'LOAD_SECTIONS_REQUEST',
    ADD_SECTION_REQUEST: 'ADD_SECTION_REQUEST',
    DEL_SECTION_REQUEST: 'DEL_SECTION_REQUEST',

    // DB 섹션 관리 성공
    LOAD_SECTIONS_SUCCESS: 'LOAD_SECTIONS_SUCCESS',
    ADD_SECTION_SUCCESS: 'ADD_SECTION_SUCCESS',
    DEL_SECTION_SUCCESS: 'DEL_SECTION_SUCCESS',

    // DB 섹션 관리 실패
    LOAD_SECTIONS_FAILED: 'LOAD_SECTIONS_FAILED',
    ADD_SECTION_FAILED: 'ADD_SECTION_FAILED',
    DEL_SECTION_FAILED: 'DEL_SECTION_FAILED',

    // 공통
    ERROR: 'ERROR',
};

// counter 관리 함수
export function increment(number) {
    return {
        type: actionTypes.INCREMENT_REQUEST,
        number
    };
}

export function decrement(number) {
    return {
        type: actionTypes.DECREMENT_REQUEST,
        number
    };
}

export function setDiff(value) {
    return {
        type: actionTypes.SET_DIFF_REQUEST,
        diff: value
    };
}

// Item 관리 함수
export function addItem(text, checked, color) {
    return {
        type: actionTypes.ADD_ITEM_REQUEST,
        text,
        checked,
        color
    }
}

// Item 관리 함수
export function addItemDept1(code, text, checked, color) {
    return {
        type: actionTypes.ADD_ITEM_REQUEST,
        code,
        text,
        checked,
        color
    }
}

export function removeItem(key) {
    return {
        type: actionTypes.REMOVE_ITEM_REQUEST,
        key
    }
}

export function toggleItem(key, checked) {
    return {
        type: actionTypes.TOGGLE_ITEM_REQUEST,
        key,
        checked
    }
}

export function changeColText(color) {
    return {
        type: actionTypes.CHANGE_TODOINPUT_COLOR_REQUEST,
        color
    }
}

// DB 섹션 관리 함수
export function loadSection() {
    return {
        type: actionTypes.LOAD_SECTIONS_REQUEST
    }
}

// 공통 관리 함수




