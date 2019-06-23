import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDuWesUTlmRqwbLr3chW_Neht2lL-1xymQ",
    authDomain: "reacttodo-fdded.firebaseapp.com",
    databaseURL: "https://reacttodo-fdded.firebaseio.com",
    projectId: "reacttodo-fdded",
    storageBucket: "reacttodo-fdded.appspot.com",
    messagingSenderId: "53301398122",
    appId: "1:53301398122:web:520fbb1a58ddd111"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

function getRealtimeTodo() {
    return new Promise((resolve, reject) => {
        // db.collection('todo').get().then(snapshot => {
        db.collection('text').onSnapshot(snapshot => {
            const temp = [];

            snapshot.forEach(doc => {
                const obj = {id: doc.id, ...doc.data()}
                temp.push(obj);
            })
            console.log('getRealtimeTodo ===>', temp);
            resolve(temp);
        })
    })
}

export default firebase;
export {
    getRealtimeTodo
}