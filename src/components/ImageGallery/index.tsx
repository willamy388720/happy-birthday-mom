import { ImgHTMLAttributes } from "react";
import { Image } from "./styles";

type ImageGalleryProps = ImgHTMLAttributes<HTMLImageElement> & {
  width?: number;
  height?: number;
  rotate?: number;
};

export function ImageGallery({
  // imageUrl,
  width,
  height,
  rotate,
  ...rest
}: ImageGalleryProps) {
  return <Image {...rest} width={width} height={height} rotate={rotate} />;
}
