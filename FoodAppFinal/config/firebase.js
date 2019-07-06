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

function Register() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    console.log('you are right====>',name,email);
    let country = document.getElementById("country").value;
    let city = document.getElementById("city").value;
    let password = document.getElementById("password").value;
    let img = document.querySelector('#img').files[0];

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            var userObj = {
                name,
                password,
                email,
                country,
                city,
                createTime: firebase.database.ServerValue.TIMESTAMP
            }
            let userId = firebase.auth().currentUser.uid;
            let storageRef = firebase.storage().ref().child(`Userimages/${img.name}`)
            storageRef.put(img)
                .then((snapshot) => {
                    snapshot.ref.getDownloadURL().then((sanpUrl) => {
                        userObj.img = sanpUrl
                        console.log(userObj)
                        firebase.database().ref('Users/' + userId).set(userObj)
                            .then((success) => {
                                console.log('User created' )   
                               // For custom
                            })
                            .catch((error) => {
                                console.log(error.message);
                            })
                    })
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log( errorMessage ,"Errorcode",errorCode );
                });
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage,errorCode);
        });
}



export {
    getRealtimeTodo,Register
}
































