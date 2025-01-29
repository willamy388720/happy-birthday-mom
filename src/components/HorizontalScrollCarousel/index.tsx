import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

import { useResponsiveImages } from "@utils/images";
import { AnimatedImageAndLegend } from "@components/AnimatedImageAndLegend";
import {
  ContainerHorizontalScrollCarousel,
  ContentSlide,
  Motion,
} from "./styles";

type HorizontalScrollCarouselProps = {
  onInteractionStart: () => void;
  onInteractionEnd: () => void;
};

export function HorizontalScrollCarousel({
  onInteractionStart,
  onInteractionEnd,
}: HorizontalScrollCarouselProps) {
  const images = useResponsiveImages();
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const width = window.innerWidth;

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["1%", `-${width <= 1366 ? 68 : width <= 1024 ? 10 : 55}%`]
  );

  const handleInteractionStart = () => {
    onInteractionStart();
  };

  const handleInteractionEnd = () => {
    onInteractionEnd();
  };

  return (
    <ContainerHorizontalScrollCarousel
      ref={targetRef}
      onMouseEnter={handleInteractionStart}
      onMouseLeave={handleInteractionEnd}
      onTouchStart={handleInteractionStart}
      onTouchEnd={handleInteractionEnd}
    >
      <ContentSlide>
        <Motion style={{ x }}>
          {images.map((item) => (
            <AnimatedImageAndLegend key={item.id} {...item} />
          ))}
        </Motion>
      </ContentSlide>
    </ContainerHorizontalScrollCarousel>
  );
}
