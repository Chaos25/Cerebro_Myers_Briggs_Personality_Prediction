import React,{useState} from 'react'
import axios from 'axios'
import {BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom'
import { Header_home } from './Header_home'

export const Signup=()=>{
    const [usernameReg,setUsernameReg]= useState("")
    const [pwdReg,setPwdReg]= useState("")
    const [name,setName]=useState("")
    const [age,setAge]=useState();
    const[gend,setGend]=useState("");
  
    const[usernameLog,setUsernameLog]=useState("")
    const[pwdLog,setPwdLog]=useState("")
  
    const [loginStatus,setLoginStatus]=useState("")
    const [regStatus,setRegStatus]=useState("")
  

    async function register(){
          try{
              await axios.post("http://localhost:3002/register",{
                namee:name,
                username: usernameReg,
                agee:age,
                genderr:gend,
                password: pwdReg,
                }).then((response)=>{
                  if(response.data.username!==0)
                  {
                    setRegStatus('Registered Successfully!')
                    
                  }
                  else
                  {
                    setRegStatus('User already exists!')
                  }
                }).catch((error)=>{
                  console.log(error);
                })
          }
          catch(err)
          {
            console.log(err)
          }
        }
return(
  <><Header_home/>
    <div className="container">
    <div className="card login_signup_card">
      <form>
        <br />
        <div className="mb-3">
          <label className="signin">Name:</label>
          <input type="text" className="form-control" onChange={(e)=>{
            setName(e.target.value);
          }}/>
          <label className="signin">Username:</label>
          <input type="text" className="form-control" onChange={(e)=>{
          setUsernameReg(e.target.value);
          }}/>
          <label className="signin">Age:</label>
          <input type="text" className="form-control" onChange={(e)=>{
            setAge(e.target.value);
          }} />
          <label className="signin">Gender:</label>
          <input type="text" className="form-control" onChange={(e)=>{
            setGend(e.target.value);
          }}/>
          <label className="signin">Password:</label>
          <input type="text" className="form-control" value={pwdReg} onChange={(e)=>{
          setPwdReg(e.target.value);
        }}/>

        </div>
        <button type="submit" className="btn next" onClick={register}>
          Submit
        </button>
        <h4>{regStatus}</h4>
      </form>
    </div>
  </div>
  </>
)
}