//import logo from './logo.svg';
import './App.css';
import Name from './Name';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import Spiritual from "./Spiritual"
import Motivational from "./Motivational.jsx"
import Numerology from "./Numerology"
import Tarot from "./Tarot"
import Reiki from "./Reiki"
import Vastu from "./Vastu"
import Yantra from "./Yantra"
import Crystal from "./Crystals"
import Contact from "./Contact"
import About from './About.jsx';
import Corporate from './Corporate.jsx';
import Signature from './Signature.jsx';


function App() {
  return (
    <BrowserRouter basename="/rinashahprofile">
    <div className="App">
          </div>
          <Routes>
            <Route path="/" element={<Name />} />
            <Route path="/spiritual" element={<Spiritual />} />
            <Route path="numerology" element={<Numerology />} />
            <Route path="tarot" element={<Tarot />} />
            <Route path="reiki" element={<Reiki />} />
            <Route path="vastu" element={<Vastu />} />
            <Route path="yantra" element={<Yantra />} />
            <Route path="crystal" element={<Crystal />} />
            <Route path="/motivational" element={<Motivational />} />
            <Route path="/corporate" element={<Corporate />} />
            <Route path="/signature" element={<Signature />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>

    </BrowserRouter>
  );
}

export default App;
