import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Header from "./Header";



function Invoice() {
  
    const orders = JSON.parse(localStorage.getItem("orderDetails"));
    const orderstype= JSON.parse(localStorage.getItem("goodstype"));
   
        return (<div><Header />
        <div style={{margin: '1%'}}>
            <div style={{ border: '3px solid black' }}>
            <TableContainer component={Paper}>
       <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead>
            <TableRow>
        <TableCell align="center" colSpan={5}>
              Details
            </TableCell>
            </TableRow>
          <TableRow>
              
            <TableCell align="center">PICKUP LOCATION</TableCell>
            <TableCell align="center">DROPLOCATION</TableCell>
            <TableCell align="center">TRUCK TYPE</TableCell>
            <TableCell align="center">GOODS TYPE</TableCell>
            <TableCell align="center">WEIGHT</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow >                                       
        <TableCell align="center">{orders.pickupLocation}</TableCell>
        <TableCell align="center">{orders.dropLocation}</TableCell>
        <TableCell align="center">{orders.truckType}</TableCell>
        <TableCell align="center">{orderstype.typesofGoods}</TableCell>
        </TableRow>
        <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={3}>FARE</TableCell>
            <TableCell align="right">12</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Tax</TableCell>
            
            <TableCell colSpan={3} align="right">13</TableCell>
          </TableRow>
          <TableRow>
          <TableCell colSpan={2}>GST</TableCell>
          </TableRow>
                    <TableRow>
            <TableCell colSpan={4}>TOTAL FARE</TableCell>
            <TableCell align="right">26</TableCell>
          </TableRow>
        </TableBody>
        </Table>
        </TableContainer>
        

        


            </div>
        </div>
        </div>
    )

}
export default Invoice;

