import { VFC } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export const SeasonRadioGroup = (props: any) => {
  const setSeason = props.setSeason;
  const onChangeRadio = (event: any): void => {
    setSeason(event.target.value);
  };
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">シーズン</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="SS"
        name="radio-buttons-group"
        onChange={onChangeRadio}
      >
        <FormControlLabel value="SS" control={<Radio />} label="SS" />
        <FormControlLabel value="AW" control={<Radio />} label="AW" />
      </RadioGroup>
    </FormControl>
  );
};
