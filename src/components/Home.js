
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

          <motion.li whileHover={{ scale:1.1, duration:1}}> <a href="https://pages.github.com/" target="_blank" rel="noopener noreferrer"> <img className = "github"src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt='Github'></img> </a></motion.li>
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
      projects 
        <div className="project1"> <a href="/project1" target="_blank"> <button className="projectLinks"> Notes App </button></a>
            <p> A notes app made using firebase and firestore api from google. Has features that allow users to sign up, sign in and upload notes which can be viewed from anywhere. </p>
        </div>
        <div className="project2"> <a href="/ChatApp" target="_blank"> <button className="projectLinks"> Weather App </button></a>
        <p> Description </p>
        </div>
        <div className="project3"> <a href="/project3" target="_blank"> <button className="projectLinks"> My portfolio </button></a>
        <p> Description </p>
        </div>
        

      </div>
       <div className="about" ref={about}> About </div>
       <div className="contact" ref={contact}> Contact </div>
       <div className="resume" ref={resume}> Resume </div>
 
    
</div>
  )

  
}
