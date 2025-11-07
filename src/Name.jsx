import React, { useState, useEffect } from "react";
import {Router, Routes, Route, Link} from "react-router-dom"

function Name() {
  const [displayed, setDisplayed] = useState(""); // what’s been "typed" so far
  let text = "Riina D. Shah"// default text if none provided
  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < text.length -1) {
        setDisplayed(prev => prev + text[index]); // reveal next letter
        index++; 
      } else {
        clearInterval(interval); // stop when done
      }
    }, 350); // typing speed in milliseconds

    // Cleanup: stop timer if component unmounts or text changes
    return () => clearInterval(interval);
  }, [text]); // run effect when 'text' prop changes
  const services = [
    {label: "Services:", link: null},
    {label: "Spiritual", link: "/spiritual"}, 
    {label: "Motivational", link: "/motivational"},
    {label: "Bookings", link: "/contact"},
  ];
  const ServicesStyle= {
    backgroundColor: "white",
    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
  }

  const serviceStyles = {
    fontFamily: "'Dancing Script', cursive",
    fontSize: "3vw",
    // backgroundColor: "white",
    color: "#e0bb7f",
    // backgroundOpacity: "0.5",
    width: "10vw",
    // borderRadius: "40%",
    // boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
    marginLeft: "1%",
    marginRight: "1%",
  };
  const verticalText = 
  {display: "flex",
  gap: "1rem",
  flexDirection: "column",
  alignItems: "center",
  fontFamily: "'Dancing Script', cursive",
  fontSize: "40px",

  width: "25vw"};
return (
  <div>
    <div
      style={{
        position: "fixed",
        bottom: "40px",
        left: 0,
        right: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.5rem",
        // background: "linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.9))"
        padding: "20px 0"
      }}
    >
      <h1
        className="name"
        style={{
          fontFamily: "'Dancing Script', cursive",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          fontSize: "clamp(40px, 4vw, 60px)",
          textAlign: "center",
          margin: 0,
          color: "black"
        }}
      >
        {displayed}
      </h1>

      <div
        style={{
          fontFamily: "'Dancing Script', cursive",
          fontSize: "clamp(30px, 3vw, 48px)",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          borderRadius: "10px",
          // padding: "5px 15px",
          textAlign: "center",
          margin: 0,
          maxWidth: "80%",
          color: "#666"
        }}
      >
        <b style={{color: "blue"}}>    Holistic Healer/Spiritual and Personal Wellness Coach </b>
        <br />
        {/* <p  style={{padding: 0, margin: 0}}> (Awaken your Personal and Spiritual Power) </p> */}
      </div>
      <div style={{display: "inline"}}>
      <Link to="/about">  <button style={{fontFamily: "'Dancing Script', cursive", fontSize: "clamp(40px, 3vw, 48px)"}}> About Me </button> </Link>
      <Link to="/spiritual">  <button style={{fontFamily: "'Dancing Script', cursive", fontSize: "clamp(40px, 3vw, 48px)"}}> Services </button> </Link>
      </div>
    </div>
            {/* <div style={{
                  flexDirection: "column",
                  alignItems: "flex-end", // push to right
                  justifyContent: "center",
                      display: "block",
                      marginLeft: "70%",
                      marginTop: "10%", 
                      fontFamily: "'Dancing Script', cursive",
                      fontSize: "20vw",
                      //writingMode: "vertical-rl", // 👈 key property
        //textOrientation: "upright", // keeps letters upright
        }}>
          <ul style={verticalText}>
          {services.map(service => (<Link to={service.link} style={{marginRight: "5rem", display: "block", textDecoration: "none", }}> <span style={{...serviceStyles, backgroundColor: "white", display: "block", width: "100%"}} key={service}
          onMouseEnter={(e) => {
            if (service.label !== "Services:") {
            e.currentTarget.style.boxShadow = "2px 2px 2px 2px #f3ce92 ";
            e.currentTarget.style.transform = "scale(1.5)";
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.transform = "scale(1.00)";
          }}
          onClick={(e) => {
          }}
          > {service.label} </span> </Link>))} </ul>
          </div> */}
  </div>
);
}


























    // <div>
    //   <span style={{
    //       width: "70%",
    //       borderRadius: "10%",
    //     }}>
    //   <h1 className = "name" style={{
    //     fontFamily: "'Dancing Script', cursive",
    //     fontSize: "50px",
    //     textAlign: "center",
    //     marginBottom: "20%",
    //   }}>{displayed}</h1>

    //   <h3 style={{
    //     display: "inline-block",
    //     fontFamily: "'Dancing Script', cursive",
    //     fontSize: "32px",
    //     backgroundColor: "white",
    //     borderRadius: "10%",
    //     marginLeft: "36%",
    //     textAlign: "center",
    //     maxwidth: "40vw",
    //     paddingLeft: "-50%",
    //     marginBottom: "-25%",
    //   }}>            Spiritual Counsellor and Guide         </h3> 
    //         </span>
    //   <span style={{
    //     display: "block",
    //     margin: "0 auto",
    //     fontFamily: "'Dancing Script', cursive",
    //     fontSize: "40px",
    //     marginRight: "-80%",
    //     marginTop: "-25%",
    //     columnCount: "1",
    //     //writingMode: "vertical-rl", // 👈 key property
    //     //textOrientation: "upright", // keeps letters upright
    //     }}>
    //       <ul style={verticalText}>
    //       {services.map(service => (<button style={serviceStyles} key={service}> {service} </button>))} </ul>
    //       </span>
    // </div>


export default Name;


//{ display: "flex", justifyContent: "center",listStyle: "none", padding: "0%", gap: "1rem" }