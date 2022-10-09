import auth from '@react-native-firebase/auth';
import * as ActionType from '../ActionType'
import AsyncStorage from "@react-native-async-storage/async-storage"

export const signupUser = (data) => (dispatch) => {
  console.log(data.email, data.password, data.name);
  try {
    auth()
      .createUserWithEmailAndPassword(data.email, data.password, data.name)
      .then(() => {
        auth()
          .onAuthStateChanged((user) => {
            user.sendEmailVerification()
              .then(dispatch({ type: ActionType.EMAIL_VERIFICATION, payload: { user, authMsg: "Please verify your email." } }))
          })
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  } catch (e) {
    console.log(e);
  }
}

export const LoginUser = (data) => (dispatch) => {
  // console.log("aaaa",LoginUser);
  try {
    auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then((user) => {
        if (user.user.emailVerified) {
          console.log("iinnnn" , JSON.stringify(user.user))
          AsyncStorage.setItem("user","Valid")
          dispatch({ type: ActionType.LOGIN_SUCCESS, payload: { user: user.user, authMsg: "Login successfull." } })
        }
      })
      .catch((error) => {
        console.log(error);
      })
  } catch (error) {
    console.log((error));
  }
}

export const LogOut =() => async (dispatch) => {
  console.log("logggggggggggouttttttt");
  try{
    auth()
    .signOut()
    .then(async() => {
      await AsyncStorage.clear();
      dispatch({type:ActionType.LOG_OUT,payload:{aythMsg:"Log out success..."}})
    })
    .catch((error)=>console.log(error))
  }catch(error){
    console.log((error));
  }
}