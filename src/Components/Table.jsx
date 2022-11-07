import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#1976d2",
    color: theme.palette.common.white,
    minWidth: "130px"
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





export default function CustomizedTables() {
  const [rows,setrows] = React.useState([
 
  ]);

    const getorder = (userid)=>{
        axios.post('/api/orders/getallorderbyuser', {
            userid: userid,
           })
           .then(function (response) {
            setrows(response.data)
             
           })
           .catch(function (error) {
             console.log(error);
           })
    }

    React.useEffect(() => {
        const data = JSON.parse(localStorage.getItem('userdata'));
        getorder(data.details._id);
    },[]);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Index</StyledTableCell>
            <StyledTableCell align="right">Payment Id</StyledTableCell>
            <StyledTableCell align="right">OrderId</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Product Name</StyledTableCell>
            <StyledTableCell align="right">Purches date</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?rows.map((row,key) => (
            <StyledTableRow key={key}>
              <StyledTableCell component="th" scope="row">
                {key}
              </StyledTableCell>
              <StyledTableCell align="right">{row.razorpay_payment_id}</StyledTableCell>
              <StyledTableCell align="right">{row.razorpay_order_id}</StyledTableCell>
              <StyledTableCell align="right">{row.price}</StyledTableCell>
              <StyledTableCell align="right">{row.selectedpackage}</StyledTableCell>
              <StyledTableCell align="right">{row.createdAt}</StyledTableCell>
            </StyledTableRow>
          )):''}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
