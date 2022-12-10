import React,{useState} from 'react'
import axios from 'axios'
import {BrowserRouter as Router, Routes,Route, Link, Navigate } from 'react-router-dom'
import { Results } from './Results';
import { Header_home } from './Header_home';


export function Login()
{
    const [f,setF]=useState();
    const[usernameLog,setUsernameLog]=useState("")
    const[pwdLog,setPwdLog]=useState("")
  
    const [loginStatus,setLoginStatus]=useState("")
    async function login()
    {
     try{
      await axios.post("http://localhost:3002/login",{
        username: usernameLog,
        password: pwdLog}).then((response)=>{
          if(response.data.rows.length>0)
          {
            setF(1);
            setLoginStatus('Logged in successfully!')
            console.log('Logged in successfully!')
            console.log('url: '+window.location.href);
            
          }
          else
          {
            setF(0);
            setLoginStatus('Login failed!')
          }
          //console.log(response.data);
          //console.log(response.data.rows.length)
        }).catch((error)=>{
          console.log(error);
        })
    }
    catch(err){
      console.log(err)
    }
  }
    return (
        <>
        <Header_home/>

        <div className="container">
            <div className=' card login_signup_card'>
            <br/><h1>Login</h1>
            <br/>
            <div className="mb-3">
              <label className="signin">UserID:</label>
            <input type="text" className="form-control" onChange={(e)=>{
              setUsernameLog(e.target.value);
            }}/>
            <label className="signin">Password:</label>
            <input type="password" className="form-control"  onChange={(e)=>{
              setPwdLog(e.target.value);
            }}/>
            <br/>
            <Link to="/Signup">
          <button className="btn next">Create Account</button>
        </Link>
            <br/>
            <br/>
            <button type="submit" className="btn next"onClick={login}>Login</button>
            {f?<Navigate to={"/"+usernameLog+"/Results"}/>:<h4>{loginStatus}</h4>}
            </div>
            </div>
       </div>
       </>
    )
}