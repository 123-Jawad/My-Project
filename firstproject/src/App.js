import React from "react";
// import About from "./components/About";
import Footer from "./components/Footer";
// import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Owlcarousel from "./components/Owlcarousel";
// import Service from "./components/Service";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Standard from "./components/component2/Standard";
import Deluxe1 from "./components/component3/Deluxe1";
import Exective1 from "./components/component4/Exective1";
import Luxury1 from "./components/component5/Luxury1";
import Meeting1 from "./components/component6/Meeting1";
import Weeding1 from "./components/component7/Weeding1";
import Offer from "./components/component8/Offer";
import Contact from "./components/component8/Contact";
import Form from "./components/component8/Form";
import Slider from "./components/Slider";
import Owlcarousel2 from "./components/Owlcarousel2";

function App() {
  return (
    <div>
      <Router>
        
        <Routes>
          <Route path="" element={<Navbar />} />
          <Route path="/home" element={<Navbar />} />
          <Route path="/rooms and suites" element={<Owlcarousel />} />

          <Route path="/standard" element={<Standard />} />
          <Route path="/deluxe" element={<Deluxe1 />} />
          <Route path="/executive" element={<Exective1 />} />
          <Route path="/luxury" element={<Luxury1 />} />
          <Route path="/meeting" element={<Meeting1/>} />
          <Route path="/wedding and celebration" element={<Weeding1/>} />
          <Route path="/offer" element={<Offer/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/reservation" element={<Form/>} />
          <Route path="/slider" element={<Slider/>} />
          <Route path="/owlcarosel2" element={<Owlcarousel2/>} />



        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
