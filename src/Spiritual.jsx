import {React, useState, useEffect} from "react"
import { Link, Outlet } from "react-router-dom"
import "./Spiritual.css"

function Spiritual(){
    const services = [
    {label: "Numerology Discovery", link: "/numerology"},
    {label: "Vastu Consulting", link: "/vastu"},  
    {label: "Tarot Reading", link: "/tarot"},
    {label: "Yantra Energies", link: "/yantra"},
    {label: "Reiki Healing", link: "/reiki"},
    {label: "Crystal Healing", link: "/crystal"},
    {label: "Corporate Trainings", link: "/corporate"},
    {label: "Motivational Sessions", link: "/motivational"},
    {label: "Signature Analysis", link: "/signature"},
];
      const [visibleLetters, setVisibleLetters] = useState("");
  const text = "Seervices Offered";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setVisibleLetters((prev) => prev + text[i]);
      i++;
      if (i >= text.length -1) clearInterval(interval);
    }, 300);
    return () => clearInterval(interval);
  }, []);



    return (
        <div className="spiritual-page">
    <h1 style={{display: "inline", backgroundColor: "black", width: "10vw", textShadow: "0 0 20px #E5EB83", marginLeft: "35%", fontSize: "clamp(45px, 12vw, 90px)", color:"white",}}>{visibleLetters}</h1>
    <div style={{
    maxWidth: "clamp(60%, 100vw, 100%)",
    marginTop: "20%",
    display: "grid",
  gridTemplateColumns: "repeat(3, minmax(clamp(100px, 20vw, 400px), 1fr))",
    gap: "1rem",
    justifyItems: "center",                // centers each button horizontally
}}>
            {services.map((service, index) => (
              <Link to={service.link} style={{textDecoration: "none"}}> 
                <button style={{color: "black", margin: "0", padding: "10px", fontSize: "clamp(24px, 2vw, 60px)", borderRadius: "8px", lineHeight: "1", boxShadow: "0 0 20px rgba(255, 215, 0, 0.4)", background: "#E5EB83", Opacity: "0.6"}} key={index}
                onMouseOver={e => {e.currentTarget.style.boxShadow = "0 0 20px rgba(255,215,0,0.7)"; e.currentTarget.style.transform = 'scale(1.25)';}}
  onMouseOut={e => {e.currentTarget.style.boxShadow = "0 0 12px rgba(255,215,0,0.3)"; e.currentTarget.style.transform = 'scale(1.0)'}}
                >
                    {service.label}
                </button>
                </Link>
            ))}
            </div>
        </div>
        );}

export default Spiritual;