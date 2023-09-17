import React, { useEffect, useState } from 'react'
import { ReactDOM } from 'react-dom';
import { Link, useParams,Navigate,Routes,Route,useNavigate } from 'react-router-dom';
//import { Routes,Route,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Header_logout } from './HeaderLogout';
export function Extract2() {
  
  const usernameLog= useParams().user
  const[f,setF]=useState();
  const [qs,setQs]=useState([])
  const navigate=useNavigate();
  const [choice,setChoice]=useState([{id: 0,choice: usernameLog}])
  console.log(usernameLog);
  const options=[1,2,3,4,5]
  useEffect(()=>{
    axios
    .post("http://localhost:3002/qp", {num: 2})
    .then((response) => {
    //console.log(response.data);
    setQs(response.data)})
    .catch((err) => {
        console.log(err);
      })
  },[])

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
      const lnk= '/'+usernameLog+'/qs3';
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