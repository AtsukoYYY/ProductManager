import TextField from "@mui/material/TextField";

export const HinbanTextField = (props: any) => {
  const setHinban = props.setHinban;
  const onChangeText = (event: any): void => {
    setHinban(event.target.value);
  };
  return (
    <TextField
      id="standard-basic"
      label="品番"
      variant="standard"
      onChange={onChangeText}
    />
  );
};
