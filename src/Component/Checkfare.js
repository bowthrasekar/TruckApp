import React, { useEffect, useState } from "react";
import Autocomplete from '@mui/material/Autocomplete';
import DatePicker from "react-datepicker";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import { goodsType } from '../Utils/DataUtils'
import "react-datepicker/dist/react-datepicker.css";
import Header from "./Header";

function Checkfare() {
    const navigate = useNavigate();
    const username = localStorage.getItem('username');
    const [goods, setGoods] = useState('');
    const[weight, setWeight]=useState('')
    const [startDate, setStartDate] = useState(new Date());
   
    useEffect(() => {
        let data = localStorage.getItem("goodstype");
        if (data) {
            let val = JSON.parse(data)
            setGoods(val.typesofGoods)
            setWeight(val.weighht)
            setStartDate(new Date(val.date))
        }
    }, [])
 
    
    
    function handleNext() {
        if (goods) {
            let data = {
                typesofGoods: goods,
                weight:weight,
                date:startDate

            }
            localStorage.setItem("goodstype", JSON.stringify(data))
         
            navigate('/Invoice')

        }
        else {
            alert("Enter all Fields")
        }
    }

    return (
        <div>
            <Header username={username}/>
            <div style={{margin: "7%"}}>
            <label>CHOOSE SERVICE TYPE</label>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off">
                    
                <TextField id="outlined-basic" label="weight of goods" variant="outlined" 
                onChange={(e)=>setWeight(e.target.value)} />
            </Box>
            <Autocomplete
                options={goodsType}
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                value={goods}
                onChange={(e, val) => setGoods(val)}
                renderInput={(params) => <TextField {...params} label="TYPE OF GOODS" />}

            />

            <div style={{margin: "2%"}}><DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /></div>
            <div style={{ margin: '7%' }}>
            <Button variant="contained" size="large" onClick={() => navigate('/Dashboard')}>
                    BACK
                </Button>
                <Button style={{ marginLeft:'50%'}}variant="contained" size="large" onClick={handleNext}>
                    NEXT
                </Button>
               
                
            </div>
            </div>
        </div>
    )
}
export default Checkfare;
