import "./App.css";
import Header from "./components/Header";
import ContactBox from "./components/ContactBox";
import FeaturedBox from "./components/FeaturedBox";
import Footer from "./components/Footer";
import ProjectsBox from "./components/ProjectsBox";
import AboutBox from "./components/AboutBox";
import Typed from "typed.js";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    /** Type Effect */
    const typingEffect = new Typed(".typedText", {
      strings: ["Lecturer", "Developer", "Researcher"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000,
    });
    return () => {
      typingEffect.destroy();
    };
  }, []);

  return (
    <>
      <div className="App">
        <Header />
        <main className="wrapper">
          <FeaturedBox />
          <AboutBox />
          <ProjectsBox />
          <ContactBox />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
