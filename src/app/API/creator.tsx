import { database } from "../../../firebaseConfig";
import { ref, update, child, push } from "firebase/database";

interface uploadAssetProps {
  name: string;
  type: string;
  description: string;
  url: string;
}

export const uploadAsset = ({
  name,
  type,
  description,
  url,
}: uploadAssetProps) => {
  // upload assets to backend
  const currentUser = JSON.parse(localStorage.getItem("currentUser")!);
//   const newPostKey = push(child(ref(database), "users")).key;
  const updates: any = {};
  updates["users/" + currentUser.ID + "/assets"] = {
    name: name,
    type: type,
    description: description,
    url: "",
  };


  update(ref(database), updates);
};
