import { database } from "../../../firebaseConfig";
import { ref, get, set, child } from "firebase/database";

interface setCurrentUser {
  email: string;
  username: string;
  password: string;
  type: string;
  wallet: string;
}

export const setCurrentUser = async (props: setCurrentUser) => {
  set(ref(database, "currentUser"), {
    username: props.username,
    email: props.email,
    password: props.password,
    type: props.type,
    wallet: props.wallet,
  }).catch((error) => {
    console.error(error);
    return false;
  });
  console.log("current user set");

  return true;
};
export const getCurrentUser = async () => {
  const dbRef = ref(database);
  let val;
  await get(child(dbRef, "currentUser"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        val = snapshot.val();
      } else {
        console.log("No data available");
        // return undefined;
      }
    })
    .catch((error) => {
      console.error(error);
    });

  return val;
};
