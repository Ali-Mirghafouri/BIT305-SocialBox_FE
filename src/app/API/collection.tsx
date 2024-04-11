import { getAuth } from "firebase/auth";
import { database } from "../../../firebaseConfig";
import { ref, set, get, child } from "firebase/database";

interface setCollection {
  collectionName: string;
  creator: string;
  creatorEmail: string;
  NFTs: {
    transaction: string;
    img_url: string;
    name: string;
  }[];
}

interface collectionProps {
  NFTs: {
    img_url: string;
    name: string;
    transaction: string;
  }[];
  collectionName: string;
  creator: string;
  creatorEmail: string;
}

export const setCollection = async (props: setCollection) => {
  const dbRef = ref(database);

  let allcol: any;
  await getCollections().then((data) => {
    allcol = data;
  });

  let filteredNFTs = props.NFTs.filter((x) => x.hasOwnProperty("name"));
  props.NFTs = filteredNFTs;

  if (allcol && allcol !== "") {
    console.log("ye");
    allcol.push(props);
  } else {
    console.log("na");
    allcol = [];
    allcol.push(props);
  }

  await set(ref(database, "collections/"), allcol);

  console.log(allcol);
};

export const getCollections = async () => {
  console.log("here");
  const dbRef = ref(database);
  let collections: collectionProps[] = [
    {
      collectionName: "",
      creator: "",
      creatorEmail: "",
      NFTs: [
        {
          img_url: "",
          name: "",
          transaction: "",
        },
      ],
    },
  ];
  await get(child(dbRef, "collections"))
    .then((snapshot) => {
      console.log(snapshot.val());
      collections = snapshot.val();
    })
    .catch((error) => {
      console.error(error);
    });

  return collections;
};
