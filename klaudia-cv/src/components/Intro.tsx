import { Dialog } from "@mui/material";
import {
  Brain,
  Code,
  EmojiLookDown,
  EmojiLookLeft,
  EmojiLookRight,
  EmojiLookUp,
  Rocket,
  User,
} from "iconoir-react";
import { forwardRef, useEffect, useRef, useState } from "react";
import "../styles/_variables.scss";
import "../styles/Intro.scss";
import "../styles/Modal.scss";
import { ScrollButton } from "./ScrollButton";

interface IntroProps {
  // add any existing props here if needed
}

const Intro = forwardRef<HTMLDivElement, IntroProps>((props, ref) => {
  const [currentEmoji, setCurrentEmoji] = useState<number>(0);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const sequenceRunning = useRef(false);

  const emojiComponents = [
    <EmojiLookLeft key="left" />,
    <EmojiLookDown key="down" />,
    <EmojiLookRight key="right" />,
    <EmojiLookUp key="up" />,
    <EmojiLookLeft key="left-end" />,
  ];

  const handleHover = () => {
    if (sequenceRunning.current) return;
    sequenceRunning.current = true;

    let currentIndex = 0;
    const sequence = setInterval(() => {
      currentIndex++;
      setCurrentEmoji(currentIndex);

      if (currentIndex >= emojiComponents.length - 1) {
        clearInterval(sequence);
        sequenceRunning.current = false;
      }
    }, 200);
  };

  useEffect(() => {
    if (modalOpen) {
      document.documentElement.classList.add("modal-open");
    } else {
      document.documentElement.classList.remove("modal-open");
    }
    return () => {
      document.documentElement.classList.remove("modal-open");
    };
  }, [modalOpen]);

  return (
    <div ref={ref} className="intro-container">
      <div className="intro-text-container">
        <div className="intro-text">
          <h1>Hey there, I'm Klaudia</h1>
          <p>
            Turning complex problems into smart solutions <br />— fueled by AI,
            automation, and the occasional Tropical Red Bull.
          </p>
        </div>
        <div
          className="intro-btn-container"
          onMouseEnter={handleHover}
          onMouseLeave={() => setCurrentEmoji(0)}
          onClick={() => setModalOpen(true)}
        >
          <div className="txt">Still curious?</div>
          <div className="icon">{emojiComponents[currentEmoji]}</div>
        </div>
      </div>
      <ScrollButton component="intro" />
      {modalOpen && (
        <Dialog
          open={!!modalOpen}
          onClose={() => setModalOpen(false)}
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
          <div className="modal-content">
            <h2>
              <User />
              About Me
            </h2>
            <div className="content-section">
              <Rocket />
              <p>
                I'm a Full Stack Engineer and Technical Consultant with
                expertise in both hands-on development and strategic solution
                design. At Sprint Reply and easyJet, I architect and deliver
                AI-driven solutions and data pipelines, while previously at
                Pillr, I helped build their SOCaaS platform using Vue.js,
                Python, and Go.
              </p>
            </div>
            <div className="content-section">
              <Code />
              <p>
                My technical toolkit spans frontend (React, Vue.js, TypeScript)
                and backend (Python, Go, Node.js) development, with deep
                expertise in cloud services (AWS), data engineering
                (Databricks), and AI integration. I specialize in building
                scalable architectures that solve complex business challenges.
              </p>
            </div>
            <div className="content-section">
              <Brain />
              <p>
                Whether I'm leading development teams, consulting with
                stakeholders, or mentoring colleagues, I bring both technical
                depth and business understanding to every project. I'm
                passionate about innovation and continuous learning, always
                exploring new technologies and approaches to deliver better
                solutions.
              </p>
            </div>
          </div>
        </Dialog>
      )}
    </div>
  );
});

export default Intro;
