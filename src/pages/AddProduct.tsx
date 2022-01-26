import { useState } from "react";
import { db } from "../fire/config";
import { collection, addDoc } from "firebase/firestore";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { NameTextField } from "../components/NameTextField";
import { BrandAutocomplete } from "../components/BrandAutocomplete";
import { HinbanTextField } from "../components/HinbanTextField";
import { NendoAutocomplete } from "../components/NendoAutocomplete";
import { SeasonRadioGroup } from "../components/SeasonRadioGroup";
export const AddProduct = () => {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [hinban, setHinban] = useState("");
  const [nendo, setNendo] = useState(0);
  const [season, setSeason] = useState("SS");
  const onClickAdd = async () => {
    try {
      const docRef = await addDoc(collection(db, "products"), {
        name: name,
        hinban: hinban,
        brand: brand,
        nendo: nendo,
        season: season
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <div>
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        <BrandAutocomplete setBrand={setBrand} />
        <NameTextField setName={setName} />
        <HinbanTextField setHinban={setHinban} />
        <NendoAutocomplete setNendo={setNendo} />
        <SeasonRadioGroup setSeason={setSeason} />
      </Box>
      <Button sx={{ width: "100%" }} variant="outlined" onClick={onClickAdd}>
        追加
      </Button>
    </div>
  );
};
