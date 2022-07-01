import {TableRow, TableCell, TableHead } from '@mui/material';

export function TableListHead({headLabel , theme}) {

  return (

    <TableHead>
      <TableRow>
        {headLabel.map((headCell) => (
          <TableCell key={headCell.id} style={{textAlign:"center" ,fontFamily:"Arial Black"}}>
            <span style={{color : theme.text}}>  {headCell.label}</span>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
