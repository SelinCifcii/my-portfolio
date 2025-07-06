import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDocker, FaGithub, FaFigma } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiMysql, SiReact, SiExpo, SiSwift, SiKotlin, SiPostman, SiJira, SiJavascript, SiTypescript, SiFirebase, SiVercel } from "react-icons/si";
import { translations } from "../data/translations";
import "../styles/Skills.css";

const skillsData = {
  "Frontend Development": [
    { name: "HTML5", icon: <FaHtml5 />, color: "#e34c26" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#264de4" },
    { name: "JavaScript", icon: <SiJavascript />, color: "#f7df1e" },
    { name: "React", icon: <FaReact />, color: "#61dafb" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178c6" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "#fff" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38bdf8" },
  ],
  "Backend & Database": [
    { name: "Node.js", icon: <FaNodeJs />, color: "#3c873a" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#00ed64" },
    { name: "MySQL", icon: <SiMysql />, color: "#00758f" },
    { name: "Firebase", icon: <SiFirebase />, color: "#ffca28" },
  ],
  "Mobile Development": [
    { name: "React Native", icon: <SiReact />, color: "#61dafb" },
    { name: "Expo", icon: <SiExpo />, color: "#000" },
    { name: "Swift", icon: <SiSwift />, color: "#f05138" },
    { name: "Kotlin", icon: <SiKotlin />, color: "#7f52ff" },
  ],
  "Tools & Platforms": [
    { name: "Docker", icon: <FaDocker />, color: "#2496ed" },
    { name: "GitHub", icon: <FaGithub />, color: "#fff" },
    { name: "Postman", icon: <SiPostman />, color: "#ff6c37" },
    { name: "Jira", icon: <SiJira />, color: "#0052cc" },
    { name: "Figma", icon: <FaFigma />, color: "#f24e1e" },
    { name: "Vercel", icon: <SiVercel />, color: "#000" },
  ],
};

function SkillCard({ icon, name, color }) {
  return (
    <div className="skill-card" style={{ "--icon-color": color }}>
      <div className="skill-icon">{icon}</div>
      <div className="skill-name">{name}</div>
    </div>
  );
}

function SkillCategory({ title, skills, translatedTitle }) {
  return (
    <div className="skill-category">
      <h3 className="category-title">{translatedTitle}</h3>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </div>
  );
}

const Skills = ({ language = "en" }) => {
  const t = translations[language];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">{t.skills.title}</h2>
        <p className="skills-subtitle">{t.skills.subtitle}</p>
        
        <div className="skills-content">
          {Object.entries(skillsData).map(([category, skills]) => (
            <SkillCategory 
              key={category} 
              title={category} 
              skills={skills}
              translatedTitle={t.skills.categories[category]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;