
import { motion } from 'framer-motion';
import { useRef } from 'react';
import notes from './images/notes.png';
import weather from './images/weather2.png';
import portfolio from './images/portfolio.png';
import resume1 from './images/Resume10.25.png';
import tictactoe10 from './images/tictactoe10.png';
import resumePDF from './images/resume1.pdf';
import download from './images/download.png';
import dealership from './images/dealershipIMG-S.png';

export default function Home() {
  const projects = useRef(null);
  const about = useRef(null);
  const contact = useRef(null);
  const resume = useRef(null);
  const scrollToSection = (elementRef) => {
  window.scrollTo({
      top:elementRef.current.offsetTop, behavior:'smooth'
  })
  }
  return (
 
    <div class = "  introM">

      
    <motion.div className =" introDiv" initial={{opacity:1}} animate = {{x:-500}} exit={{opacity:0}} transition={{duration:1}}>

        <motion.h1 initial={{opacity:0}} animate={{opacity:1}} transition={{duration:3}} className="intro">Mohamed Rafeek</motion.h1>
       <motion.p className="desc1" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{ delay:1, duration:3}}> Software Developer</motion.p>
       <div className="links">
        <motion.ul className = "links" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{ delay:0, duration:3}} >

          <motion.li whileHover={{ scale:1.1, duration:1}}> <a href="https://github.com/MAR2807" target="_blank" rel="noopener noreferrer"> <img className = "github"src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt='Github'></img> </a></motion.li>
          <motion.li whileHover={{ scale:1.1, duration:1}}> <a href="https://www.linkedin.com/in/mohamed-r-588900126/" target="_blank" rel="noopener noreferrer"> <img className = "linked"src="https://blog.waalaxy.com/wp-content/uploads/2021/01/LinkedIn-Symbole.png" alt='LinkedIn'></img> </a></motion.li> 

        </motion.ul>

        

       </div>
        
    </motion.div>
    
 


    <motion.nav className = "navbar navbar-expand-lg navTop"> 
         <ul className="navbar-nav navtop"> 
           <motion.li className ="navTop" whileHover={{scale:1.1}} onClick={() => scrollToSection(projects)}><button className ="navTop">Projects</button></motion.li>
           <motion.li className ="navTop" whileHover={{scale:1.1}} onClick={() => scrollToSection(about)}><button className ="navTop">About</button></motion.li>
           <motion.li className ="navTop" whileHover={{scale:1.1}} onClick={() => scrollToSection(resume)}><button className ="navTop">Resume</button></motion.li>
           <motion.li className ="navTop" whileHover={{scale:1.1}} onClick={() => scrollToSection(contact)}><button className ="navTop">Contact</button></motion.li>
           
           
         </ul>
         
       </motion.nav>
      

 
    {/* <motion.div  onClick={() => scrollToSection(projects)} className = "down_arrow"> <motion.img initial={{opacity:0, y:10}} animate = {{ y:80, opacity:1}}  transition={{duration:1, yoyo:Infinity, delay:4}}  className="down_arrow" src ="http://visualeyespdx.com/wp-content/uploads/2015/08/vec_down_arrow.png" alt ="down_Arrow"></motion.img>
        
    </motion.div>  */}
    <div className='mainContainer'>

<div className='container-fluid projectHolder' ref={projects}>  
<div className="container ">
  <div className="row projRow">
    <div className="col myColumn">
     <img className='notes-image' src={notes}></img>
     <h3> Notes App</h3>
     <p>This notes application built with HTML, CSS, JavaScript, and React lets users create an account and store their notes on the site. The notes are securely stored in Google Firebase, and can be accessed from anywhere. The interface is user-friendly, making it easy to create, view, and edit notes. Overall, it's a simple and effective way to store and access notes online.</p>
     <button className="btn btn-primary projButton" ><a className="projLink" href="https://github.com/MAR2807/notes-app.git" target="_blank">Github </a></button>
     <button className="btn btn-primary projButton" ><a className="projLink" href="https://noteify-app-c0702d.netlify.app" target="_blank">Live Website </a></button>
    </div>
    <div className="col myColumn">
    <img className='notes-image' src={weather}></img>
    <h3> Weather App </h3>
    <p>This weather app built with JavaScript and ReactJS leverages the openweathermap API to fetch real-time weather data for any city search. It displays current and forecasted weather conditions, such as temperature and humidity, in a user-friendly interface with clean visualizations. Stay informed and plan your day with ease using this intuitive weather app.</p>
    <button className="btn btn-primary projButton" ><a className="projLink" href="https://github.com/MAR2807/weather-app.git" target="_blank">Github </a></button>
    </div>
    <div className="col myColumn" >
    <img className='notes-image' src={portfolio}></img>
    <h3> Portfolio</h3>
    <p> A portfolio website I made to house my projects, resume and other info</p>
    </div>
    <div className="col myColumn">
    <img className='notes-image' src={dealership}></img>
    <h3> Weather App </h3>
    <p>A conceptual dealership website made using javascript, react, as well as a backend using firebase to pull data about each car showcased on the site. This website organizes the cars and allows the user to rearrange them to their liking using filters such as: price, fuel, year and mileage.</p>
    <button className="btn btn-primary projButton" ><a className="projLink" href="https://github.com/MAR2807/dealership.git" target="_blank">Github </a></button>
    </div>

    
    
    {/* <div className="col myColumn" >
    <img className='tt-image' src={tictactoe10}></img>
    </div> */}
  </div>
</div>

</div>
        

      </div>
       <div className="about" ref={about}> 
       <div className="container"><h1 className='about-title'>About </h1></div>
          <div className="container about-info">
            
            <p className = "about-info">   
                  Hi, my name is Mohamed. I graduated from Edison Highschool as class of 2019 and I have completed a Computer information systems degree at 
                   Middlesex College in 2022. I prefer to work with Javascript using the React framework but I am also proficient in Java, PHP, and SQL.
            </p>
          </div>
       
       </div>
       <div className="contact" ref={contact}>  
       <h1>Contact</h1> 
      
       <div className='contact-container'>
         
          <h2>Email:</h2> <p>aflalrafeek28@gmail.com </p>
           <h2><a href="https://github.com/MAR2807" target="_blank" rel="noreferrer"> <button button type="button" class="btn btn-primary" > GitHub </button></a></h2> 
           <h2><a href="https://www.linkedin.com/in/mohamed-r-588900126/" target="_blank" rel="noreferrer"> <button className="btn btn-primary"> LinkedIn </button></a></h2>
           </div>
       </div>
       <div className="resume" ref={resume}> 
       <div className="resumeTitle"> <h1 className='resumeTitle'>Resume</h1></div>
      
          <div className='resumeContainer'>
             
              {/* <iframe className='resumePDF' src={resume1} ></iframe> */}
              <img className="resume" src={resume1}></img>
        
           
          </div> 
          <div className='container resumeDownload'>  
          <a className='resume' href={resumePDF} download='Mohamed_Rafeek_Resume'> Download  <img src={download} className="download"></img></a> 

          </div>

        
       </div>
       </div>

// </div>
  )

  
}
