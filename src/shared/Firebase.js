import * as firebase from 'firebase'
import sectionModel from '../models/item'

const projectId = "";
let config = {
    apiKey: "",
    authDomain: `${projectId}.firebaseapp.com`,
    databaseURL: `https://${projectId}.firebaseio.com`,
    projectId: `${projectId}`,
    storageBucket: `${projectId}.appspot.com`,
    messagingSenderId: ""
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

    return new Promise((resolve, reject) => {
        database.ref(url + key)
            .set(model, (err) => {
                if (err) {
                    console.log(err);

                    reject(err);
                }
                else {
                    console.log('data inserted successfully');

                    resolve(true);
                }
            });
    });
};

// add new section in dept 1 code
export const insertItemDept1 = (code, text, checked, color) => {
    const url = '/' + code + '/';
    let key = database.ref(url).push().key;
    let model = sectionModel(key, text, checked, color);

    return new Promise((resolve, reject) => {
       database.ref(url + key)
           .set(model, (err) => {
               if (err) {
                   console.log(err);

                   reject(err);
               }
               else {
                   console.log('data inserted successfully');

                   resolve(true);
               }
           })
    });
};

export const deleteItem = (key) => {
    return new Promise((resolve, reject) => {
        database.ref('/' + key)
            .remove((err) => {
                if (err) {
                    reject(err);
                }
                else {
                    console.log('data deleted successfully');

                    resolve(true);
                }
            })

    });
};

export const updateItem = (key, checked) => {
    return new Promise((resolve, reject) => {
        database.ref('/' + key)
            .update({
                checked: !checked
            }, ((err) => {
                if (err) {
                    console.log(err);

                    reject(err);
                }
                else {
                    console.log('data saved successfully');

                    resolve(true);
                }
            })
        );
    })
}
