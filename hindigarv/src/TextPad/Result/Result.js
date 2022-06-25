import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function Result(props) {

  const columns = [
    { 
      field: 'word', headerName: 'शब्द', flex: 1,
      valueGetter: (params) => {
        let count = params.row.count > 1 ? ` (${params.row.count})` : ""
        return `${params.row.word}${count}`
      }
    },
    { field: 'mool', headerName: 'मूल', flex: 1 },
    { field: 'paryay', headerName: 'पर्याय', flex: 3 },
  ];

  let rows = props.words.map(it => ({...it, id:it.word}) )

  return (
      <div style={{  width: '100%' }}>
        <div style={{ flexGrow: 1 }}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>शब्द</StyledTableCell>
                  <StyledTableCell>मूल</StyledTableCell>
                  <StyledTableCell>पर्याय</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.word}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">{row.word}</TableCell>
                    <TableCell>{row.mool}</TableCell>
                    <TableCell>{row.paryay}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
  );
}

export default Result;
