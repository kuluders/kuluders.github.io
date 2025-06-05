import {
  Dialog,
  styled,
  Tooltip,
  tooltipClasses,
  TooltipProps,
} from "@mui/material"; // Import Tooltip from MUI
import { useState } from "react";
import "../styles/PortfolioCarousel.scss";
import "../styles/SharedModal.scss"; // Import shared modal styles
import { awsIconsBaseUrl, projects, techStackIcons } from "../types/projects"; // Import projects

type PortfolioCarouselProps = {
  type: "data" | "frontend" | "software_architecture";
};

export default function PortfolioCarousel({ type }: PortfolioCarouselProps) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const projectList = projects[type]; // Get the project list based on the type

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectList.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projectList.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleClickProject = (project) => {
    setSelectedProject(project);
  };

  const getAwsIconUrl = (service: string): string | null =>
    techStackIcons[service]
      ? `${awsIconsBaseUrl}${techStackIcons[service]}`
      : null;

  const getRandomColor = (index: number): string => {
    const colors = ["#ff69b4", "#2e2c8f", "#7f95d1", "#ed9a32"]; // Pink, Dark Blue, Light Blue, Orange
    return colors[index % colors.length];
  };

  return (
    <div className="portfolio-container">
      <div className="carousel-container">
        <button className="carousel-button prev" onClick={goToPrevious}>
          ❮
        </button>

        <div className="carousel-content">
          <div
            className="project-card"
            onClick={() => handleClickProject(projectList[currentIndex])}
          >
            <h3 className="project-title">{projectList[currentIndex].title}</h3>
            <p className="project-description">
              {projectList[currentIndex].description}
            </p>
          </div>
        </div>

        <button className="carousel-button next" onClick={goToNext}>
          ❯
        </button>
      </div>

      {selectedProject && (
        <Dialog
          open={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          BackdropProps={{
            style: {
              backgroundColor: "rgba(0, 0, 0, 0.8)",
            },
          }}
          PaperProps={{
            style: {
              borderRadius: "12px",
              padding: "32px",
              maxWidth: "600px",
              background: "var(--background-color)",
              color: "var(--text-color)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
              backdropFilter: "blur(10px)",
            },
          }}
        >
          <div className="shared-modal">
            <h2 className="modal-title">{selectedProject.title}</h2>
            <div className="modal-section">
              <p className="modal-description">{selectedProject.description}</p>
            </div>
            <div className="modal-section">
              <div>
                <h4 className="section-title">Features:</h4>
                <ul className="feature-list">
                  {selectedProject.details.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="modal-section">
              <div>
                <h4 className="section-title">Tech Stack:</h4>
                <div className="tech-stack">
                  {selectedProject.details.techStack.map((tech, i) => {
                    const logoUrl =
                      getAwsIconUrl(tech) ||
                      `src/assets/logos/${tech.toLowerCase()}.svg`;
                    const tooltipColor = getRandomColor(i);

                    const StyledTooltip = styled(
                      ({ className, ...props }: TooltipProps) => (
                        <Tooltip {...props} classes={{ popper: className }} />
                      )
                    )(() => ({
                      [`& .${tooltipClasses.tooltip}`]: {
                        backgroundColor: tooltipColor,
                        color: "white",
                        fontSize: "0.8rem",
                        borderRadius: "5px",
                        padding: "5px 10px",
                        fontWeight: "bold",
                      },
                    }));

                    return (
                      <StyledTooltip key={i} title={tech} placement="top">
                        <img
                          src={logoUrl}
                          alt={tech}
                          style={{
                            width: "40px",
                            height: "40px",
                            cursor: "pointer",
                          }}
                        />
                      </StyledTooltip>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Dialog>
      )}
    </div>
  );
}
