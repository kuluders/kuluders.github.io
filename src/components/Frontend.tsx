import React from "react";
import "../styles/Frontend.scss";
import { ScrollButton } from "./ScrollButton";
import SquigglyLine from "./SquigglyLine";

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
            <img src="src/assets/logos/react.svg" alt="React" />
            <img src="src/assets/logos/typescript.svg" alt="TypeScript" />
            <img src="src/assets/logos/vite.svg" alt="Vite" />
            <img src="src/assets/logos/sass.svg" alt="CSS" />
            {/* <img src="src/assets/logos/figma.svg" alt="Figma" /> */}
            <img src="src/assets/logos/vue.svg" alt="Vue" />
            {/* <img src="src/assets/logos/selenium.svg" alt="Selenium" /> */}
          </div>
        </div>
      </div>
      <ScrollButton component="frontend" />
    </div>
  );
};

export default Frontend;
