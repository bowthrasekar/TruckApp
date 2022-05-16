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
  const orderstype = JSON.parse(localStorage.getItem("goodstype"));

  return (<div><Header />
    <div style={{ margin: '5% 30%' }}>
      <div style={{ border: '3px solid black' }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 200 }} aria-label="spanning table">
            <TableHead>
              <TableRow>
                <TableCell colSpan={2}>
                  <img style={{ height: '68px' }} src={"/images/logo.jpg"} />
                  <img style={{ height: "68px", width: "200px" }} src={"/images/name.jpg"} />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="right">INVOICE NUMBER</TableCell>
                <TableCell align="left" style={{ fontWeight: "bold" }}>2246321321310</TableCell>

              </TableRow>
            </TableHead>


            <TableBody>
              <TableRow>
                <TableCell align="right">PICKUP LOCATION</TableCell>
                <TableCell align="left">{orders.pickupLocation}</TableCell>
              </TableRow>
              <TableRow >
                <TableCell align="right">DROPLOCATION</TableCell>
                <TableCell align="left">{orders.dropLocation}</TableCell>
              </TableRow>
              <TableRow >
                <TableCell align="right">TRUCK TYPE</TableCell>
                <TableCell align="left">{orders.truckType.label}</TableCell>
              </TableRow>
              <TableRow >
                <TableCell align="right">GOODS TYPE</TableCell>
                <TableCell align="left">{orderstype.typesofGoods}</TableCell>
              </TableRow>
              <TableRow >
                <TableCell align="right">WEIGHT</TableCell>
                <TableCell align="left">50 Tons</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="right" style={{ fontWeight: "bold" }}>FARE</TableCell>
                <TableCell align="right" style={{ fontWeight: "bold" }}>Rs. 1200</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="right" style={{ fontWeight: "bold" }}>Tax</TableCell>
                <TableCell align="right" style={{ fontWeight: "bold" }}>Rs. 130</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="right" style={{ fontWeight: "bold" }}>GST</TableCell>
                <TableCell align="right" style={{ fontWeight: "bold" }}>Rs. 50</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="right" style={{ fontWeight: "bold", color: 'green' }}>TOTAL FARE</TableCell>
                <TableCell align="right" style={{ fontWeight: "bold", color: 'green' }}>Rs. 1380</TableCell>
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

