import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Orders() {
    const navigate = useNavigate();

    const username = localStorage.getItem('username');
    const [orderMenu, setOrderMenu] = useState({ "history": false, "pending": true, "cancelled": false })
    const orderFields = {
        orderDate: "Order Date",
        invoiceNumber: "Invoice Number",
        status: "Status",
        fromLocation: "Pick-up Location",
        toLocation: "Drop Location",
        view: "view"
    }

    const orderList = [{
        orderDate: "22-04-2022",
        invoiceNumber: "2451558885",
        status: "pending",
        fromLocation: "Salem",
        toLocation: "Tirupur",
    },
    {
        orderDate: "22-04-2022",
        invoiceNumber: "2451558885",
        status: "pending",
        fromLocation: "Salem",
        toLocation: "Tirupur",
    },
    {
        orderDate: "22-04-2022",
        invoiceNumber: "2451558885",
        status: "pending",
        fromLocation: "Salem",
        toLocation: "Tirupur",
    },
    {
        orderDate: "22-04-2022",
        invoiceNumber: "2451558885",
        status: "pending",
        fromLocation: "Salem",
        toLocation: "Tirupur",
    },
    {
        orderDate: "22-04-2022",
        invoiceNumber: "2451558885",
        status: "pending",
        fromLocation: "Salem",
        toLocation: "Tirupur",
    },
    {
        orderDate: "22-04-2022",
        invoiceNumber: "2451558885",
        status: "pending",
        fromLocation: "Salem",
        toLocation: "Tirupur",
    }]
    const handleView = (e) => {

    }
    const handlemenu = (e) => {
        let data = { "history": false, "pending": false, "cancelled": false }
        data[e] = true
        setOrderMenu(data)
    }
    return (
        <div>
            <Header username={username} />
            <div style={{ display: 'flex' }}>
                <div style={{ width: "20%", marginTop: "3%" }}>
                    <div style={{ marginLeft: "5%", marginTop: "4%" }}>
                        <Fab onClick={() => handlemenu("pending")} variant="extended" color="black" style={{ width: "100%", fontWeight: "bold", backgroundColor: "#f4c11cd4" }} aria-label="add">
                            Pending Orders
                            {orderMenu["pending"] ? <ArrowForwardIosIcon /> : null}
                        </Fab>
                    </div>
                    <div style={{ marginLeft: "5%", marginTop: "4%" }}>
                        <Fab onClick={() => handlemenu("history")} variant="extended" color="black" style={{ width: "100%", fontWeight: "bold", backgroundColor: "#f4c11cd4" }} aria-label="add">
                            Order History
                            {orderMenu["history"] ? <ArrowForwardIosIcon /> : null}
                        </Fab>
                    </div>
                    <div style={{ marginLeft: "5%", marginTop: "4%" }}>
                        <Fab onClick={() => handlemenu("cancelled")} variant="extended" color="black" style={{ width: "100%", fontWeight: "bold", backgroundColor: "#f4c11cd4" }} aria-label="add">
                            Cancelled Orders
                            {orderMenu["cancelled"] ? <ArrowForwardIosIcon /> : null}
                        </Fab>

                    </div>
                </div>
                <div style={{ width: "60%", marginTop: "3%", marginLeft: "3%" }}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: "100%" }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell colSpan={6}><span style={{ fontWeight: "bold", color: "#03426b", fontSize: "22px" }}>{orderMenu.pending ? "PENDING ORDERS" : orderMenu.history ? "ORDER HISTORY" : "CANCELLED ORDERS"}</span></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {orderList.map(item => {
                                    return <TableRow
                                        key={"name"}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        {Object.keys(orderFields).map(j => {
                                            return <TableCell width={"40%"}>
                                                {j == "view" ?
                                                    <Button variant="outlined" size="small" onClick={handleView}>VIEW
                                                    </Button>
                                                    :
                                                    <span>
                                                        {item[j]}
                                                    </span>}

                                            </TableCell>
                                        })}
                                    </TableRow>
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div>
    )

}
export default Orders;

