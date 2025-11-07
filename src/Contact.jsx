import React, { useState } from "react";

function Contact() {
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`✨ Booking confirmed for ${service} on ${date} at ${time}!`);
    setService(""); setDate(""); setTime("");
  };

  return (
    <div className="contact-page">
      <form
        onSubmit={handleSubmit}
        style={{
          background: "rgba(0,0,0,0.65)",
          padding: "2.5rem 3rem",
          borderRadius: "24px",
          boxShadow: "0 0 40px rgba(255,215,0,0.2)",
          width: "400px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            marginBottom: "1.5rem",
            fontSize: "2.5rem",
            textShadow: "0 0 25px #E5EB83",
          }}
        >
          Book Your Reading ✨
        </h1>

        {/* Service selection */}
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          required
          style={selectStyle}
        >
          <option value="">Select a service</option>
          <option value="Numerology">🔢 Numerology</option>
          <option value="Tarot">🔮 Tarot Reading</option>
          <option value="Vastu">🏛️ Vastu Consulting</option>
          <option value="Reiki">🌸 Reiki Healing</option>
          <option value="Crystal">💎 Crystal Therapy</option>
        </select>

        {/* Date & time pickers */}
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          style={inputStyle}
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          style={inputStyle}
        />

        <button
          type="submit"
          style={{
            marginTop: "1.5rem",
            background: "#E5EB83",
            color: "black",
            fontSize: "1.1rem",
            border: "none",
            padding: "12px 24px",
            borderRadius: "10px",
            cursor: "pointer",
            boxShadow: "0 0 20px rgba(255,215,0,0.4)",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
            e.currentTarget.style.boxShadow = "0 0 30px rgba(255,215,0,0.7)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 0 20px rgba(255,215,0,0.4)";
          }}
        >
          Book Session
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  margin: "0.6rem 0",
  padding: "12px",
  borderRadius: "8px",
  border: "none",
  outline: "none",
  fontSize: "1rem",
};

const selectStyle = {
  ...inputStyle,
  backgroundColor: "white",
  color: "black",
};

export default Contact;
