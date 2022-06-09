import { useState } from "react";
import Header from "./Header";
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

function TrackOrders() {
    const username = localStorage.getItem('username');
    const steps = [
        'Order Placed',
        'Order ready to dispatch',
        'Towards the destiny',
        'Delivered'
    ];
    return <div>
        <Header username={username} />
        <div style={{ display: "flex" }}>
            <img height="550px" src="/images/map.png" />
            <div style={{ margin: "5%", border: "3px solid", height: "50%", width: "40%" }}>
                <div style={{ marginBottom: "2%", marginLeft: "1%", fontSize: "16px", fontWeight: 'bold' }}>Order Details</div>

                <div style={{ marginLeft: "1%" }}>Order Status : <span style={{ fontWeight: 'bold', color: "red" }}>In Progress</span></div>
                <div style={{ marginLeft: "1%" }}>Estimated Delivery : <span style={{ fontWeight: 'bold' }}>Today</span></div>
                <div style={{ marginLeft: "1%" }}>Order Number : <span style={{ fontWeight: 'bold' }}>765433333</span></div>

                <div style={{ marginTop: "10%" }}><Box sx={{ width: '100%' }}>
                    <div style={{ marginBottom: "2%", marginLeft: "1%", fontSize: "16px", fontWeight: 'bold' }}>Tracking</div>
                    <Stepper activeStep={1} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Box></div>
            </div>
        </div>
    </div>
}
export default TrackOrders;