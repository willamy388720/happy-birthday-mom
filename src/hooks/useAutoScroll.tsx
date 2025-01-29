import { useEffect } from "react";

type Props = {
  sectionIds: string[];
  disabled?: boolean;
};

export function useAutoScroll({ sectionIds, disabled }: Props) {
  useEffect(() => {
    if (disabled) return;

    let isScrolling = false;

    const handleWheel = (event: WheelEvent) => {
      if (isScrolling) return; // Impede múltiplos disparos de rolagem

      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean) as HTMLElement[];

      const currentScroll = window.scrollY;
      const nextSection = sections.find(
        (section) => section.offsetTop > currentScroll
      );
      const prevSection = [...sections]
        .reverse()
        .find((section) => section.offsetTop < currentScroll);

      if (event.deltaY > 0 && nextSection) {
        isScrolling = true;
        nextSection.scrollIntoView({ behavior: "smooth" });
      } else if (event.deltaY < 0 && prevSection) {
        isScrolling = true;
        prevSection.scrollIntoView({ behavior: "smooth" });
      }

      setTimeout(() => (isScrolling = false), 800); // Impede rolar várias seções de uma vez
    };

    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, [disabled]);
}
