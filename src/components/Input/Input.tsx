import './Input.scss';

import TextField from '@mui/material/TextField';
import {useCallback, useState} from 'react';

const Input = (props: InputProps): JSX.Element => {
  const [inputValue, setInputValue] = useState('');

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
      value={inputValue}
      onChange={e => {
        setInputValue(e.target.value);
        props.onChange(e.target.value);
      }}
    />
  );
};

export default Input;
