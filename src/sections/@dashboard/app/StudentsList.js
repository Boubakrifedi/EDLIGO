import {Card, Table, Stack, TableRow, TableBody, TableCell, Typography, TableContainer,} from '@mui/material';

import { TableListHead} from '../../../components/TableListHead';
import { TableData,TableHead } from "../../../_mock/TableData"

export default function StudentsList({theme}) {
  const filteredUsers = TableData
  return (
        <Card style={{backgroundColor : theme.projectCard}} >
            <TableContainer sx={{ maxWidth: 800 }}>
              <Table>
              <TableListHead theme={theme} headLabel={TableHead }/>
                <TableBody >
                  {filteredUsers.map((row) => {
                    const {color,  name, status, departement, phonenumber, icon } = row;

                    return (
                      <TableRow key={row.name}>
                        <TableCell component="th" scope="row" padding="none">
                          <Stack direction="row" alignItems="center"  justifyContent="center" spacing={2}>
                            <Typography  wrap="true">
                            <span style={{color : theme.text}}>{name}</span>
                            </Typography>
                          </Stack>
                        </TableCell>
                        <TableCell align="center" ><span style={{color : theme.text}}>{departement}</span></TableCell>
                        <TableCell align="center" ><span style={{color : theme.text}}>{phonenumber}</span></TableCell>
                        <TableCell align="center">
                          <span style={{color:color }}>{status}</span>
                        </TableCell>
                        <TableCell align="center"><span style={{color : theme.text}}>{icon}</span></TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
        </Card>
  );
}
