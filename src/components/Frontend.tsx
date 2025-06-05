import React from "react";
import "../styles/Frontend.scss";
import { ScrollButton } from "./ScrollButton";
import SquigglyLine from "./SquigglyLine";

// Import images
import reactLogo from "../assets/logos/react.svg";
import typescriptLogo from "../assets/logos/typescript.svg";
import viteLogo from "../assets/logos/vite.svg";
import sassLogo from "../assets/logos/sass.svg";
import vueLogo from "../assets/logos/vue.svg";

const Frontend: React.FC = ({}) => {
  const w = window.innerWidth;

  return (
    <div className="frontend-container">
      <div className="frontend-text-container">
        <div className="frontend-text">
          <h2>Frontend Wizardry</h2>
          <span>
            Since 2021, I've been crafting elegant, user-friendly interfaces
            from complex requirements. With a foundation in UX design and
            frontend development, I create digital experiences that feel like
            magic to users while maintaining clean, maintainable code.
          </span>
          <SquigglyLine width={0.8 * w} height={50} />{" "}
          <div className="tech-gallery">
            <img src={reactLogo} alt="React" />
            <img src={typescriptLogo} alt="TypeScript" />
            <img src={viteLogo} alt="Vite" />
            <img src={sassLogo} alt="CSS" />
            <img src={vueLogo} alt="Vue" />
          </div>
        </div>
      </div>
      <ScrollButton component="frontend" />
    </div>
  );
};

export default Frontend;
