import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import { districtList, vehicle } from '../Utils/DataUtils';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
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



function Dashboard() {
    const navigate = useNavigate();

    const username = localStorage.getItem('username');
    const [pickup, setPickup] = useState('')
    const [drop, setDrop] = useState('')
    const [truck, setTruck] = useState('')
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
    

        useEffect(() => {
            let data = localStorage.getItem("orderDetails");
            if (data) {
                let val = JSON.parse(data)
                setPickup(val.pickupLocation)
                setDrop(val.dropLocation)
                setTruck(val.truckType)
            }
        }, [])

        function handleCheckfare() {
            if (pickup && drop && truck) {
                let data = {
                    pickupLocation: pickup,
                    dropLocation: drop,
                    truckType: truck

                }
                localStorage.setItem("orderDetails", JSON.stringify(data))
                navigate('/Checkfare')
            }
            else {
                alert("Enter all Fields")
            }


        }

        return (
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
                                LOGO
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
                <div style={{ marginRight: '10%', fontWeight: 'bold' }}>{username}</div>
                <div style={{ margin: '7%' }}>
                    <Autocomplete
                        options={districtList}
                        sx={{ width: 300 }}
                        value={pickup}
                        onChange={(e, val) => setPickup(val)}
                        renderInput={(params) => <TextField {...params} label="Pickup location" />}

                    />
                </div>
                <div style={{ margin: '7%' }}>
                    <Autocomplete
                        options={districtList}
                        sx={{ width: 300 }}
                        value={drop}
                        onChange={(e, val) => setDrop(val)}
                        renderInput={(params) => (<TextField {...params} label="Drop location" />)}

                    />
                </div>
                <div style={{ margin: '7%' }}>
                    <Autocomplete
                        options={vehicle}
                        sx={{ width: 300 }}
                        value={truck}
                        onChange={(e, val) => setTruck(val)}
                        renderInput={(params) => <TextField {...params} label="Truck type" />}

                    />
                    <div style={{ margin: '7%' }}><Button variant="contained" size="large" onClick={handleCheckfare}>
                        Check fare
                    </Button>
                    </div>
                </div>
            </div>
        )
    
}
export default Dashboard;

