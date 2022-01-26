import TextField from "@mui/material/TextField";

export const NameTextField = (props: any) => {
  const setName = props.setName;
  const onChangeText = (event: any): void => {
    setName(event.target.value);
  };
  return (
    <TextField
      id="standard-basic"
      label="商品名"
      variant="standard"
      onChange={onChangeText}
    />
  );
};
