// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword  } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjzo1G0XOV8_2GfckMDudMkh0PnAjqoDQ",
  authDomain: "socialbox-50510.firebaseapp.com",
  databaseURL:
    "https://socialbox-50510-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "socialbox-50510",
  storageBucket: "socialbox-50510.appspot.com",
  messagingSenderId: "672604612765",
  appId: "1:672604612765:web:31dd8abc27ec9fa67f4c74",
  measurementId: "G-208R9444L5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const database = getDatabase(app);
export { database };

// real time database
// export const signUp = (userId, email, name, password, type, wallet) => {
//   set(ref(database, "users/" + userId), {
//     username: name,
//     email: email,
//     password: password,
//     type: type,
//     wallet: wallet,
//   });
//   console.log("done");
//   return true;
// };

export const auth = getAuth();
// export const testSignIn = async () => {
//   console.log("here");
//   await createUserWithEmailAndPassword (auth, "ali@gmail.com", "123123")
//     .then((userCredential) => {
//       // Signed in
//       const user = userCredential.user;
//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//     });
// };
