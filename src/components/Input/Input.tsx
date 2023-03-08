import './Input.scss';

import TextField from '@mui/material/TextField';

const Input = (): JSX.Element => {
  return (
    <TextField
      classes={{root: 'commentor-input'}}
      multiline
      maxRows={20}
      placeholder="What's on your mind?"
      InputProps={{
        disableUnderline: true,
      }}
      variant="standard"
    />
  );
};

export default Input;
