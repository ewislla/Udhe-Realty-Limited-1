import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import VisionMission from "./components/VisionMission";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <About />
      <VisionMission />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
