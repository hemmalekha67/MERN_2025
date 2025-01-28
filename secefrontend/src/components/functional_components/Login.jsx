import {useState} from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios'

const Login=({ setIsLoggedIn })=>{
    const navigate = useNavigate();
     const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const handleLogin =async (e) =>{
        e.preventDefault()
        try{
            console.log("event triggered");
            const req = await axios.post("http://localhost:3001/login",{
              
              email:email,
              password:password
            })
            //console.log(req)
            alert(req.data.response);
            if(req.data.loginStatus){
              setIsLoggedIn(true);
              navigate("/Home");
            }
            else{
              navigate("/Login")
            }
          }
            catch(err){
              console.log(err);
            }
      }

    return(
        <div>
            <form method = "POST" onSubmit={handleLogin}>
            Email : <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} required/><br/>
            Password : <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required/><br/>
            <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login