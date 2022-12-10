import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom'
import 'react-circular-progressbar/dist/styles.css';
import Typewriter from "typewriter-effect";
import { Header_logout } from './pages/HeaderLogout';
export const Desc=()=>{
return(
    <>
    <Header_logout/>
    <div className="container">
    <h1 className=" Main_page"><Typewriter
  
  onInit={(typewriter)=> {

  typewriter
   
  .typeString("Know more about each personality...")
    
  .pauseFor(1000)
  .start();
  }}
  /></h1>
  
  <div className="para">
  <div class="row">
      <div class="col-md-6 col sm-12 centre_content">
  <h3 className="heading_mainn">ISTJ - The Duty Fulfiller</h3>
  <br/>
Serious and quiet, interested in security and peaceful living. Extremely thorough, responsible, and dependable. Well-developed powers of concentration. Usually interested in supporting and promoting traditions and establishments. Well-organized and hard working, they work steadily towards identified goals. They can usually accomplish any task once they have set their mind to it.

</div>
<div class="col-md-6 col sm-12 centre_content">
            <img className="img_front"src="https://img.freepik.com/free-vector/flat-creativity-concept-illustration_52683-64279.jpg?w=360&t=st=1667407840~exp=1667408440~hmac=20f67eb4f110376b1901fb397aaa58d9cbfa96cdaf4dd4cca5dfc4310ee39261" width="400px"/>
        </div>
<br/>
</div>
<div class="row">
    
<div class="col-md-6 col sm-12 centre_content">
            <img className="img_front"src="https://img.freepik.com/free-vector/illustration-characters-fixing-cogwheel_53876-40796.jpg?w=360&t=st=1667407890~exp=1667408490~hmac=066762e448cc78ada51f0586f26925da4bcda07477040f29dc0203446ec31350" width="400px"/>
        </div>
      <div class="col-md-6 col sm-12 centre_content">
      <h3 className="heading_mainn">ISTP - The Mechanic</h3>
  <br/>
  
Quiet and reserved, interested in how and why things work. Excellent skills with mechanical things. Risk-takers who they live for the moment. Usually interested in and talented at extreme sports. Uncomplicated in their desires. Loyal to their peers and to their internal value systems, but not overly concerned with respecting laws and rules if they get in the way of getting something done. Detached and analytical, they excel at finding solutions to practical problems.

</div>
<br/>
</div>
<div class="row">
      <div class="col-md-6 col sm-12 centre_content">
  <h3 className="heading_mainn">ISFJ - The Nurturer</h3>
  <br/>

  Quiet, kind, and conscientious. Can be depended on to follow through. Usually puts the needs of others above their own needs. Stable and practical, they value security and traditions. Well-developed sense of space and function. Rich inner world of observations about people. Extremely perceptive of other's feelings. Interested in serving others.
</div>
<div class="col-md-6 col sm-12 centre_content">
            <img className="img_front"src="https://img.freepik.com/free-vector/worker-watering-potted-plant-with-idea-light-bulbs-grow_74855-20429.jpg?w=826&t=st=1667407991~exp=1667408591~hmac=1b772088470feb1f6901abc1d8d6c00730646d80ac6310300d96868e0656d410" width="400px"/>
        </div>
<br/>
</div>
<div class="row">
    
<div class="col-md-6 col sm-12 centre_content">
            <img className="img_front"src="https://img.freepik.com/free-vector/artist-concept-illustration_114360-6775.jpg?w=360&t=st=1667408046~exp=1667408646~hmac=cef297427355674faeb96d35a987460df0a46c9c4f83318865737416a472c503" width="400px"/>
        </div>
      <div class="col-md-6 col sm-12 centre_content">
      <h3 className="heading_mainn">ISFP - The Artist</h3>
  <br/>
  
Quiet, serious, sensitive and kind. Do not like conflict, and not likely to do things which may generate conflict. Loyal and faithful. Extremely well-developed senses, and aesthetic appreciation for beauty. Not interested in leading or controlling others. Flexible and open-minded. Likely to be original and creative. Enjoy the present moment.
</div>
<br/>
</div>
<div class="row">
      <div class="col-md-6 col sm-12 centre_content">
  <h3 className="heading_mainn">INFJ - The Protector</h3>
  <br/>
Quietly forceful, original, and sensitive. Tend to stick to things until they are done. Extremely intuitive about people, and concerned for their feelings. Well-developed value systems which they strictly adhere to. Well-respected for their perserverence in doing the right thing. Likely to be individualistic, rather than leading or following.
</div>
<div class="col-md-6 col sm-12 centre_content">
            <img className="img_front"src="https://img.freepik.com/free-vector/global-data-security-personal-data-security-cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37375.jpg?w=740&t=st=1667409005~exp=1667409605~hmac=7f8a661acbaac6f90adfee17b26c6b792c41a09b52ca92e432cdbe973aea46e6" width="400px"/>
        </div>
<br/>
</div>
<div class="row">
    
<div class="col-md-6 col sm-12 centre_content">
            <img className="img_front"src="https://img.freepik.com/free-vector/product-quality-concept-illustration_114360-7301.jpg?w=360&t=st=1667408199~exp=1667408799~hmac=309fcf793351a1ee01d01b06852d5313940fce4f274fe4e16e50a87763ccd081" width="400px"/>
        </div>
      <div class="col-md-6 col sm-12 centre_content">
      <h3 className="heading_mainn">INFP - The Idealist</h3>
  <br/>
  Quiet, reflective, and idealistic. Interested in serving humanity. Well-developed value system, which they strive to live in accordance with. Extremely loyal. Adaptable and laid-back unless a strongly-held value is threatened. Usually talented writers. Mentally quick, and able to see possibilities. Interested in understanding and helping people.
</div>
<br/>
</div>
<div class="row">
      <div class="col-md-6 col sm-12 centre_content">
  <h3 className="heading_mainn">INTJ - The Scientist</h3>
  <br/>Independent, original, analytical, and determined. Have an exceptional ability to turn theories into solid plans of action. Highly value knowledge, competence, and structure. Driven to derive meaning from their visions. Long-range thinkers. Have very high standards for their performance, and the performance of others. Natural leaders, but will follow if they trust existing leaders.
</div>
<div class="col-md-6 col sm-12 centre_content">
            <img className="img_front"src="https://img.freepik.com/free-vector/scientists-working-concept_23-2148488316.jpg?w=360&t=st=1667408261~exp=1667408861~hmac=bc3a23e648297165a341c1dde5b1b26a012924c5aa3bb03f16821907c12a4d20" width="400px"/>
        </div>
<br/>
</div>
<div class="row">
    
<div class="col-md-6 col sm-12 centre_content">
            <img className="img_front"src="https://img.freepik.com/free-vector/design-inspiration-concept-illustration_114360-3992.jpg?w=360&t=st=1667408305~exp=1667408905~hmac=39ad271fc02da5d8d12ab58e2f4c47619e16e59172eac777d60d605e20c4057b" width="400px"/>
        </div>
      <div class="col-md-6 col sm-12 centre_content">
      <h3 className="heading_mainn">INTP - The Thinker</h3>
  <br/>
  Logical, original, creative thinkers. Can become very excited about theories and ideas. Exceptionally capable and driven to turn theories into clear understandings. Highly value knowledge, competence and logic. Quiet and reserved, hard to get to know well. Individualistic, having no interest in leading or following others.
</div>
<br/>
</div>
<div class="row">
      <div class="col-md-6 col sm-12 centre_content">
  <h3 className="heading_mainn">ESTP - The Doer</h3>
  <br/>Friendly, adaptable, action-oriented. "Doers" who are focused on immediate results. Living in the here-and-now, they're risk-takers who live fast-paced lifestyles. Impatient with long explanations. Extremely loyal to their peers, but not usually respectful of laws and rules if they get in the way of getting things done. Great people skills.
</div>
<div class="col-md-6 col sm-12 centre_content">
            <img className="img_front"src="https://img.freepik.com/free-vector/man-shows-gesture-great-idea_10045-637.jpg?w=360&t=st=1667402654~exp=1667403254~hmac=26576ed0cf3c5033b655846f7f32c8cf3dc340e18e83483ec9eabae471ce85ae" width="400px"/>
        </div>
<br/>
</div>
<div class="row">
    
<div class="col-md-6 col sm-12 centre_content">
            <img className="img_front"src="https://img.freepik.com/free-vector/christmas-angel-concept-illustration_114360-3786.jpg?w=360&t=st=1667408431~exp=1667409031~hmac=c26c68454154b03a97f72d312c1d158bfef9c4474e698df9cd6794eb0d08e00b" width="400px"/>
        </div>
      <div class="col-md-6 col sm-12 centre_content">
      <h3 className="heading_mainn">ESTJ - The Guardian</h3>
  <br/>
  Practical, traditional, and organized. Likely to be athletic. Not interested in theory or abstraction unless they see the practical application. Have clear visions of the way things should be. Loyal and hard-working. Like to be in charge. Exceptionally capable in organizing and running activities. "Good citizens" who value security and peaceful living.
</div>
<br/>
</div>

<div class="row">
      <div class="col-md-6 col sm-12 centre_content">
  <h3 className="heading_mainn">ESFP - The Performer</h3>
  <br/>People-oriented and fun-loving, they make things more fun for others by their enjoyment. Living for the moment, they love new experiences. They dislike theory and impersonal analysis. Interested in serving others. Likely to be the center of attention in social situations. Well-developed common sense and practical ability.</div>
<div class="col-md-6 col sm-12 centre_content">
            <img className="img_front"src="https://img.freepik.com/free-vector/positive-tiny-people-sitting-walking-near-huge-target-with-arrow-isolated-flat-vector-illustration-cartoon-business-team-achieving-goal-aim-marketing-strategy-achievement-concept_74855-10139.jpg?w=740&t=st=1667408480~exp=1667409080~hmac=5049f10422c60b9c15c4bba2f17a796167180d03c22af520151103db66027dad" width="400px"/>
        </div>
<br/>
</div>
<div class="row">
    
<div class="col-md-6 col sm-12 centre_content">
            <img className="img_front"src="https://img.freepik.com/free-vector/hands-holding-red-heart-love-care-family-protect-poster-vector-illustration_1284-2324.jpg?w=360&t=st=1667408536~exp=1667409136~hmac=00c0709c2821fd807a585c6f8974286d1806ae2429d05effab59cc43bd6c727a" width="400px"/>
        </div>
      <div class="col-md-6 col sm-12 centre_content">
      <h3 className="heading_mainn">ESFJ - The Caregiver</h3>
  <br/>Warm-hearted, popular, and conscientious. Tend to put the needs of others over their own needs. Feel strong sense of responsibility and duty. Value traditions and security. Interested in serving others. Need positive reinforcement to feel good about themselves. Well-developed sense of space and function.</div>
<br/>
</div>

<div class="row">
      <div class="col-md-6 col sm-12 centre_content">
  <h3 className="heading_mainn">ENFP - The Inspirer</h3>
  <br/>Enthusiastic, idealistic, and creative. Able to do almost anything that interests them. Great people skills. Need to live life in accordance with their inner values. Excited by new ideas, but bored with details. Open-minded and flexible, with a broad range of interests and abilities.</div>
<div class="col-md-6 col sm-12 centre_content">
            <img className="img_front"src="https://img.freepik.com/free-vector/creativity-concept-illustration_114360-1083.jpg?w=360&t=st=1667408596~exp=1667409196~hmac=d0657c43fc0cb3abca2cf96fa87968016a9ccd811016cadfc150f4d29c66fab1" width="400px"/>
        </div>
<br/>
</div>
<div class="row">
    
<div class="col-md-6 col sm-12 centre_content">
            <img className="img_front"src="https://img.freepik.com/free-vector/young-woman-white_25030-39527.jpg?w=360&t=st=1667402523~exp=1667403123~hmac=fddcff9ae02848732a70f30a0c7c44d17661ca8794bb0e13385b1184d5585533" width="400px"/>
        </div>
      <div class="col-md-6 col sm-12 centre_content">
      <h3 className="heading_mainn">ENFJ - The Giver</h3>
  <br/>
  Popular and sensitive, with outstanding people skills. Externally focused, with real concern for how others think and feel. Usually dislike being alone. They see everything from the human angle, and dislike impersonal analysis. Very effective at managing people issues, and leading group discussions. Interested in serving others, and probably place the needs of others over their own needs.</div>
<br/>
</div>

<div class="row">
      <div class="col-md-6 col sm-12 centre_content">
  <h3 className="heading_mainn">ENTP - The Visionary</h3>
  <br/>Creative, resourceful, and intellectually quick. Good at a broad range of things. Enjoy debating issues, and may be into "one-up-manship". They get very excited about new ideas and projects, but may neglect the more routine aspects of life. Generally outspoken and assertive. They enjoy people and are stimulating company. Excellent ability to understand concepts and apply logic to find solutions.</div>
<div class="col-md-6 col sm-12 centre_content">
            <img className="img_front"src="https://img.freepik.com/free-vector/business-vision-concept-illustration_114360-7130.jpg?w=360&t=st=1667408721~exp=1667409321~hmac=ff486a28a0f93c6aa9780d6fa506e8f49e54dd74c835ab8e03e43a310dc0435b" width="400px"/>
        </div>
<br/>
</div>
<div class="row">
    
<div class="col-md-6 col sm-12 centre_content">
            <img className="img_front"src="https://img.freepik.com/free-vector/businessman-concept-illustration_114360-1246.jpg?w=360&t=st=1667408764~exp=1667409364~hmac=f530e7bf3b7223691e9b1353ec80c34749b5ab9d3c5589594134e1fd06dbd381" width="400px"/>
        </div>
      <div class="col-md-6 col sm-12 centre_content">
      <h3 className="heading_mainn">ENTJ - The Executive</h3>
  <br/>Assertive and outspoken - they are driven to lead. Excellent ability to understand difficult organizational problems and create solid solutions. Intelligent and well-informed, they usually excel at public speaking. They value knowledge and competence, and usually have little patience with inefficiency or disorganization.</div>
<br/>
</div>
  </div>
  </div>
    </>
)
}
