import React from "react";
import './Works.css'
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { motion } from "framer-motion";


 
const Works = () => {
    return (
        <div className="works"> 
                <div className="w-left">
                <div className="awesome">
                <span>Works for all These</span>
                <span>Brands & Clients</span>
                <span>sdjsdkl jslajslkjsldkfjsdl fjsldkj  ewrwerwe rwerwer erer <br/>
                sdsdfsdfsdfsdfsdfs sdfsdfsdf dsfsdfsdfsdf<br/>
                 flskdjflk sjdflskdfkj erwrwer werwerw</span>
            
                <button className="button s-button">Download Resume</button>
                <div className="blur s-blur1" style={{background: '#ABF1FF94' }}></div>
                </div>
            </div>
            {/* right side */}

            <div className="w-right">
              <motion.div
                initial={{ rotate: 45 }}
                whileInView={{ rotate: 0 }}
                viewport={{ margin: "-40px" }}
                transition={{ duration: 3.5, type: "spring" }}
                className="w-mainCircle"
              >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
    )
}
 
export default Works;