import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles/App.css';
import './styles/ProjectDetail.css';
import './styles/Works.css';
import './styles/Achievements.css';
import { motion, AnimatePresence } from "framer-motion";
import HomePage from "./HomePage";
import ProjectDetail from "./screens/ProjectDetail";
import MyLogo from "./images/MyLogo.png";

function App() {
  // States
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 4000)
  }, []);

  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.5 } }
  };

  const logoVariants = {
    hidden: {
      scale: 0,
      rotate: -180,
      opacity: 0
    },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.5
      }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.4 }
    }
  };

  const subtitleVariants = {
    hidden: {
      opacity: 0,
      y: 15
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 1.2
      }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  const progressVariants = {
    hidden: {
      width: "0%"
    },
    visible: {
      width: "100%",
      transition: {
        duration: 2.5,
        ease: "easeInOut",
        delay: 1.5
      }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div 
          key="loader"
          className="loader"
          initial={false}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
        >
          <div className="loader-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%' }}>
            <motion.div 
              className="logo-container"
              variants={logoVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="logo-image-wrapper">
                <motion.img src={MyLogo} alt="Logo" className="loader-img" layoutId="main-logo" />
              </div>
            </motion.div>
            <motion.div
              className="loader-fade"
              variants={fadeVariants}
              initial="visible"
              animate="visible"
              exit="exit"
              style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}
            >
              <motion.h1 
                className="loader-title"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                Selin Çifci
              </motion.h1>
              <motion.p 
                className="loader-subtitle"
                variants={subtitleVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                Mobile App Developer
              </motion.p>
              <motion.div 
                className="progress-container"
                variants={subtitleVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="progress-bar">
                  <motion.div 
                    className="progress-fill"
                    variants={progressVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      ) : (
        <motion.div 
          key="app"
          className="App"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Router>
            <Routes>
              <Route path="/" element={<HomePage showLogoTransition={!loading} />} />
              <Route path="/project/:projectTitle" element={<ProjectDetail />} />
            </Routes>
          </Router>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
