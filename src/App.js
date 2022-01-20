import { React, useState } from 'react';
import Intro from './components/Intro';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import corinne from './assets/images/corinne-portfolio.png';
import resume from './assets/images/resume-screenshot.png';


export default function App() {

  const ProfilePicture = () => {
    return (
      <img className="object-cover w-48 h-48 mb-6 rounded-full shadow-2xl sm:w-64 sm:h-64 mt-14" src={corinne} alt="headshot" />
    );
  };

  const ResumePic = () => {
    return (
      <img className="object-cover w-full h-full shadow-2xl" src={resume} alt="professional resume" />
    );
  };

  const [active, setActive] = useState(false);

  return (
    <div className="bg-pink-200">
      {!active && <Intro
        active={active}
        setActive={setActive}
      />}
      <main>
        {active && <Nav
          active={active}
          setActive={setActive}
        />}
        {active === "About" &&
          <>
            <About ProfilePicture={ProfilePicture} />
          </>}
        {active === "Portfolio" &&
          <>
            <Portfolio />
          </>}
        {active === "Resume" &&
          <>
            <Resume ResumePic={ResumePic}/>
          </>}
          {active === "Contact" &&
          <>
            <Contact />
          </>}
        {active && <Footer />}
      </main>
    </div>
  );
};