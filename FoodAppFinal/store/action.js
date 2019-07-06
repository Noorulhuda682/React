import firebase from '../config/firebase';
const db = firebase.firestore();

const update_user = (user) => {
    return {
        type: "SET_USER",
        data: user
    }
}

const remove_user = () => {
    return {
        type: "REMOVE_USER"
    }
}

// const update_todos = () => {
//     return (dispatch) => {
//         db.collection('text').onSnapshot(snapshot => {
//             const temp = [];
    
//             snapshot.forEach(doc => {
//                 const obj = {id: doc.id, ...doc.data()}
//                 temp.push(obj);
//             })
//             console.log('getRealtimeTodo ===>', temp);
//             dispatch({
//                 type: 'UPDATE_TODOS',
//                 payload: temp
//             })
//         })
//     }
// }

const update_todos = () => {
    return (dispatch) => {
       firebase.database().ref('FOOD/').once('value', (data) => {
                 const  pureData  = data.val();
                  console.log('data====>',pureData);
                   const temp = []
            for(var key in pureData){
                console.log(key);
                temp.push(pureData[key])
            }    
            dispatch({
                type: 'UPDATE_TODOS',
                payload: temp
            })
        })
    }
}



export {
    update_user,
    remove_user,
    update_todos
}