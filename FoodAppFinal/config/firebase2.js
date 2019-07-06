import * as firebase from 'firebase';
import 'firebase/firestore';

function RestaurentRegister() {
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
                        firebase.database().ref('Restaurents/' + userId).set(userObj)
                            .then((success) => {
                                console.log('Restaurent Registered' )   
// For custom

                            })
                            .catch((error) => {

                                console.log(
                                     error.message
                                );
                            })
                    })

                })
                .catch((error) => {

                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(
                          errorMessage ,"Errorcode",errorCode
                    );
                });

        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(
                errorMessage,errorCode
            );
        });
}


// =======================  ADD FOOD PRODUCT  FIREBASE CODE IN RESTAURENT.JS PAGE ========================
function AddFood(user) {
    console.log('firebase func====>',user.uid);
    let useruid = user.uid
    let name = document.getElementById("name").value;
    let category = document.getElementById("category").value;
    let price = document.getElementById("price").value;
    let discription = document.getElementById("discription").value;
    let img = document.querySelector('#img').files[0];
            var userObj = {
                name,
                category,
                useruid,
                price,
                discription,
                createTime: firebase.database.ServerValue.TIMESTAMP
            }
            let userId = firebase.auth().currentUser.uid;
            let storageRef = firebase.storage().ref().child(`Userimages/${img.name}`)
            storageRef.put(img)
                .then((snapshot) => {
                    snapshot.ref.getDownloadURL().then((sanpUrl) => {
                        userObj.img = sanpUrl
                        console.log(userObj)
                        firebase.database().ref('FOOD/' + useruid).child(name).set(userObj)
                            .then((success) => {
                                alert('Food uploading is succesfull' )   
                               
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

}




export{
    RestaurentRegister,AddFood
}






























