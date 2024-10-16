import "./App.css";
import Header from "./components/Header";
import ContactBox from "./components/ContactBox";
import FeaturedBox from "./components/FeaturedBox";
import Footer from "./components/Footer";
import ProjectsBox from "./components/ProjectsBox";
import AboutBox from "./components/AboutBox";
import Typed from "typed.js";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    /** Scroll Reveal */
    const sections = document.querySelectorAll("section[id]");

    const scrollActive = () => {
      const scrollY = window.scrollY;
      sections.forEach((current) => {
        const sectionHeight = current.offsetHight,
          sectionTop = current.offsetTop - 50,
          sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document
            .querySelector(".nav-menu a[href*=" + sectionId + "]")
            .classList.add("active-link");
        } else {
          document
            .querySelector(".nav-menu a[href*=" + sectionId + "]")
            .classList.remove("active-link");
        }
      });
    };
    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    //Home
    sr.reveal(".featrue-text-card", {});
    sr.reveal(".featrue-name", { delay: 100 });
    sr.reveal(".featrue-text-card", { delay: 200 });
    sr.reveal(".featured-text-info", { delay: 200 });
    sr.reveal(".featured-text-btn", { delay: 200 });
    sr.reveal(".social_icons", { delay: 200 });
    sr.reveal(".featured-image", { delay: 200 });
    sr.reveal(".social_icons", { delay: 200 });

    //Project Box
    sr.reveal(".project-box", { interval: 200 });

    //Heading
    sr.reveal(".top-header", {});

    //Left-right Animation
    const srLeft = ScrollReveal({
      origin: "left",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    srLeft.reveal(".about-info", { delay: 200 });
    srLeft.reveal(".contact-info", { delay: 200 });
    sr.reveal(".col", { delay: 200 });

    const srRight = ScrollReveal({
      origin: "Right",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    srLeft.reveal(".skill-box", { delay: 200 });
    srLeft.reveal(".form-control", { delay: 200 });

    window.addEventListener("scroll", scrollActive);
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
