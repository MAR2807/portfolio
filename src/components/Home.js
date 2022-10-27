
import { motion } from 'framer-motion';
import { useRef } from 'react';
import notes from './images/notes.png';
import weather from './images/weather2.png';
import portfolio from './images/portfolio.png';
import abc1 from './images/abc1.png';
import resume1 from './images/abc1.png';
import tictactoe10 from './images/tictactoe10.png';

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
    
    <div class = "introM">

      
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
    
 


    <motion.div className = "navTop"> 
         <ul className="navTop"> 
           <motion.li className ="navTop" whileHover={{scale:1.1}} onClick={() => scrollToSection(projects)}><button className ="navTop">Projects</button></motion.li>
           <motion.li className ="navTop" whileHover={{scale:1.1}} onClick={() => scrollToSection(about)}><button className ="navTop">About</button></motion.li>
           <motion.li className ="navTop" whileHover={{scale:1.1}} onClick={() => scrollToSection(resume)}><button className ="navTop">Resume</button></motion.li>
           <motion.li className ="navTop" whileHover={{scale:1.1}} onClick={() => scrollToSection(contact)}><button className ="navTop">Contact</button></motion.li>
           
           
         </ul>
         
       </motion.div>
      


    <motion.div  onClick={() => scrollToSection(projects)} className = "down_arrow"> <motion.img initial={{opacity:0, y:10}} animate = {{ y:80, opacity:1}}  transition={{duration:1, yoyo:Infinity, delay:4}}  className="down_arrow" src ="http://visualeyespdx.com/wp-content/uploads/2015/08/vec_down_arrow.png" alt ="down_Arrow"></motion.img>
        
    </motion.div>
    <div className='mainContainer'>
      <div className=" container projects" ref={projects}>
     
        <div className="project1"> 
       <div className=' container'> <h1 className='project_title_1'>Projects</h1> </div>
        <div className='info_p1'>
          <h1> Notes App</h1>
            <a href="https://noteify-app-c0702d.netlify.app/" target="_blank" rel="noreferrer"> <button className="projectLinks1"> Notes App: live website </button></a>
            <a href="https://github.com/MAR2807/notes-app" target="_blank" rel="noreferrer"> <button className="projectLinks1"> Notes App: Github </button></a>
            <p> A notes app made using firebase and firestore api from google. Has features that allow users to sign up, sign in and upload notes which can be viewed from anywhere.(Authentication and API) </p>
        </div>
        <div className=' p1_container'>
          <div className='img_p1_1'>
            <img src={notes} className='notes-image' alt = "notes-app"></img>
          </div>
            
        </div>
        </div>
          
        <div className="project2">
            <div className='info_p2'>
            <h1> Weather App</h1>
               <a href="https://github.com/MAR2807/weather-app" target="_blank" rel="noreferrer"> <button className="projectLinks1"> Weather App: Github</button></a>
            <p> My first project, a simple weather app using an api to pull data for a given city. Uses openweathermap API </p>
          </div>
          <div className='p2_container'>
          <div className='img_p2_2'>
            <img src={weather} className='weather-image' alt = "weather App"></img>
            </div>
            </div>

        </div>

        <div className="project3"> 
        <div className='info_p3'>
        <h1> Portfolio </h1>
            <a href="https://mohamedrafeek.netlify.app/" target="_blank" rel="noreferrer"> <button className="projectLinks1"> My portfolio </button></a>
            <p> This website is one of my recent projects. It was built to show my projects and resume.</p>
        </div>
        <div className='p3_container'>
        <div className='img_p3_3'>
        <img src={portfolio} className='portfolio1' alt = "portfolio"></img>
        </div>
        </div>
        </div>

        <div className="project4"> 
        <div className='info_p4'>
        <h1> Tictactoe </h1>
            <a href="https://github.com/MAR2807/tictactoe" target="_blank" rel="noreferrer"> <button className="projectLinks1"> Github </button></a>
            <p> A tictactoe game I made using Javascript and React</p>
        </div>
        <div className='p4_container'>
        <div className='img_p4_4'>
        <img src={tictactoe10} className='tictactoe' alt = "tictactoe"></img>
        </div>
        </div>
        
        </div>
        

      </div>
       <div className="about" ref={about}> 
       <div className="container"><h1 className='about-title'>About </h1></div>
          <div className="container about-info">
            
            <p className = "about-info">   
                  Hi, my name is Mohamed. I graduated from Edison Highschool as class of 2019 and I am currently attending 
                   Middlesex College to complete my associates degree for computer science. 
                   I have completed most of my requirements and I will be graduating this december with an associates in computer science. I prefer to 
                   work with Javascript using the React framework but I am also proficient in Java, PHP, and SQL.
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
       <div className="container"><h1 className='resumeTitle'>Resume</h1></div>
          <div className='resumeContainer'>
          
              {/* <iframe className='resumePDF' src={resume1} ></iframe> */}
              <img src={resume1}></img>
        
           
          </div> 

        
       </div>
       </div>
    
</div>
  )

  
}
