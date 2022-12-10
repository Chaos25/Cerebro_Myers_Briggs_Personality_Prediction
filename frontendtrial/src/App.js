import React, {useState} from 'react'
import './App.css'
import axios from 'axios'
import {BrowserRouter, Routes,Route, Link } from 'react-router-dom'
import {MainPage} from './pages/MainPage';
import {Header_home} from './pages/Header_home'
import{Footer} from './pages/Footer'
import {Login} from './pages/Login_signup'
import {Signup} from './pages/Signup'
import {Results} from './pages/Results'
import { NotFound } from './pages/NotFound';
//import { Questions } from './pages/Questions';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Extract1} from './pages/questions_extract';
import { Extract2} from './pages/qs2';
import { Extract3} from './pages/qs3';
import { Extract4 } from './pages/qs4';
import { useParams } from 'react-router-dom';
import "./components/Fontawesomeicons"
import {Desc} from './Desc'


function App() {
  const usernameLog= useParams().user
  return (
    <>
  <Routes>
  <Route path="/" element={<MainPage/>}/>
    <Route path="/MainPage" element={<MainPage/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/Signup" element={<Signup/>}/>
    <Route path="/Desc" element={<Desc/>}/>
    <Route path="/:user/Results" element={<Results/>}/>
    <Route path="/:user/qs1" element={<Extract1/>}/>
    <Route path="/:user/qs2" element={<Extract2/>}/>
    <Route path="/:user/qs3" element={<Extract3/>}/>
    <Route path="/:user/qs4" element={<Extract4/>}/>
    <Route path="*" element={<NotFound/>}/>
  </Routes>
  <Footer/>
    
      

    {/*<div>
      <div className='Qp1'>
        <h1>Questions</h1>
        <button onClick={qp1}>Show Questions</button>
      </div>
    </div>*/}
    </>
    
  );
}

export default App;
