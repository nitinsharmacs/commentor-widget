import './Input.scss';

import TextField from '@mui/material/TextField';
import {forwardRef, useImperativeHandle, useState} from 'react';

const Input = forwardRef<CanClearInput, InputProps>(
  (props: InputProps, ref): JSX.Element => {
    const [inputValue, setInputValue] = useState('');

    useImperativeHandle(ref, () => ({
      clear() {
        setInputValue('');
      },
    }));

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
  }
);

export default Input;
