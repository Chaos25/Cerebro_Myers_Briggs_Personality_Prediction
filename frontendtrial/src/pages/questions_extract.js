import React, { useEffect, useState } from 'react'
import { ReactDOM } from 'react-dom';
import { Link, useParams,Navigate,Routes,Route,useNavigate } from 'react-router-dom';
//import { Routes,Route,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Header_logout } from './HeaderLogout';
import Typewriter from 'typewriter-effect'
export function Extract1() {
  
  const usernameLog= useParams().user
  const[f,setF]=useState();
  const [qs,setQs]=useState([])
  const [choice,setChoice]=useState([{id: 0,choice: usernameLog}])
  const navigate=useNavigate();
  
  console.log(usernameLog);
  const options=[1,2,3,4,5]
  useEffect(()=>{
    axios
    .post("http://localhost:3002/qp1", {num: 1,u:usernameLog})
    .then((response) => {
    //console.log(response.data);
    setQs(response.data)})
    .catch((err) => {
        console.log(err);
      })
  },[usernameLog])

  async function SubmitChoice()
  {
    try{
      await axios
      .post('http://localhost:3002/choice',choice)
      .then((response)=>{
        console.log(response);
      })
      .catch((err)=>{
        console.log(err);
      })
    }
    catch(err)
    {
      console.log(err)
    }
  }

  async function navtoRes()
  {
    try{
      const lnk= '/'+usernameLog+'/qs2';
        navigate(lnk);
        console.log('Navigated!');
    }
    catch(err){
      console.log(err);
    }

  }

  async function onSubmitt()
  {
    try{
        await SubmitChoice().then(()=>{
          console.log('Success!');
        }).catch((err)=>{
          console.log(err);
        })

          await navtoRes().then(()=>{
            console.log('Navigated successfully!');
          }).catch((err)=>{
            console.log(err);
          })
    }
    catch(err){
      return err;
    }
  }
  return(
    <>
    <Header_logout/>
    <div className='container'>
      <h1 className='ResultHeading'><Typewriter
  
  onInit={(typewriter)=> {

  typewriter
   
  .typeString("Let's get Started...")
    
  .pauseFor(1000)
  .start();
  }}
  /></h1>
      <br/>
      <br/>
      <div>
        {qs.map((q)=>{
          return(
            
            <div className=" question-card">
              <div className="question" key={q.id}>
              {q.id}.{q.question}
              </div><div className="answer">
                Strongly Agree
                {options.map((o,idx)=>{
                  return(

                    <div key={idx} className="spacing">
                      <div>
                      <input type='radio' className={(o===1||o===5)?"large":(o===2||o===4)?"medium":""} name={q.id} value={o} onChange={(e)=>{setChoice([...choice,{
                        id:q.id,
                        choice: e.target.value
                      }]);console.log(choice)}}/>
                    </div>
                    </div>
                  );
                })}
                Strongly Disagree
              </div>
              <hr color="light-grey" opacity="0.2" />
            </div>

            )
        })}
        <div class="container">
          {/*<div className="col-lg-4 mx-auto">
        <Link to="/MainPage">
            <button className="btn next ">Previous Page</button></Link>
            </div>
            <div className="btn next">
          <Link to="/MainPage">
            <button className="btn next">Next Page</button></Link></div>
            <div className="col-lg-4 mx-auto">*/}
        
        <button className="btn next right" onClick={onSubmitt}><a href></a>Next</button></div>
        </div>
    </div>
    </>
  )
  
}