import React, { useEffect, memo, useMemo } from "react";
import { FileText, Code, Award, Globe, ArrowUpRight, Sparkles } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

// ----- Header -----
const Header = memo(() => (
  <div className="text-center lg:mb-8 mb-2 px-[5%]">
    <div className="inline-block relative group">
      <h2
        className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold to-lightgold"
        data-aos="zoom-in-up"
      >
        About Me
      </h2>
    </div>
    <p
      className="mt-2 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2"
      data-aos="zoom-in-up"
    >
      <Sparkles className="w-5 h-5 text-gold" />
      Turning curiosity and creativity into digital solutions
      <Sparkles className="w-5 h-5 text-gold" />
    </p>
  </div>
));

// ----- Profile Image -----
const ProfileImage = memo(() => (
  <div className="flex justify-end items-center sm:p-12 sm:py-0 sm:pb-0 p-0 py-2 pb-2">
    <div className="relative group" data-aos="fade-up">
      <div className="absolute -inset-6 opacity-[25%] z-0 hidden sm:block">
        <div className="absolute inset-0 bg-gradient-to-r from-gold via-lightgold to-gold rounded-full blur-2xl animate-spin-slower" />
        <div className="absolute inset-0 bg-gradient-to-l from-gold/50 via-lightgold/30 to-gold/50 rounded-full blur-2xl animate-pulse-slow opacity-40" />
      </div>

      <div className="relative">
        <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-[0_0_40px_rgba(217,185,124,0.3)] transform transition-all duration-700 group-hover:scale-105">
          <div className="absolute inset-0 border-4 border-gold/30 rounded-full z-20 transition-all duration-700 group-hover:border-lightgold/60" />
          <img
            src="/images/hiba.jpeg"
            alt="Hiba Toujjint"
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </div>
));

// ----- Stat Card -----
const StatCard = memo(({ icon: Icon, color, value, label, description, animation }) => (
  <div data-aos={animation} className="relative group">
    <div className="relative z-10 bg-navy/70 backdrop-blur-lg rounded-2xl p-6 border border-white/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full flex flex-col justify-between">
      <div className={`absolute -z-10 inset-0 bg-gradient-to-br ${color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>

      <div className="flex items-center justify-between mb-4">
        <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/10 transition-transform group-hover:rotate-6">
          <Icon className="w-8 h-8 text-gold" />
        </div>
        <span className="text-4xl font-bold text-white">{value}</span>
      </div>

      <div>
        <p className="text-sm uppercase tracking-wider text-gray-300 mb-2">{label}</p>
        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-400">{description}</p>
          <ArrowUpRight className="w-4 h-4 text-gold/70 group-hover:text-gold transition-colors" />
        </div>
      </div>
    </div>
  </div>
));

// ----- Main Component -----
const AboutPage = () => {
  const { totalProjects, totalCertificates, YearExperience } = useMemo(() => {
    const storedProjects = JSON.parse(localStorage.getItem("projects") || "[]");
    const storedCertificates = JSON.parse(localStorage.getItem("certificates") || "[]");

    const startDate = new Date("2023-09-01"); // start of your studies
    const today = new Date();
    const experience =
      today.getFullYear() -
      startDate.getFullYear() -
      (today < new Date(today.getFullYear(), startDate.getMonth(), startDate.getDate()) ? 1 : 0);

    return {
      totalProjects: storedProjects.length,
      totalCertificates: storedCertificates.length,
      YearExperience: experience,
    };
  }, []);

  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  const statsData = useMemo(
    () => [
      {
        icon: Code,
        color: "from-gold to-lightgold",
        value: totalProjects,
        label: "Projects",
        description: "Creative coding & UI design",
        animation: "fade-right",
      },
      {
        icon: Award,
        color: "from-lightgold to-gold",
        value: totalCertificates,
        label: "Certificates",
        description: "Learning achievements",
        animation: "fade-up",
      },
      {
        icon: Globe,
        color: "from-gold to-lightgold",
        value: YearExperience,
        label: "Years of Experience",
        description: "Continuous growth in tech",
        animation: "fade-left",
      },
    ],
    [totalProjects, totalCertificates, YearExperience]
  );

  return (
    <div
      className="h-auto pb-[10%] text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] mt-10"
      id="About"
    >
      <Header />

      <div className="w-full mx-auto pt-8 sm:pt-12 relative">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left side */}
          <div className="space-y-6 text-center lg:text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold"
              data-aos="fade-right"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-lightgold">
                Hello, I'm
              </span>
              <span className="block mt-2 text-gray-200">Hiba Toujjint</span>
            </h2>

            <p
              className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed text-justify"
              data-aos="fade-right"
            >
              I’m a student in Applied Computer Science passionate about exploring how data and
              technology can make everyday life smarter and more efficient.  
              My interests include **data science**, **software design**, and **problem-solving** that
              bridges creativity with logic.  
              I love building projects that reflect meaningful impact, innovation, and thoughtful design.
            </p>

            {/* Quote */}
            <div
              className="relative bg-gradient-to-br from-gold/10 via-transparent to-lightgold/10 border border-gold/30 rounded-2xl p-4 my-6 backdrop-blur-md shadow-2xl overflow-hidden"
              data-aos="fade-up"
            >
              <blockquote className="text-gray-300 text-center lg:text-left italic font-medium text-sm relative z-10 pl-6">
                "Technology is powerful when used with creativity and empathy."
              </blockquote>
            </div>

            {/* Buttons */}
            <div className="flex flex-col lg:flex-row gap-4">
              <a href="https://drive.google.com/" target="_blank">
                <button className="sm:px-6 py-2 sm:py-3 rounded-lg bg-gradient-to-r from-gold to-lightgold text-navy font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5" /> Download CV
                </button>
              </a>
              <a href="#Portfolio">
                <button className="sm:px-6 py-2 sm:py-3 rounded-lg border border-gold/50 text-gold font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 hover:bg-gold/10">
                  <Code className="w-4 h-4 sm:w-5 sm:h-5" /> View Projects
                </button>
              </a>
            </div>
          </div>

          {/* Right side */}
          <ProfileImage />
        </div>

        {/* Stats cards */}
        <a href="#Portfolio">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 cursor-pointer">
            {statsData.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </a>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes spin-slower {
          to {
            transform: rotate(360deg);
          }
        }
        .animate-pulse-slow {
          animation: pulse 3s infinite;
        }
        .animate-spin-slower {
          animation: spin-slower 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default memo(AboutPage);
