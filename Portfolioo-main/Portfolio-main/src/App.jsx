import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechnicalSkills from './components/TechnicalSkills';
import Services from './components/Services';
import Internships from './components/Internships';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Leadership from './components/Leadership';
import SoftSkills from './components/SoftSkills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <TechnicalSkills />
      <Services />
      <Internships />
      <Education />
      <Certificates />
      <Leadership />
      <SoftSkills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
