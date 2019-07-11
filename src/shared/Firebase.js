import * as firebase from 'firebase'
import sectionModel from '../models/section'

const projectId = "daelim-react";
let config = {
    apiKey: "AAAAToJ7JLI:APA91bH_WPavxJD4KQskKHX-AkuiAvrtFZfPCKsn4c0K0GEVQhFMLxfoJUbuir-qlK4hbXDcJh5IR0Ax7bltc0cUzmEO0UIgBp2DKAk0WzOIL1PyBYDGBXKnPpAgA0-g63gh9n7XSg0Y",
    authDomain: `${projectId}.firebaseapp.com`,
    databaseURL: `https://${projectId}.firebaseio.com`,
    projectId: `${projectId}`,
    storageBucket: `${projectId}.appspot.com`,
    messagingSenderId: "337196557490"
};
let database;

// create object for firebase handling
export const initFirebase = () => {
    if (!firebase.apps.length) { //check already firebase run
        firebase.initializeApp(config);
    }
    database = firebase.database();
};

// retrieve from firebase
// return promise object
export const selectItem = () => {

    return database.ref('/').once('value');
};

// add new section
export const insertItem = (text, checked, color) => {
    const url = '/';
    let key = database.ref(url).push().key;
    let model = sectionModel(key, text, checked, color);

    return database.ref(url + key).set(model);
};

// add new section in dept 1 code
export const insertItemDept1 = (code, text, checked, color) => {
    const url = '/' + code + '/';
    let key = database.ref(url).push().key;
    let model = sectionModel(key, text, checked, color);

    return database.ref(url + key).set(model);
};

export const deleteItem = (key) => {
    return database.ref('/' + key).remove()
};

export const updateItem = (key, checked) => {
    return database.ref('/' + key).update({
        checked: !checked
    })
};
