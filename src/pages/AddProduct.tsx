import { useState } from "react";
import { SeasonRadioGroup } from "../components/SeasonRadioGroup";
export const AddProduct = () => {
  const [season, setSeason] = useState("SS");
  return (
    <div>
      <SeasonRadioGroup setSeason={setSeason} />
      <p>{season}</p>
    </div>
  );
};
