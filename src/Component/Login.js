import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { loginList } from '../Utils/DataUtils';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from "../images/logo.jpg";

function Login()
{
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")

    const navigate=useNavigate();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
  
      const pages = ['ABOUT US', 'CONTACT US', 'Blog'];
      const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
      
          const handleOpenNavMenu = (event) => {
              setAnchorElNav(event.currentTarget);
          }
          const handleOpenUserMenu = (event) => {
              setAnchorElUser(event.currentTarget);
          };
          const handleCloseNavMenu = () => {
              setAnchorElNav(null);
          };
          const handleCloseUserMenu = () => {
              setAnchorElUser(null);
          };

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
        <div>
            <div style={{height: '10px', backgroundColor: "blue"}}><image src={logo}></image></div>
                <AppBar position="static" style={{backgroundColor: '#d6a604'}}>
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                            >
                                L AND C
                            </Typography>

                            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: { xs: 'block', md: 'none' },
                                    }}
                                >
                                    {pages.map((page) => (
                                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center">{page}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                            >
                                LOGO
                            </Typography>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                {pages.map((page) => (
                                    <Button
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        {page}
                                    </Button>
                                ))}
                            </Box>

                            <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {settings.map((setting) => (
                                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                            <Typography textAlign="center">{setting}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
               
             <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off">
                    
                <TextField id="outlined-basic" label="USER NAME" variant="outlined" 
                value={username} name="username" onChange={(e) => handleChange(e)}/>
            </Box>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off">
                    
                <TextField id="outlined-basic" label="PASSWORD" variant="outlined" 
               type="password" value={password} name="pass" required  onChange={(e)=> handleChange(e)}/>
            </Box>
           
            
            
            <Button style={{ marginLeft:'50%'}}variant="contained" size="large" onClick={handleClick}>
                Login
                </Button>
  
            
        </div>
    )
}
export default Login;



