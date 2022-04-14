import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { loginList } from '../Utils/DataUtils';


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
        <div>
            <label>username</label>
            <input value={username} name="username" onChange={(e) => handleChange(e)}/>
            <label>password</label>
            <input type="password" value={password} name="pass" required  onChange={(e)=> handleChange(e)}/>
            <button onClick={handleClick}>click</button>
  
            
        </div>
    )
}
export default Login;



