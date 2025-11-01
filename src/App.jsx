import React, { useEffect } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Portfolio from "./Pages/Portofolio";
import Contact from "./Pages/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import AnimatedBackground from './components/Background';

function App() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className="bg-navy text-white font-inter">
      <AnimatedBackground />
      {/* Navbar fixed at top */}
      <Navbar />

      {/* Main site sections */}
      <main>
        <section id="Home">
          <Home />
        </section>

        <section id="About">
          <About />
        </section>

        <section id="Portfolio">
          <Portfolio />
        </section>

        <section id="Contact">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-400 border-t border-white/10 pt-6 pb-8">
        <p className="text-sm">
          © {new Date().getFullYear()} <span className="text-gold font-semibold">Hiba Toujjint</span> — Designed with 💛 & ☕
        </p>
      </footer>
    </div>
  );
}

export default App;
