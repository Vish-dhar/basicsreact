import { useNavigate } from "react-router";
import { useTheme } from "./ThemeContext";

const Home = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";
  const bgColor = isDark ? "#0f172a" : "#ffffff";
  const textColor = isDark ? "#94a3b8" : "#334155";
  const headingColor = isDark ? "#f8fafc" : "#0f172a";
  const borderColor = isDark ? "#334155" : "#e2e8f0";

  return (
    <div style={{ background: bgColor, color: textColor, borderColor: borderColor, transition: "all 0.3s ease" }}>
      <nav>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/About")}>About</button>
        <button onClick={() => navigate("/Projects")}>Projects</button>
        <button onClick={() => navigate("/Skills")}>Skills</button>
        <button onClick={() => navigate("/Contact")}>Contact</button>
        
        <button 
          onClick={toggleTheme} 
          style={{ marginLeft: "auto", background: isDark ? "#334155" : "#cbd5e1" }}
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </nav>

      <p className="tag">WELCOME TO MY PORTFOLIO</p>
      
      {/* Explicitly controlled heading color so it stays bright in dark mode */}
      <h1 style={{ color: headingColor }}>Hi, I'm Vishnu Dharshan R</h1>
      
      <p style={{ fontSize: "1.1rem", fontWeight: "500", color: headingColor }}>
        B.E. Computer Science and Engineering Student
      </p>

      <p>
        Currently studying at <strong>S.A. Engineering College, Chennai</strong> (Graduating 2027) 
        and based out of Villupuram, Tamil Nadu. I am passionate about full-stack development, 
        building interactive React applications, and solving complex programming challenges.
      </p>

      <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        <button onClick={() => navigate("/Projects")}>View My Projects</button>
        <button onClick={() => navigate("/Contact")}>Get in Touch</button>
      </div>
    </div>
  );
};

export default Home;