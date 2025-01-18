import React, { useState, useEffect } from 'react';
import './App.css';
import AboutMe from './Components/About Me';
import Footer from './Components/Footer';
import MyProjects from './Components/MyProjects';
import BestTeachers from './Components/MyTeachers';
import Nawbar from './Components/Nawbar';
// import Proficiency from './Components/Proficiency';
import Skills from './Components/Skills';
import Loader from './Components/Loading';
import SendMessage from './Components/YourMessage';
import MyCertificates from './Components/Certificates';
import MyCurses from './Components/Education';
 

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 3000); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader /> 
      ) : (
        <>
          <Nawbar />
             {/* <ThemeToggle /> */}
          <div className="all-sections">
            <AboutMe />
            <BestTeachers />
            <Skills />
            <Proficiency />
            <MyProjects />
            <MyCertificates />
            <MyCurses />
            <SendMessage />
          </div>

       

          <Footer />
        </>
      )}
    </>
  );
}

export default App;

