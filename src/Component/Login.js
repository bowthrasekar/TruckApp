import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginList } from '../Utils/DataUtils';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}
function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}
const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        position: 'absolute',
        width: 450,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));
function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [registerData, setRegisterData] = useState({
        username: "",
        email: "",
        mobile: "",
        password: ""
    })
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const navigate = useNavigate();

    function handleChange(e) {
        if (e.target.name == "username") {
            setUsername(e.target.value)
        } else if (e.target.name == "password") {
            setPassword(e.target.value)
        }
        else if (e.target.name == "regusername") {
            let data = registerData;
            data["username"] = e.target.value;
            setRegisterData(data)
        }
        else if (e.target.name == "regemail") {
            let data = registerData;
            data["email"] = e.target.value;
            setRegisterData(data)
        }
        else if (e.target.name == "regmobile") {
            let data = registerData;
            data["mobile"] = e.target.value;
            setRegisterData(data)
        }
        else if (e.target.name == "regpassword") {
            let data = registerData;
            data["password"] = e.target.value;
            setRegisterData(data)
        }
        else if (e.target.name == "confirmpassword") {
            setConfirmPassword(e.target.value)
        }
    }

    function handleClick() {
        const userData = loginList.find((user) => user.username === username);
        console.log(userData)
        if (userData && userData.password == password) {
            localStorage.setItem('username', username)
            navigate('/Dashboard')
        }
        else {
            alert("invalid")
        }
    }
    function handleRegister() {
        console.log(registerData)
    }


    return (
        <div style={{ backgroundColor: "white", height: "100vh", display: "flex", width: "100%" }}>
            <div style={{ height: "100%" }}><img style={{ height: "100%", width: "800px" }} src={"/images/logo.jpg"} /></div>
            <Card style={{ width: "550px", backgroundColor: "rgb(3 66 107)" }}>
                <CardMedia
                    component="img"
                    height="100px"
                    width={"200px"}
                    image="/images/name.jpg"
                    alt="green iguana"

                />
                <Card style={{ margin: "10% 1% 1% 12%", backgroundColor: "white", width: "75%", height: "400px" }}><CardContent >
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off">

                        <TextField style={{ marginTop: "20%", marginLeft: "22%" }} id="outlined-basic" label="USER NAME" variant="outlined"
                            value={username} name="username" onChange={(e) => handleChange(e)} />
                    </Box>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off">

                        <TextField style={{ marginLeft: "22%" }} id="outlined-basic" label="PASSWORD" variant="outlined"
                            type="password" value={password} name="password" required onChange={(e) => handleChange(e)} />
                    </Box>
                    <div style={{ display: 'flex', marginLeft: "-30px" }}><Button style={{ marginLeft: '35%', marginTop: "10%" }} variant="contained" size="large" onClick={handleClick}>
                        Login
                    </Button>
                        <div style={{ marginTop: "12%", marginLeft: "10px" }}><a href={"javascript:void(0)"} onClick={handleOpen}> / Register</a></div>
                    </div>
                </CardContent>
                </Card>
                <div style={{ margin: '0 14%', marginTop: "10%", fontWeight: 'bold' }}><span>By login, you agree to Bullet Truck's Terms of Use and Privacy Policy.</span>
                    <div style={{ marginLeft: "30%", marginTop: "5%" }}><span style={{ textDecorationLine: 'underline' }}>Contact us</span>
                        <span>           </span>
                        <span style={{ textDecorationLine: 'underline' }}>About</span></div>
                </div>
            </Card>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={() => handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <span style={{ fontSize: '26px', margin: '3%', fontFamily: "fantasy", color: "#012135" }}>Looks like you are new Register here</span>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off">

                        <TextField style={{ marginTop: "8%", marginLeft: "22%" }} id="outlined-basic" label="USER NAME" variant="outlined"
                            value={registerData.username} name="regusername" onChange={(e) => handleChange(e)} />
                    </Box>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off">

                        <TextField style={{ marginTop: "1%", marginLeft: "22%" }} id="outlined-basic" label="EMAIL" variant="outlined"
                            value={registerData.email} name="regemail" onChange={(e) => handleChange(e)} />
                    </Box>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off">

                        <TextField style={{ marginTop: "1%", marginLeft: "22%" }} id="outlined-basic" label="MOBILE NUMBER" variant="outlined"
                            value={registerData.mobile} name="regmobile" onChange={(e) => handleChange(e)} />
                    </Box>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off">

                        <TextField style={{ marginTop: "1%", marginLeft: "22%" }} id="outlined-basic" label="PASSOWRD" variant="outlined"
                            value={registerData.password} name="regpassword" onChange={(e) => handleChange(e)} />
                    </Box>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off">

                        <TextField style={{ marginTop: "1%", marginLeft: "22%" }} id="outlined-basic" label="CONFIRM PASSOWRD" variant="outlined"
                            value={confirmPassword} name="confirmpassword" onChange={(e) => handleChange(e)} />
                    </Box>
                    <Button style={{ marginLeft: '35%', marginTop: "10%" }} variant="contained" size="large" onClick={handleRegister}>
                        Register
                    </Button>
                </div>
            </Modal>

        </div>
    )
}
export default Login;



