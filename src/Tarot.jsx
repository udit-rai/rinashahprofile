import React from "react"
import {Link} from "react-router-dom"
import styles from "./Spiritual.css"

function Tarot(){
     return (
       <div className="tarot-page">
       {/* <h1 style={{display: "inline", backgroundColor: "black", width: "100%", textShadow: "0 0 20px #E5EB83", marginLeft: "50%",fontSize: "48px", color:"white",}}>Numerology </h1> */}
           <p style={{
       background: "rgba(0, 0, 0, 0.6)",
       marginTop: "20%",
       color: "#F9F9F9",
       fontSize: "clamp(20px, 1.5vw, 40px)",
       lineHeight: "1.8",
       letterSpacing: "0.5px",
       textAlign: "center",
       borderRadius: "20px",
       padding: "30px 40px",
       margin: "5% auto",
       maxWidth: "70%",
       boxShadow: "0 0 25px rgba(255, 215, 0, 0.25)",
       fontFamily: "'Cormorant Garamond', serif",
     }}>      
              Tarot isn’t about predicting doom—it’s a cozy coffee-date with your intuition. I shuffle, lay the cards, and we talk through what’s showing up in your love life, work, or that decision keeping you up at night. You leave with “aha” moments and a lighter heart.   
               <br /><br />
           </p>
   
           <Link to="/Contact" style={{ textDecoration: "none" }}>
     <button
       style={{
         color: "white",
         backgroundColor: "black",
       //   margin: "5% auto"
         marginLeft: "40%",
         border: "none",
         borderRadius: "10px",
         padding: "12px 24px",
         fontSize: "20px",
         cursor: "pointer",
         boxShadow: "0 0 15px rgba(255, 215, 0, 0.5)",
       }}
       onMouseOver={(e) => (e.currentTarget.style.boxShadow = "0 0 25px rgba(255,215,0,0.8)", e.currentTarget.style.transform = 'scale(1.5)')}
       onMouseOut={(e) => (e.currentTarget.style.boxShadow = "0 0 15px rgba(255,215,0,0.5)", e.currentTarget.style.transform = 'scale(1.0)')}
     >
       Book a session
     </button>
   </Link>
       </div>
       );
}

export default Tarot;