import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Text } from "@styles/typography";
import { ImageGallery } from "@components/ImageGallery";
import { ContainerAnimated, ContainerImage, ContainerLegend } from "./styles";
import { ImageGalleryProps } from "@utils/images";

type AnimatedImageAndLegendProps = {
  legend: string;
  legendPosition: string;
  images: ImageGalleryProps[];
};

export function AnimatedImageAndLegend({
  legend,
  legendPosition,
  images,
}: AnimatedImageAndLegendProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  const containerVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <ContainerAnimated
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {legendPosition === "top" && (
        <ContainerLegend>
          <Text size="5" align="center">
            {legend}
          </Text>
        </ContainerLegend>
      )}

      <ContainerImage
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{
          scale: 1.05,
          gap: "20px",
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
        style={{ display: "flex" }}
      >
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: idx * 0.2,
              ease: "easeInOut",
            }}
            style={{
              display: "inline-block",
            }}
          >
            <ImageGallery
              src={img.src}
              width={img.width}
              rotate={img.rotate}
              style={img.style}
            />
          </motion.div>
        ))}
      </ContainerImage>

      {legendPosition === "bottom" && (
        <ContainerLegend>
          <Text size="5" align="center">
            {legend}
          </Text>
        </ContainerLegend>
      )}
    </ContainerAnimated>
  );
}
