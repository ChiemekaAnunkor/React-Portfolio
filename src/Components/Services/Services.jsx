import React from "react";
import "./Services.css"
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "./Resume.txt"
import { motion } from "framer-motion";


const Services = () => {

    const transition = {
        duration: 1,
        type: "spring",
      };
    return (
        <div className="services" id="services">
            {/* left */}
            <div className="awesome">
                <span>My Awesome</span>
                <span>Services</span>
                <span>sdjsdkl jslajslkjsldkfjsdl fjsldkj  ewrwerwe rwerwer qwewerwerwerwer dsdfsdfsdfsdf<br/> flskdjflk sjdflskdfkj</span>
                <a href={Resume} download>
                <button className="button s-button" >Download Resume</button>
                </a>
                <div className=" blur s-blur1 blur-3xl ..." style={{background: '#ABF1FF94' }}></div>
            </div>
            {/* right */}
            <div className="cards">

                <motion.div initial={{ left: "25rem" }} whileInView={{ left: "13rem" }} transition={transition}>
                    <Card emoji={HeartEmoji} heading={'Backend'} detail={'nodejs, Java, springboot ,npm'} />
                </motion.div>

                <motion.div  initial={{ left: "-11rem", top: "12rem" }} whileInView={{ left: "-4rem" }} transition={transition}>
                <Card emoji={Glasses} heading={'Developer'} detail={'html, Css, JavaScript, React, tailwind'} />
                </motion.div>

                <motion.div initial={{ top: "19rem", left: "25rem" }} whileInView={{ left: "12rem" }} transition={transition}>
                <Card emoji={Humble} heading={'Data Analysis'} detail={'Poython, pandas, matplotlib, numpy'} />
                </motion.div>

                <motion.div   initial={{ top: "19rem", left: "40rem" }} whileInView={{ left: "30rem",top: "13rem" }} transition={transition}>
                <Card emoji={Humble} heading={'DataBases'} detail={'Sql, mongodb, postman, redux'} />
                </motion.div>

                <div className=" blur s-blur2 blur-3xl ..."style={{background: "var(--purple)" }}></div>

            </div>
        </div>)
}
 
export default Services;