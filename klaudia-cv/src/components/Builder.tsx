import { LongArrowRightDown } from "iconoir-react";
import { forwardRef } from "react";
import "../styles/Builder.scss";
import "../styles/_variables.scss";
import PortfolioCarousel from "./PortfolioCarousel";
import { ScrollButton } from "./ScrollButton";

interface BuilderProps {
  // add any existing props here if needed
}

const Builder = forwardRef<HTMLDivElement, BuilderProps>((props, ref) => {
  return (
    <div ref={ref} className="builder-container">
      <div className="builder-text-container">
        <div className="builder-text">
          {/* <SquigglyLine width={0.8 * w} height={50} />{" "} */}
          <h2>Software Engineer</h2>
          <span>
            Designing scalable architectures and intelligent tools <br />—
            leveraging cloud, AI, and automation to solve real-world problems.
          </span>
          <br />
          <div className="builder-arrow">
            <span>Some cool projects I worked on recently</span>
            <LongArrowRightDown />
          </div>
        </div>
        <PortfolioCarousel type="software_architecture" />
      </div>
      <ScrollButton component="builder" />
    </div>
  );
});

export default Builder;
