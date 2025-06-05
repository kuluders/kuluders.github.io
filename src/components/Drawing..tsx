import React, { useEffect, useState } from "react";
import crown from "../assets/drawing/crown.svg";
import face from "../assets/drawing/face.svg";
import hand from "../assets/drawing/hand.svg"; // Import the hand image
import hardHat from "../assets/drawing/hard-hat.svg";
import wizardHat from "../assets/drawing/wizard-hat.svg";
import "../styles/Drawing.scss";

const ih = window.innerHeight;
const hats = [
  { src: hand, start: 0, end: ih }, // Rotating hand for the first intro
  { src: wizardHat, start: ih, end: ih * 2 },
  { src: crown, start: ih * 2, end: ih * 3 },
  { src: hardHat, start: ih * 3, end: ih * 4 },
];

const Drawing: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeHat, setActiveHat] = useState<string | null>(null);
  const [leavingHat, setLeavingHat] = useState<string | null>(null);
  const [handRotation, setHandRotation] = useState(0); // State for hand rotation

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Determine the active hat based on scroll position
    const currentHat = hats.find((hat) =>
      // in first section hand is rotating
      scrollPosition < ih / 2
        ? hat.src === hand && scrollPosition <= hat.end - 0.25 * ih
        : //else check if the scroll is in next hat section -1/2 of the screen
          scrollPosition >= hat.start - ih / 2 &&
          (hat.src !== hardHat
            ? scrollPosition < hat.end - ih / 2
            : scrollPosition < hat.end)
    );

    if (scrollPosition < 0.75 * ih) {
      const rotationRange = 60;
      const rotationAngle = (scrollPosition / (0.75 * ih)) * rotationRange;
      setHandRotation(rotationAngle);
    }

    if (currentHat?.src !== activeHat) {
      setLeavingHat(activeHat); // Set the current active hat as leaving
      setTimeout(() => setLeavingHat(null), 500); // Remove leaving hat after animation
      setActiveHat(currentHat?.src || null); // Set the new active hat
    }
  }, [scrollPosition]);

  return (
    <div className="drawing-container">
      <div className="hat-container">
        {leavingHat && (
          <img
            src={leavingHat}
            alt={`hat-leaving`}
            className={`hat-image ${
              leavingHat === hand ? "hand-down" : "leaving-hat"
            }`}
          />
        )}
        {activeHat && (
          <img
            src={activeHat}
            alt={`hat-${hats.findIndex((hat) => hat.src === activeHat)}`}
            className={`hat-image ${activeHat === hand ? "" : "active-hat"}`}
            style={
              activeHat === hand && scrollPosition < ih
                ? { transform: `rotate(-${handRotation}deg)` }
                : undefined
            }
          />
        )}
      </div>
      <div className="person-container">
        <img src={face} alt="drawing" />
      </div>
    </div>
  );
};

export default Drawing;
