import React from "react";
//import { useNavigate } from "react-router-dom";
// import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
//import { useNavigate } from "react-router-dom";

function Register()
{
return(
    <div style={{backgroundColor: "white", height: "100vh", display: "flex", width: "100%"}}>
    <div style={{height:"100%"}}><img style={{height:"100%", width: "800px"}} src={"/images/logo.jpg"} /></div>
    <Card style={{width: "550px", backgroundColor: "rgb(3 66 107)"}}>
    <CardMedia
  component="img"
  height="100px"
  width={"200px"}
  alt="green iguana"
  
  />
        <Card style={{ margin: "10% 1% 1% 12%",backgroundColor: "white", width: "75%", height:"400px"}}>
        <CardContent >
     <Box
        component="form"
        sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off">
            
        <TextField style={{marginTop: "20%", marginLeft: "22%"}} id="outlined-basic" label="NAME"
         variant="outlined" />
    
    </Box>
    </CardContent>
                </Card>
                </Card>
                </div>
)
}
export default Register;