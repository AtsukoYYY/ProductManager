import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export const NendoAutocomplete = (props: any) => {
  const setNendo = props.setNendo;
  const onChangeAutocomplete = (event: any, values: any): void => {
    setNendo(values);
  };
  const nendoList = [2019, 2020, 2021, 2022, 9999];
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={nendoList}
      sx={{ width: 300 }}
      onChange={onChangeAutocomplete}
      renderInput={(params) => <TextField {...params} label="年度" />}
    />
  );
};
