import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Experiences from './components/Experiences';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <About />
        <Skills />
        <Achievements />
        <Experiences />
      </main>
      <Footer />
    </div>
  );
}

