import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
function Login()
{
    const [username,setUsername]=useState(" ")
    const navigate=useNavigate();
    function handleChange(e){
        setUsername (e.target.value)
    }
    return(
        <div>
            <label>username</label>
            <input value={username} onChange={(e) => handleChange(e)}/>
            <button onClick={() => {console.log (username);navigate ('/Dashboard');}}>click</button>
            
            
        </div>
    )
}
export default Login;



