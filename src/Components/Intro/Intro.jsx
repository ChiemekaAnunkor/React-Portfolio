import React, { useContext } from "react";
import "../../App.css"
import "./Intro.css"
import Github from "../../img/github.png"
import LinkedIn from "../../img/linkedin.png"
import Instagram from "../../img/instagram.png"
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/chiemeka.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";

import { motion } from "framer-motion";

    const Intro = () => {
        const transition = { duration: 2, type: "spring" };
         // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
        return (
            <div className="Intro">
                <div className="i-left">
                    <div className="i-name">
                    <span>Hi! I Am </span>
                    <span>Chiemeka Anunkor </span>
                    <span>I am a software developer with a focus on front end.</span>
                </div>
                <button className="button i-button">Hire me</button>
                <div className="i-icons">
                    <a href="">
                    <img src={Github} alt=""></img>
                    </a>
                    <a href="">
                    <img src={LinkedIn} alt=""></img>
                    </a>
                    <a href="">
                    <img src={Instagram} alt=""></img>
                    </a>
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt=""></img>
                <img src={Vector2} alt=""></img>
                <img src={boy} alt=""></img>
                <motion.img 
                initial={{left:"-36%"}}
                whileInView={{left:"-24%"}}
                transition={transition}
                src={glassesimoji} alt=""/>

                <motion.div 
                 initial={{ top: "-4%", left: "74%" }}
                 whileInView={{ left: "68%" }}
                 transition={transition}
                 className="floating-div"
                 >
                    <FloatingDiv image={crown} txt1='Web' txt2='Developer'/>
                </motion.div>
                <motion.div 
                initial={{ left: "9rem", top: "18rem" }}
                whileInView={{ left: "0rem" }}
                transition={transition}
                className="floating-div"
                >
                    <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award'/>
                </motion.div>
                {/* blur divs behind the floating divs */}
                {/* <div className="blur" style={{background: "rgba(238 210 255)" }}></div> */}

                <div className="blur blur-3xl ...">
                <div style={{background: "rgba(238 210 255)" }}></div>
                </div>



                <div className="blur blur-3xl ..." style={{background: '#C1F5FF', top:'17rem', width:'21rem', height: '11rem', left:'-9rem' }}></div>
                <div className="blur blur-3xl ..." style={{background: '#ffff00', top:'-5rem', width:'10rem', height: '8rem', left:'-11rem' }}></div>

            </div>
        </div>
        )
}
 
export default Intro;
;