import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardProject from "../components/CardProject";
import TechStackIcon from "../components/TechStackIcon";
import AOS from "aos";
import "aos/dist/aos.css";
import { Code, Boxes } from "lucide-react";

const ToggleButton = ({ onClick, isShowingMore }) => (
  <button
    onClick={onClick}
    className="
      px-3 py-1.5 text-gray-300 hover:text-white text-sm font-medium
      transition-all duration-300 flex items-center gap-2
      bg-white/5 hover:bg-white/10 rounded-md border border-white/10
      hover:border-white/20 backdrop-blur-sm group relative overflow-hidden
    "
  >
    <span className="relative z-10 flex items-center gap-2">
      {isShowingMore ? "See Less" : "See More"}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`transition-transform duration-300 ${
          isShowingMore ? "rotate-180" : "rotate-0"
        }`}
      >
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold to-lightgold transition-all duration-300 group-hover:w-full"></span>
  </button>
);

function TabPanel({ children, value, index, ...other }) {
  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 3 } }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const techStacks = [
  { icon: "python.svg", language: "Python" },
  { icon: "sql.svg", language: "SQL" },
  { icon: "tkinter.svg", language: "Tkinter" },
  { icon: "pygame.svg", language: "Pygame" },
  { icon: "tailwind.svg", language: "Tailwind CSS" },
  { icon: "javascript.svg", language: "JavaScript" },
  { icon: "reactjs.svg", language: "ReactJS" },
  { icon: "mui.svg", language: "Material UI" },
  { icon: "vite.svg", language: "Vite" },
  { icon: "vercel.svg", language: "Vercel" },
];

export default function Portfolio() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const [projects] = useState([
    {
      id: 1,
      Title: "Inventory Management System",
      Description:
        "A Tkinter-based desktop app connected to a MySQL database for managing products, stock entries, and reports with a user-friendly interface.",
      Img: "/images/inventory.png",
      Link: "https://github.com/Hibatoujjint05/InventoryManagementSystem",
    },
    {
      id: 2,
      Title: "Scheduler Battle",
      Description:
        "An interactive two-player Pygame that teaches CPU scheduling algorithms like FCFS, SJF, and Round Robin through a quiz-style competition.",
      Img: "/images/schedulerbattle.png",
      Link: "https://github.com/Hibatoujjint05/SchedulerBattle",
    },
  ]);

  const initialItems = window.innerWidth < 768 ? 4 : 6;

  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  const toggleShowMore = () => setShowAllProjects((prev) => !prev);

  const displayedProjects = showAllProjects
    ? projects
    : projects.slice(0, initialItems);

  return (
    <div
      className="md:px-[10%] px-[5%] w-full mt-[3rem] bg-navy overflow-hidden"
      id="Portfolio"
    >
      <div className="text-center pb-10" data-aos="fade-up">
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold to-lightgold">
          My Projects & Skills
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          A glimpse into what I’ve built and learned along my journey as an
          Applied Computer Science student.
        </p>
      </div>

      <Box sx={{ width: "100%" }}>
        <AppBar
          position="static"
          elevation={0}
          sx={{
            bgcolor: "transparent",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "20px",
          }}
          className="md:px-4"
        >
          <Tabs
            value={value}
            onChange={(e, newVal) => setValue(newVal)}
            textColor="secondary"
            indicatorColor="secondary"
            variant="fullWidth"
            sx={{
              minHeight: "70px",
              "& .MuiTab-root": {
                fontSize: { xs: "0.9rem", md: "1rem" },
                fontWeight: "600",
                color: "#d1d5db",
                textTransform: "none",
                margin: "8px",
                borderRadius: "12px",
                transition: "all 0.3s",
                "&.Mui-selected": {
                  color: "#fff",
                  background:
                    "linear-gradient(135deg, rgba(217,185,124,0.25), rgba(235,217,169,0.25))",
                  boxShadow: "0 4px 15px -3px rgba(217,185,124,0.25)",
                },
              },
              "& .MuiTabs-indicator": { height: 0 },
              "& .MuiTabs-flexContainer": { gap: "8px" },
            }}
          >
            <Tab icon={<Code />} label="Projects" {...a11yProps(0)} />
            <Tab icon={<Boxes />} label="Tech Stack" {...a11yProps(1)} />
          </Tabs>
        </AppBar>

        {/* Animated tab content */}
        <AnimatePresence mode="wait">
          {value === 0 && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
            >
              <div className="container mx-auto flex justify-center items-center overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
                  {displayedProjects.map((project, index) => (
                    <div
                      key={index}
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <CardProject {...project} />
                    </div>
                  ))}
                </div>
              </div>
              {projects.length > initialItems && (
                <div className="mt-6 w-full flex justify-start">
                  <ToggleButton
                    onClick={toggleShowMore}
                    isShowingMore={showAllProjects}
                  />
                </div>
              )}
            </motion.div>
          )}

          {value === 1 && (
            <motion.div
              key="tech"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.4 }}
            >
              <div className="container mx-auto flex justify-center items-center overflow-hidden pb-[5%]">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
                  {techStacks.map((stack, index) => (
                    <div
                      key={index}
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <TechStackIcon {...stack} />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Box>
    </div>
  );
}
