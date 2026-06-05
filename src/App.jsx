import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProcessSection from "./components/ProcessSection";
import ProjectsSection from "./components/ProjectsSection";

export default function App() {
  return (
    <>
      <header className="site-header" id="home">
        <Navbar />
        <HeroSection />
      </header>

      <main>
        <AboutSection />
        <ProjectsSection />
        <ProcessSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
