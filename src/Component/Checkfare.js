import React, { useEffect, useState } from "react";
import Autocomplete from '@mui/material/Autocomplete';
import DatePicker from "react-datepicker";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import { goodsType } from '../Utils/DataUtils'
import "react-datepicker/dist/react-datepicker.css";

function Checkfare() {
    const navigate = useNavigate();
    const [goods, setGoods] = useState('')
    const [startDate, setStartDate] = useState(new Date());
   
    useEffect(() => {
        let data = localStorage.getItem("goodstype");
        if (data) {
            let val = JSON.parse(data)
            setGoods(val.typesofGoods)

        }
    }, [])
    function handleNext() {
        if (goods) {
            let data = {
                typesofGoods: goods,
            }
            localStorage.setItem("goodstype", JSON.stringify(data))
            navigate('/Invoice')

        }
        else {
            alert("Enter all Fields")
        }
    }

    return (
        <div style={{ margin: '7%' }}>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off">
                <TextField id="outlined-basic" label="weight of goods" variant="outlined" />
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

            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            <div style={{ margin: '7%' }}>
                <Button variant="contained" size="large" onClick={handleNext}>
                    NEXT
                </Button>
                <Button variant="contained" size="large" onClick={() => navigate('/Dashboard')}>
                    BACK
                </Button>
            </div>
        </div>
    )
}
export default Checkfare;
