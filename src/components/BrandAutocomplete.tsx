import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export const BrandAutocomplete = (props: any) => {
  const setBrand = props.setBrand;
  const onChangeAutocomplete = (event: any, values: any): void => {
    setBrand(values);
  };
  const brandList = ["A13", "V33"];
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={brandList}
      sx={{ width: 300 }}
      onChange={onChangeAutocomplete}
      renderInput={(params) => <TextField {...params} label="ブランド" />}
    />
  );
};
