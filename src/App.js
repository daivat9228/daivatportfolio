import React, { Suspense, useState, useRef, useContext } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Preloader from './components/Preloader';
import { ThemeContext } from './Context';

// Lazy load heavy components
const Techstack = React.lazy(() => import('./components/Techstack'));
const Timeline = React.lazy(() => import('./components/Timeline'));
const Contacts = React.lazy(() => import('./components/Contacts'));
const Hobby = React.lazy(() => import('./components/Hobby.jsx'));
const Project = React.lazy(() => import('./components/Project.jsx'));
const Foooter = React.lazy(() => import('./components/Foooter'));



function App() {
  const [loading, setLoading] = useState(true);
  const projectRef = useRef(null);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handlePreloadComplete = () => {
    setLoading(false);
  };

  if (loading) {
    return <Preloader onComplete={handlePreloadComplete} />;
  }
  
  return (
    <>
    <div className={`App ${darkMode ? 'dark-theme' : 'light-theme'}`}>
       <Navbar/>
       <Intro/>
       <Suspense fallback={<div>Loading...</div>}>
         <Techstack/>
         <Hobby/>
         <Timeline/>
         <Project ref={projectRef}/>
         <Foooter/>
       </Suspense>
    </div>
    <Contacts projectRef={projectRef}/>
    </>
  );
}

export default App;
