import { useState } from "react";
import { db } from "../fire/config";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import Button from "@mui/material/Button";
import { SeasonRadioGroup } from "../components/SeasonRadioGroup";
export const AddProduct = () => {
  const [season, setSeason] = useState("SS");
  const onClickAdd = async () => {
    try {
      const docRef = await addDoc(collection(db, "products"), {
        name: "スニーカー",
        hinban: "14112",
        brand: "K12",
        nendo: 9999,
        season: "ALL"
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <div>
      <SeasonRadioGroup setSeason={setSeason} />
      <p>{season}</p>
      <Button onClick={onClickAdd}>追加</Button>
    </div>
  );
};
