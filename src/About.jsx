import {React, useState, useEffect} from "react"
import {Link} from "react-router-dom"
import styles from "./Spiritual.css"

function About(){
    return (
    <div className="about-page">
    {/* <h1 style={{display: "inline", backgroundColor: "black", width: "100%", textShadow: "0 0 20px #E5EB83", marginLeft: "50%",fontSize: "48px", color:"white",}}>Numerology </h1> */}
    <div> 
        <p style={{
    background: "rgba(0, 0, 0, 0.6)",
    marginTop: "8%",
    marginBottom: "-100%",
    color: "#F9F9F9",
    fontSize: "clamp(20px, 1.5vw, 60px)",
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
            I’m Rina Dharmang Shah — a teacher and guide who loves helping people grow in life. I help you understand yourself better, build confidence, and find peace within. Every meeting is friendly, real, and meant to bring a little more light into your day.
            <br /><br />
        </p>
    </div>
    {/* <div
    style={{ marginTop: "10%" }}> 
        
                <Link to="/Contact" style={{ textDecoration: "none" }}>
<button
  style={{
    display: "block",
    color: "white",
    backgroundColor: "black",
    border: "none",
    borderRadius: "10px",
    padding: "12px 24px",
    fontSize: "20px",
    cursor: "pointer",
    boxShadow: "0 0 15px rgba(255, 215, 0, 0.5)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.boxShadow = "0 0 25px rgba(255,215,0,0.8)";
    e.currentTarget.style.transform = "scale(1.5)";
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.boxShadow = "0 0 15px rgba(255,215,0,0.5)";
    e.currentTarget.style.transform = "scale(1)";
  }}
>
  Book a session
</button>

        </Link>
        </div> */}
    </div>
    );
}

export default About;