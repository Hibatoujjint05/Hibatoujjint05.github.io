import React, { useEffect, memo } from "react";
import { Mail, Github, Linkedin, Sparkles } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactPage = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section
      id="Contact"
      className="min-h-[80vh] bg-navy text-white flex flex-col justify-center items-center px-[5%] sm:px-[5%] lg:px-[10%] py-20"
    >
      {/* Header */}
      <div className="text-center mb-12" data-aos="zoom-in-up">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold to-lightgold">
          Let’s Get in Touch
        </h2>
        <p
          className="mt-3 text-gray-300 max-w-2xl mx-auto text-base sm:text-lg flex justify-center gap-2"
          data-aos="fade-up"
        >
          <Sparkles className="w-5 h-5 text-gold" />
          Feel free to reach out for collaboration or just to say hi!
          <Sparkles className="w-5 h-5 text-gold" />
        </p>
      </div>

      {/* Contact Buttons */}
      <div
        className="flex flex-wrap justify-center gap-5"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {/* Email */}
        <a
          href="mailto:hiba.toujjint@example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative px-6 py-3 rounded-xl border border-gold/40 bg-white/5 hover:bg-gold/10 transition-all duration-300 flex items-center gap-3"
        >
          <Mail className="w-5 h-5 text-gold group-hover:text-lightgold transition-colors" />
          <span className="text-gray-200 group-hover:text-white font-medium">
            Email Me
          </span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Hibatoujjint05"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative px-6 py-3 rounded-xl border border-gold/40 bg-white/5 hover:bg-gold/10 transition-all duration-300 flex items-center gap-3"
        >
          <Github className="w-5 h-5 text-gold group-hover:text-lightgold transition-colors" />
          <span className="text-gray-200 group-hover:text-white font-medium">
            GitHub
          </span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/hiba-toujjint"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative px-6 py-3 rounded-xl border border-gold/40 bg-white/5 hover:bg-gold/10 transition-all duration-300 flex items-center gap-3"
        >
          <Linkedin className="w-5 h-5 text-gold group-hover:text-lightgold transition-colors" />
          <span className="text-gray-200 group-hover:text-white font-medium">
            LinkedIn
          </span>
        </a>
      </div>

      {/* Footer text */}
      <p
        className="mt-12 text-gray-400 text-sm text-center"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        © {new Date().getFullYear()} Hiba Toujjint — Designed with 💛 & ☕
      </p>
    </section>
  );
};

export default memo(ContactPage);
