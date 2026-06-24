import React, { Suspense, useState, useRef, useContext } from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/sections/Intro/Intro";
import Preloader from "./components/common/Preloader/Preloader";
import GlobalCursor from "./components/common/Cursor/Cursor";
import { ThemeContext } from "./context/ThemeContext";
import "./App.css";

// Lazy load heavy components
const Techstack = React.lazy(
  () => import("./components/sections/Techstack/Techstack"),
);
const Timeline = React.lazy(
  () => import("./components/sections/Timeline/Timeline"),
);
const Contacts = React.lazy(
  () => import("./components/sections/Contacts/Contacts"),
);
const Hobby = React.lazy(() => import("./components/sections/Hobby/Hobby"));
const Project = React.lazy(
  () => import("./components/sections/Project/Project"),
);
const Foooter = React.lazy(() => import("./components/common/Footer/Footer"));

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
      <GlobalCursor />
      <div className={`App ${darkMode ? "dark-theme" : "light-theme"}`}>
        <Navbar />
        <Intro />
        <Suspense fallback={<div>Loading...</div>}>
          <Techstack />
          <Hobby />
          <Timeline />
          <Project ref={projectRef} />
          <Foooter />
        </Suspense>
      </div>
      <Contacts projectRef={projectRef} />
    </>
  );
}

export default App;
