import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Techstack from './components/Techstack';
import Hobbies from "./components/Hobbies.jsx";
import Timeline from './components/Timeline';
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <>
    <div className="App">
       <Navbar/>
       <Intro/>
       <Techstack/>
       <Hobbies/>
       <Timeline/>
       <Contact/>
       <Footer/>
    </div>
    </>
  );
}

export default App;
