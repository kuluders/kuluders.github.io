import { NavArrowDown } from "iconoir-react";

export const ScrollButton = ({ component }: { component: string }) => {
  const scrollToNextSection = () => {
    const parent = document.querySelector(`.${component}-container`);
    const nextSibling = parent?.nextElementSibling;
    console.log(nextSibling);
    if (nextSibling) {
      const targetPosition =
        nextSibling.getBoundingClientRect().top + window.scrollY;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const duration = 1000; // Adjust duration for slower or faster scrolling
      let startTime: number | null = null;

      const step = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1); // Ensure progress doesn't exceed 1
        const ease =
          progress < 0.5
            ? 2 * progress * progress
            : -1 + (4 - 2 * progress) * progress; // Ease-in-out function
        window.scrollTo(0, startPosition + distance * ease);

        if (timeElapsed < duration) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    }
  };
  return (
    <button className="scroll-button" onClick={scrollToNextSection}>
      <NavArrowDown height={40} width={40} />
    </button>
  );
};
