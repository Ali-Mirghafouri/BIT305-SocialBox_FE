import { database } from "../../../firebaseConfig";
import { ref, get, child } from "firebase/database";

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
    return result;
  } else {
    return false;
  }
};


