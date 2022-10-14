import * as ActionType from "../ActionType"
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

export const getPhoto = () => async (dispatch) => {
    try {
        let data = [];

        await firestore()
            .collection('Profile')
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    data.push({ id: documentSnapshot.id, ...documentSnapshot.data() })
                });
            });
        dispatch({ type: ActionType.GET_PHOTO, payload: data })
    }
    catch (e) {
        console.log(e);
    }
}

export const addPhoto = (data) => async (dispatch) => {
    console.log("phote addeddd", data);
    try {
        let ranNum = Math.floor(Math.random() * 1000).toString();

        const reference = storage().ref('/Profile/' + ranNum);

        await reference.putFile(data.pro_image);

        const url = await storage().ref('/Profile/' + ranNum).getDownloadURL();

        console.log(url);

        await firestore()
            .collection('Profile')
            .add({ name: data.name, email:data.email, fileName: ranNum, pro_img: url })
            .then((user) => {
                dispatch({ type: ActionType.ADD_PHOTO, payload: { id: user.id, name: data.name, email:data.email,fileName: ranNum, pro_img: url } })
            })
            .catch((error) => console.log(error));
    } catch (e) {
        console.log(e);
    }

}

// export const updatePhoto = (data) => async (dispatch) => {
//     console.log("updatedataaaaa", data);

//     let ranNum = Math.floor(Math.random() * 1000).toString();

//     const newReference = storage().ref('/Profile/' + ranNum);

//     try {
//         if (!data.pro_image.search(/^http[s]?:\/\//)) {
//             await firestore()
//                 .collection('Profile')
//                 .doc(data.id)
//                 .update({
//                     name: data.name,
//                     email:data.email
//                 })
//                 .then(() => {
//                     dispatch({ type: ActionType.UPDATE_PHOTO, payload: data })
//                 });
//         } else {

//             const delReference = storage().ref('/Profile/' + data.fileName);

//             delReference
//                 .delete()
//                 .then(async () => {
//                     await newReference.putFile(data.pro_image);

//                     const url = await storage().ref('/Profile/' + ranNum).getDownloadURL();

//                     console.log(url);

//                     await firestore()
//                         .collection('Profile')
//                         .doc(data.id)
//                         .update({
//                             name: data.name,
//                             email:data.email,
//                             fileName: ranNum,
//                             pro_img: url
//                         })
//                         .then(() => {
//                             dispatch({
//                                 type: ActionType.UPDATE_PHOTO,
//                                 payload: {
//                                     id: data.id,
//                                     name: data.name,
//                                     email:data.email,
//                                     fileName: ranNum,
//                                     pro_img: url
//                                 }
//                             })
//                         });
//                 })
//         }
//     } catch (e) {
//         console.log(e);
    // }

// }
