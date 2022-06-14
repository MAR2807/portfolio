
import { motion } from 'framer-motion';
import { useRef } from 'react';

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

      
    <motion.div className ="introDiv" initial={{opacity:1}} animate = {{x:-500}} exit={{opacity:0}} transition={{duration:1}}>

        <motion.h1 initial={{opacity:0}} animate={{opacity:1}} transition={{duration:3}} className="intro">Mohamed Rafeek</motion.h1>
       <motion.p className="desc1" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{ delay:1, duration:3}}> Software Developer</motion.p>
       <div className="links">
        <motion.ul className = "links" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{ delay:0, duration:3}} >

          <motion.li whileHover={{ scale:1.1, duration:1}}> <a href="https://github.com/MAR2807" target="_blank" rel="noopener noreferrer"> <img className = "github"src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt='Github'></img> </a></motion.li>
          <motion.li whileHover={{ scale:1.1, duration:1}}> <a href="https://www.linkedin.com/in/aflal-r-588900126/" target="_blank" rel="noopener noreferrer"> <img className = "linked"src="https://blog.waalaxy.com/wp-content/uploads/2021/01/LinkedIn-Symbole.png" alt='LinkedIn'></img> </a></motion.li> 

        </motion.ul>

        

       </div>
        
    </motion.div>
    
 


    <motion.div className = "navTop"> 
         <ul className="navTop"> 
           <motion.li className ="navTop" whileHover={{scale:1.1}} onClick={() => scrollToSection(projects)}><button className ="navTop">Projects</button></motion.li>
           <motion.li className ="navTop" whileHover={{scale:1.1}} onClick={() => scrollToSection(about)}><button className ="navTop">About</button></motion.li>
           <motion.li className ="navTop" whileHover={{scale:1.1}} onClick={() => scrollToSection(contact)}><button className ="navTop">Contact</button></motion.li>
           <motion.li className ="navTop" whileHover={{scale:1.1}} onClick={() => scrollToSection(resume)}><button className ="navTop">Resume</button></motion.li>
           
         </ul>
         
       </motion.div>
      


    <motion.div  onClick={() => scrollToSection(projects)} className = "down_arrow"> <motion.img initial={{opacity:0, y:10}} animate = {{ y:80, opacity:1}}  transition={{duration:1, yoyo:Infinity, delay:4}}  className="down_arrow" src ="http://visualeyespdx.com/wp-content/uploads/2015/08/vec_down_arrow.png" alt ="down_Arrow"></motion.img>
        
    </motion.div>

      <div className="projects" ref={projects}>
     <h1 className='projectHead'>Projects</h1>  
        <div className="project1"> <a href="https://noteify-app-c0702d.netlify.app/" target="_blank" rel="noreferrer"> <button className="projectLinks"> Notes App </button></a>
            <p> A notes app made using firebase and firestore api from google. Has features that allow users to sign up, sign in and upload notes which can be viewed from anywhere.(Authentication and API) </p>
        </div>
        <div className="project2"> <a href="/ChatApp" target="_blank"> <button className="projectLinks"> Weather App </button></a>
        <p> My first project, a simple weather app using an api to pull data for a given city. Uses openweathermap API </p>
        </div>
        <div className="project3"> <a href="/project3" target="_blank"> <button className="projectLinks"> My portfolio </button></a>
        <p> This website is one of my recent projects. </p>
        </div>
        

      </div>
       <div className="about" ref={about}> 
          <div className='about-info'>
            <h1>About </h1>
            <p>   My name is Mohamed. I graduated from Edison Highschool as class of 2019 and I am currently attending 
                   Middlesex County College to complete my associates degree for computer science. 
                   I have completed most of my requirements and hope to be graduating in less than 3 months. I was born in Sri Lanka and I moved to America in 2006 and 
                   I've been living in New Jersey ever since. I grew up in Fords,NJ and by the time I was in middle school I moved to Edison. I am an avid gamer, as of right now my favorite game
                  is Call of Duty: Warzone. I built my own PC just to play it. Building Pc's is also one of my hobbies, I like to tinker with parts and upgrade them every now and then. 
            </p>
          </div>
       
       </div>
       <div className="contact" ref={contact}> Contact </div>
       <div className="resume" ref={resume}> 
          <div>
            <h1>Resume</h1>
              <div className='education'> <h2> Education</h2>
                <p>Attended Edison Highschool from 2015 to 2019.
                    Enrolled in Middlesex County College in 2019. Although I have a college education, I like to learn as much as I can using the web and improve my skills whenever possible. 
                    I usually spend 4-8 hours coding or learning a day.
                    
                    </p>
              </div>
              <div className='skills'> <h2> Skills</h2>
                
                <li>Problem Solving</li>
                <li> Communication</li>
                <li>Time Management</li>
                <li>Critical Thinking Teamwork.</li>
                <li>Teamwork</li>
               

              </div>
              <div className='languages'> <h2> Languages / Frameworks </h2>
                <li> Java </li>
                <li> Javascript  ES6 </li>
                <li> PHP </li>
                <li> SQL </li>
                <li> HTML and CSS</li>
                <li> React </li>
              </div>
              
           
          </div> 

        
       </div>
 
    
</div>
  )

  
}
