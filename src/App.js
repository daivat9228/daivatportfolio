import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Techstack from './components/Techstack';
import Timeline from './components/Timeline.jsx';
import Contact from "./components/Contact.jsx"
import Footer from "./components/Footer.jsx"


function App() {
  return (
    <>
    <div className="App">
       <Navbar/>
       <Intro/>
       <Techstack/>
       <Timeline/>
       <Contact/>
       <Footer/>
    </div>
    </>
  );
}

export default App;
