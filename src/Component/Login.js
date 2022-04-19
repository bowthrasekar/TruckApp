import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { loginList } from '../Utils/DataUtils';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


function Login()
{
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")

    const navigate=useNavigate();
    
    function handleChange(e){
        if (e.target.name=="username") {

            setUsername (e.target.value)
        } else {
            setPassword (e.target.value)
        }
       
    }

    function handleClick(){
          
          const userData = loginList.find((user) => user.username === username);
          console.log(userData)
          if(userData && userData.password == password){
              localStorage.setItem('username', username)
              navigate('/Dashboard')
          }
          else{
              alert("invalid")
          }
 
    }

    
    return(
        <div style={{backgroundColor: "white", height: "100vh", display: "flex", width: "100%"}}>
            <div style={{height:"100%"}}><img style={{height:"100%", width: "800px"}} src={"/images/logo.jpg"} /></div>
            <Card style={{width: "550px", backgroundColor: "rgb(3 66 107)"}}>
            <CardMedia
          component="img"
          height="100px"
          width={"200px"}
          image="/images/name.jpg"
          alt="green iguana"
          
        />
                <Card style={{ margin: "10% 1% 1% 12%",backgroundColor: "white", width: "75%", height:"400px"}}><CardContent >
             <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off">
                    
                <TextField style={{marginTop: "20%", marginLeft: "22%"}} id="outlined-basic" label="USER NAME" variant="outlined" 
                value={username} name="username" onChange={(e) => handleChange(e)}/>
            </Box>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off">
                    
                <TextField style={{marginLeft: "22%"}} id="outlined-basic" label="PASSWORD" variant="outlined" 
               type="password" value={password} name="pass" required  onChange={(e)=> handleChange(e)}/>
            </Box>
           
            
            
            <Button style={{ marginLeft:'35%', marginTop: "10%"}}variant="contained" size="large" onClick={handleClick}>
                Login
                </Button>
                </CardContent>
                </Card>
                </Card>
  
            
        </div>
    )
}
export default Login;



