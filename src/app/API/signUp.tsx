import { getAuth } from "firebase/auth";
import { database } from "../../../firebaseConfig";
import { ref, set, get, child } from "firebase/database";

export const signUp = async (
  email: string,
  name: string,
  password: string,
  type: string,
  wallet: string
) => {
  const dbRef = ref(database);
  const auth = getAuth();
  let tempValue: any[] = [];
  await get(child(dbRef, "users"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        tempValue = [...snapshot.val()];
        console.log(snapshot.val());
        console.log(tempValue);
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });

  let newEmail = email;
  let result = tempValue.find(({ email }) => email === newEmail);
  console.log(result);
  if (!result) {
    tempValue.push({
      username: name,
      email: email,
      password: password,
      type: type,
      wallet: wallet,
      profilePic: "",
    });
    console.log(tempValue);
    set(ref(database, "users/"), tempValue);
    console.log("user sign up success");
    return true;
  } else {
    console.log("duplicate email");
    return false;
  }
};

export const checkEmail = async (email: string) => {
  const dbRef = ref(database);
  let tempValue: any[] = [];
  await get(child(dbRef, "users"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        tempValue = [...snapshot.val()];
        console.log(snapshot.val());
        console.log(tempValue);
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });

  let newEmail = email;
  let result = tempValue.find(({ email }) => email === newEmail);
  console.log(result);

  if (result) {
    return true;
  } else {
    return false;
  }
};
