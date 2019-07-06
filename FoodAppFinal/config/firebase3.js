import * as firebase from 'firebase';
import 'firebase/firestore';

function orderFoods(restUid,foodImg,foodName,userData){
    const foodItemRequested = {
        foodImg,foodName
    }
    const userObj = {
        userRequested :userData,
        foodItemRequested
    }
    firebase.database().ref('REQUESTED/' + restUid).child('Pending/'+userData.uid)
    .child(foodName).set(userObj)
         .then((success) => {
               alert('Your Order has been sent succesfully')                      
          })
         .catch((error) => {
               console.log(error.message);
         })
}

// ============================  PROGRESS FUNCTION =====================================
function progressFunc(restUid,foodName,userId){
    firebase.database().ref('REQUESTED/' + restUid).child('Pending/').once('value', (data) => {
        const  pureData  = data.val();
        const temp = [];
        for(var key in pureData ){
            if(userId === key){
                console.log(userId,pureData[key]);
                for(var key1 in pureData[key]){
                    if(key1 === foodName){
                        console.log(key1,'data====>',pureData[key][key1]);

                        firebase.database().ref('REQUESTED/' + restUid).child('Progress/'+userId)
                        .child(foodName).set(pureData[key][key1])
                        .then((success) => {
                          alert('Request in progress status is succesfull' );                      
                        })
                        .catch((error) => {
                         console.log(error.message);
                        })

                    }
                }
            }

        }
            
        })
}

// ============================  PROGRESS FUNCTION =====================================
function DeliveredFunc(restUid,foodName,userId){
    firebase.database().ref('REQUESTED/' + restUid).child('Progress/').once('value', (data) => {
        const  pureData  = data.val();
        const temp = [];
        for(var key in pureData ){
            if(userId === key){
                console.log(userId,pureData[key]);
                for(var key1 in pureData[key]){
                    if(key1 === foodName){
                        console.log(key1,'data====>',pureData[key][key1]);

                        firebase.database().ref('REQUESTED/' + restUid).child('Delivered/'+userId)
                        .child(foodName).set(pureData[key][key1])
                        .then((success) => {
                          alert('Request in Delievered status is succesfull' );                      
                        })
                        .catch((error) => {
                         console.log(error.message);
                        })

                    }
                }
            }

        }
            
        })
}


export{
    orderFoods,progressFunc,DeliveredFunc
}

