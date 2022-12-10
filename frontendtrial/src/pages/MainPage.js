import React from "react";
import Typewriter from "typewriter-effect";
import { Header_home } from "./Header_home";

export const MainPage=()=>
{
    return (
        <>
        <Header_home/>
        <div class="container">
        <div class="row"> 
        <br/>
        <br/>
        <div class="col-md-6 col sm-12">
            <br/>
            <h1 className="Main_page">Welcome to <div className="heading_mainn">  <Typewriter
  
  onInit={(typewriter)=> {

  typewriter
   
  .typeString("Cerebro")
    
  .pauseFor(1000)
  .deleteAll()
  .typeString(" our Personality Prediction Project ")
  .start();
  }}
  /></div></h1>
       <div className="para">
           <br/>
           <div>
       Personality tests are primarily used for identifying perceived strengths and weaknesses in the character combinations of an individual to give them a direction such that only their strengths are amplified and the weaknesses reduced to a bare minimum or eliminated.
       <p>Personal development can be intimidating. You aren’t the only one who finds walking through the self-help section in a bookstore confusing or daunting, with its countless titles that promise to improve your life, outlook, and health. Although it’s not a bad idea to pick up a self-help book once in a while, you may find your personal growth will get the best boost from personality testing. Testing requires less time than a full-length book, and you’ll find a wealth of information at your disposal for further reading once you’ve received your results. And let’s face it, it’s kind of fun taking tests, right?  

Whether you’re new to personality testing or you’re familiar with options like the 16-type system or the Big 5, personality testing offers rich benefits that can enrich your outlook, give you an idea of which habits to work on, and lead you toward the best version of yourself in confidence.</p>
       </div>
       <br/>
       <h5 className="pink">Take our test to find out more about your personality type!</h5>
       </div>
        </div>
        <div class="col-md-6 col sm-12">
            <img className="img_front"src="https://img.freepik.com/free-vector/mind-map-concept-illustration_114360-1727.jpg?w=740&t=st=1667385580~exp=1667386180~hmac=89fb641ce218e9c919f12009daa8fa5f80dab7773fd8d8032bdbaa1eb2b658cf" width="700px"/>
        </div>
        </div>
        </div>
        </>
    )
}
