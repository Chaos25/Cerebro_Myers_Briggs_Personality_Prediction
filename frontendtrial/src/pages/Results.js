import React,{useEffect,useState} from 'react'
import {Link, Navigate, useNavigate, useParams} from 'react-router-dom'
//import{Main} from './Main'
import axios from 'axios'
//import {ProgressBar} from 'react-bootstrap';
import {CircularProgressbar ,buildStyles} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
import { Header_logout } from './HeaderLogout';
import { Desc } from '../Desc';
export function Results(){
    let navigate= useNavigate();
    const[text,setText]=useState('')
    const[box1,setBox1]=useState('')
    const[box2,setBox2]=useState('')
    const[box3,setBox3]=useState('')
    const[box4,setBox4]=useState('')
    const[name,setName]=useState('')
    const[you,setYou]=useState('')
    
    
    const usernameLog= useParams().user
    
    const [p1,setp1]=useState(0);
    const [p2,setp2]=useState(0);
    const [p3,setp3]=useState(0);
    const [p4,setp4]=useState(0);
  useEffect(() => {
     axios.post('http://localhost:3002/Result',{u:usernameLog}).then(async(response)=>{

      setp1(response.data[1]);
      setp2(response.data[4]);
      setp3(response.data[7]);
      setp4(response.data[10]);
      setText(response.data[0]+response.data[3]+response.data[6]+response.data[9]);
      setBox1(response.data[2])
      setBox2(response.data[5])
      setBox3(response.data[8])
      setBox4(response.data[11])
      setName(response.data[12])
      setYou(response.data[13])
      
      
   })
},[p1,p2,p3,p4,text,usernameLog])
 

return(
    <>
    <Header_logout/>
    <div className="container">
    <div className="Result_banner">
                <h1 className='heading_results_page'>Welcome {name}! </h1>
                <h3 className="Main_page">{you}{text}</h3>
            </div>
            <br/>
            <br/>
            <div className="Result_cards">
                <div className="row">
                    
                    <div className="card col-md-3 col-sm-12 result_prog_bar">
                    <div className="personality_heading one">{box1}</div>
                    <br/>
                    <CircularProgressbar size="80vh"value={p1} text={p1+"%"} strokeWidth={5}styles={buildStyles({
          textColor: "#53BF9D",
          pathColor: "#53BF9D",
         // trailColor: "gold"
        })}/>
                    </div>
                    <div className="card col-md-3 col-sm-12 result_prog_bar">
                    <div className="personality_heading two">{box2}</div>
                    <br/>
                    <CircularProgressbar value={p2} text={p2+"%"} strokeWidth={5}styles={buildStyles({
          textColor: "#F94C66",
          pathColor: "#F94C66",
         // trailColor: "gold"
        })} />
                    </div>
                    <div className="card col-md-3 col-sm-12 ">
                    <div className="personality_heading three">{box3}</div>
                    <br/>
                    <CircularProgressbar value={p3} text={p3+"%"} strokeWidth={5}styles={buildStyles({
          textColor: "#BD4291",
          pathColor: "#BD4291",
         // trailColor: "gold"
        })} />
                    </div>
                    <div className="card col-md-3 col-sm-12 ">
                    <div className="personality_heading four">{box4}</div>
                    <br/>
                    <CircularProgressbar value={p4} text={p4+"%"} strokeWidth={5}styles={buildStyles({
          textColor: "#FFC54D",
          pathColor: "#FFC54D",
         // trailColor: "gold"
        })} />
                    </div>
                </div>
                <br/>
               
                
            <div>
            <Link to={"/"+usernameLog+"/qs1"} className="btn next">Take test</Link>
            <Link to={"/Desc"}className="btn next right" >Know more!</Link>
            </div>
            <br/>
            </div>
    </div>
    </>
)
}