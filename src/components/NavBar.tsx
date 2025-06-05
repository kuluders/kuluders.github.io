// import React from "react";
import { Tooltip } from "@mui/material";
import {
  Github,
  IconoirProvider,
  LightBulb,
  LightBulbOn,
  Linkedin,
  PageStar,
  Spark,
  User,
} from "iconoir-react";
import { useTheme } from "../App";
import logo from "../assets/logo-no-bg.svg"; // Import the SVG as a React component
import "../styles/NavBar.scss";

const scrollToSection = (elementRef: React.RefObject<HTMLDivElement>) => {
  elementRef.current?.scrollIntoView();
};

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme(); // Access the theme and toggleTheme function

  return (
    <Tooltip title={`Toggle ${theme === "light" ? "dark" : "light"} mode`}>
      <div className="theme-toggle" onClick={toggleTheme}>
        {theme === "light" ? (
          <LightBulb color="#2e2c8f" />
        ) : (
          <LightBulbOn color="#ed9a32" />
        )}
      </div>
    </Tooltip>
  );
};

interface NavbarProps {
  builderRef: React.RefObject<HTMLDivElement | null>;
  introRef: React.RefObject<HTMLDivElement | null>;
}

const Navbar: React.FC<NavbarProps> = ({ builderRef, introRef }) => {
  const { theme } = useTheme();

  const handleResumeClick = () => {
    const subject = "Resume Request - [Company Name]";
    const body = `Hi Klaudia,

I hope this email finds you well. I'm [Your Name] from [Company Name], and I came across your portfolio. We have an exciting opportunity for a [Position] role that I believe would be a great fit for your skills and experience.

You can find the job posting here: [Job URL]

I would love to review your resume and discuss this opportunity further.

Best regards,
[Your Name]`;

    const mailtoLink = `mailto:klaudia.m.kreft@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="navbar-container">
      <IconoirProvider
        iconProps={{
          color: { light: "#7f95d1", dark: "#ff82a9" }[theme],
          strokeWidth: 2,
          width: "1.5em",
          height: "1.5em",
        }}
      >
        <div className="navbar-logo">
          <img src={logo} className="logo-svg" />
          <span className="tag">Under Construction</span>
        </div>
        <div className="navbar-email">
          <a href="mailto:klaudia.m.kreft@gmail.com">Send me an email </a>
        </div>
        <div className="navbar-links">
          <div className="icons">
            <div
              className="navbar-item"
              onClick={() => window.open("https://github.com/kuluders")}
            >
              <Github />
            </div>
            <div
              className="navbar-item"
              onClick={() =>
                window.open("https://linkedin.com/in/k1aud1a-kr3ft")
              }
            >
              <Linkedin />
            </div>
          </div>
          <div
            className="navbar-item"
            onClick={() => scrollToSection(builderRef)}
          >
            <Spark />
            Work
          </div>
          <div
            className="navbar-item"
            onClick={() => scrollToSection(introRef)}
          >
            <User />
            About
          </div>
          <div className="navbar-item" onClick={handleResumeClick}>
            <PageStar />
            Resume
          </div>
          <ThemeToggle />
        </div>
      </IconoirProvider>
    </div>
  );
};
export default Navbar;
