import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { makeStyles } from "@material-ui/core";

export default function BasicDatePicker(props) {
  const [value, setValue] = React.useState(null);

  const useStyles = makeStyles(() => ({
    textField: {
      margin: "0 0 20px 0",
        },
        
  }));

  const classes = useStyles();

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="mm / dd / yyyy"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params}     className={classes.textField}  />}/>
        
    </LocalizationProvider>
  );
}
