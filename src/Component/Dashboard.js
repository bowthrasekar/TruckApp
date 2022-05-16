import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import { districtList, vehicle } from '../Utils/DataUtils';
import Header from "./Header";
import Box from '@mui/material/Box';


function Dashboard() {
    const navigate = useNavigate();

    const username = localStorage.getItem('username');
    const [pickup, setPickup] = useState('')
    const [drop, setDrop] = useState('')
    const [truck, setTruck] = useState('')

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
            <Header username={username} />
            {/* <div style={{ marginRight: '10%', fontWeight: 'bold' }}>{username}</div> */}
            <div style={{ margin: '2% 0 2% 15%' }}>
                <Autocomplete
                    options={districtList}
                    sx={{ width: 300 }}
                    value={pickup}
                    onChange={(e, val) => setPickup(val)}
                    renderInput={(params) => <TextField {...params} label="Pickup location" />}

                />
            </div>
            <div style={{ margin: '2% 0 2% 15%' }}>
                <Autocomplete
                    options={districtList}
                    sx={{ width: 300 }}
                    value={drop}
                    onChange={(e, val) => setDrop(val)}
                    renderInput={(params) => (<TextField {...params} label="Drop location" />)}

                />
            </div>
            <div style={{ margin: '2% 0 2% 15%' }}>
                <Autocomplete
                    options={vehicle}
                    sx={{ width: 300 }}
                    value={truck}
                    onChange={(e, val) => setTruck(val)}
                    getOptionLabel={(option) => option.label}
                    renderOption={(props, option) => (
                        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                            <img
                                loading="lazy"
                                width="30"
                                height={"30px"}
                                src={`/images/truck/${option.code}.png`}
                                srcSet={`/images/truck/${option.code}.png`}
                                alt=""
                            />
                            {option.label}
                        </Box>
                    )}
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

