import { database, storage } from "../../../firebaseConfig";
import { ref, update, child, get } from "firebase/database";
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
interface uploadAssetProps {
  name: string;
  type: string;
  description: string;
  url: File;
}
const currentUser = JSON.parse(localStorage.getItem("currentUser")!);

export const uploadAsset = async ({
  name,
  type,
  description,
  url,
}: uploadAssetProps) => {
  console.log(url);

  let assets: any = getAssets();
  console.log(assets);

  const urlRef = storageRef(storage, url.name);
  await uploadBytes(urlRef, url)
    .then((snapshot) => {
      console.log("Uploaded a blob or file!");
      console.log(snapshot);
    })
    .catch((err) => {
      console.log(err);
    });

  let firebaseURL: any = await getDownloadURL(storageRef(storage, url.name));

  if (!assets) {
    assets = [];
  } else {
    await assets.then((res: any) =>
      res === "" ? (assets = []) : (assets = res)
    );
  }

  assets.push({
    name: name,
    type: type,
    description: description,
    url: firebaseURL,
  });
  console.log(assets);

  // upload assets to backend
  const updates: any = {};
  updates["users/" + currentUser.ID + "/assets"] = assets;

  update(ref(database), updates);
};

export const getAssets = async () => {
  const dbRef = ref(database);
  let tempVal;

  await get(child(dbRef, "users/" + currentUser.ID + "/assets"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        // console.log(snapshot.val());
        tempVal = snapshot.val();
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });

  return tempVal;
};

export const removeAsset = async (assetID: number) => {
  let assets: any = await getAssets();
  console.log(assets);
  assets.splice(assetID, 1);
  console.log(assets);

  const updates: any = {};
  updates["users/" + currentUser.ID + "/assets"] = assets ? assets : "";

  update(ref(database), updates);
};
