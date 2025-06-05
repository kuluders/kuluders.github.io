import React from "react";
import { useTheme } from "../App";
import "../styles/Data.scss";
import PortfolioCarousel from "./PortfolioCarousel";
import { ScrollButton } from "./ScrollButton";
import SquigglyLine from "./SquigglyLine";

const Data: React.FC = ({}) => {
  const theme = useTheme().theme;
  const w = window.innerWidth;
  console.log(`src/assets/logos/databricks-${theme}.svg`);

  return (
    <div className="data-container">
      <div className="data-text-container">
        <div className="data-text">
          <h2>Data Queen</h2>
          <span>
            Bow before the Queen of Databricks! I take messy, sluggish data and
            transform it into high-speed, automated workflows fit for a royal
            court. Whether it's parallel ingestion pipelines, digitizing
            outdated Excel checklists into real-time synced apps, or whipping AI
            models into shape, I make data faster, smarter, and less of a
            headache. If your data pipeline is misbehaving, just remember—off
            with its inefficiencies!{" "}
          </span>
          <SquigglyLine width={0.8 * w} height={50} />{" "}
          <div className="data-gallery">
            <img
              src={`src/assets/logos/databricks-${theme}.svg`}
              alt="Databricks"
              style={{ height: "70%" }}
            />
            <img src="src/assets/logos/dynamo.svg" alt="DynamoDB" />
            <img src="src/assets/logos/python.svg" alt="Python" />
          </div>
        </div>
      </div>
      <PortfolioCarousel type="data" />
      <ScrollButton component="data" />
    </div>
  );
};

export default Data;
