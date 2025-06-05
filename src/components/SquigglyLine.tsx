import { curveBasis, line } from "d3-shape";
import React, { useEffect, useRef, useState } from "react";
import "../styles/SquigglyLine.scss";

interface SquigglyLineProps {
  width: number;
  height: number;
  strokeWidth?: number;
}

const SquigglyLine: React.FC<SquigglyLineProps> = ({
  width,
  height,
  strokeWidth = 5,
}) => {
  const pathRef = useRef<SVGPathElement>(null);
  const animationFrameRef = useRef<number>(1);
  const offsetXRef = useRef(0); // Track scroll offset
  const lastXRef = useRef(0); // Track last X position
  const lastAddTimeRef = useRef(performance.now()); // Track last time a point was added

  const segmentSize = 15; // Fixed segment size
  const scrollSpeed = 0.5; // Move 1px per frame
  const pointAddInterval = 450; // Ensure point is added at right timing

  const [points, setPoints] = useState<[number, number][]>([]);
  const [pathData, setPathData] = useState("");

  const gradientColors = ["#ff82a9", "#2e2c8f", "#7f95d1", "#ed9a32"];
  const [gradientStops, setGradientStops] = useState([
    { offset: "0%", stopColor: "#ff82a9" },
    { offset: "10%", stopColor: "#ed9a32" },
    { offset: "20%", stopColor: "#2e2c8f" },
    { offset: "30%", stopColor: "#7f95d1" },
    { offset: "40%", stopColor: "#ff82a9" },
    { offset: "75%", stopColor: "#2e2c8f" },
    { offset: "90%", stopColor: "#7f95d1" },
    { offset: "100%", stopColor: "#ed9a32" },
  ]);

  /** Generate Initial Path */
  useEffect(() => {
    const initialPoints: [number, number][] = [];
    let x = 0;

    while (x <= width * 3) {
      initialPoints.push([x, generateY(x)]);
      x += segmentSize;
    }

    setPoints(initialPoints);
    lastXRef.current = x;
  }, [width]);

  /** Continuous Animation (Moves Path to Left) */
  useEffect(() => {
    const scrollPath = () => {
      const now = performance.now();
      offsetXRef.current -= scrollSpeed; // Move left

      // Apply transform for smooth shifting
      if (pathRef.current) {
        pathRef.current.setAttribute(
          "transform",
          `translate(${offsetXRef.current}, 0)`
        );
      }

      // Check if it's time to add a new point (ensures perfect balance)
      if (now - lastAddTimeRef.current >= pointAddInterval) {
        addNewPoint();
        lastAddTimeRef.current = now;
      }

      animationFrameRef.current = requestAnimationFrame(scrollPath);
    };

    animationFrameRef.current = requestAnimationFrame(scrollPath);
    return () => cancelAnimationFrame(animationFrameRef.current!);
  }, []);

  /** Adds a new point while keeping array size constant */
  const addNewPoint = () => {
    setPoints((prev) => {
      const newX = lastXRef.current;
      const newY = generateY(newX);

      lastXRef.current += segmentSize;

      return [...prev.slice(1), [newX, newY]];
    });
  };

  /** Generates Y value based on randomness */
  const generateY = (x: number): number => {
    const amplitude = height / 4 - strokeWidth + (Math.random() * height) / 4;
    const frequency = 0.01 + Math.random() * 0.02;
    return (
      height / 2 +
      Math.sin(x * frequency) * amplitude +
      (Math.random() - 0.5) * 20
    );
  };

  /** Update Path When Points Change */
  useEffect(() => {
    if (points.length > 0) {
      setPathData(line().curve(curveBasis)(points) || "");
    }
  }, [points]);

  /** Dynamic Gradient Evolution */
  useEffect(() => {
    const interval = setInterval(() => {
      setGradientStops((prevStops) => {
        let newOffset = parseFloat(prevStops[prevStops.length - 1].offset) + 10;
        if (newOffset > 100) return prevStops;

        return [
          ...prevStops,
          {
            offset: `${newOffset}%`,
            stopColor:
              gradientColors[Math.floor(Math.random() * gradientColors.length)],
          },
        ];
      });
    }, 500);

    return () => clearInterval(interval);
  }, [gradientColors]);

  return (
    <div className="squiggly-container">
      <div className="squiggly-overlay"></div>
      <svg
        width={width}
        height={height}
        style={{ position: "relative", overflow: "hidden" }}
      >
        <defs>
          <linearGradient
            id="rainbowGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            {gradientStops.map((stop, index) => (
              <stop
                key={index}
                offset={stop.offset}
                stopColor={stop.stopColor}
              />
            ))}
          </linearGradient>
        </defs>
        <g>
          <path
            ref={pathRef}
            d={pathData}
            stroke="url(#rainbowGradient)"
            strokeWidth={strokeWidth}
            opacity={0.6}
            fill="none"
          />
        </g>
      </svg>
    </div>
  );
};

export default SquigglyLine;
