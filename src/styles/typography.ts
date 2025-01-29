import styled, { css } from "styled-components";

import {
  getLineHeight,
  getSizeDisplay,
  getSizeHeading,
  getSizeText,
} from "@utils/typography";

export type SizeDisplayType = "1";
export type DisplayProps = {
  size?: SizeDisplayType;
  align?: "left" | "center" | "right";
  color?: string;
};

export const Display = styled.span.attrs({
  className: "display-text",
})<DisplayProps>`
  font-weight: 700;
  color: ${({ color }) => color ?? "var(--gray-50)"};
  font-size: ${({ size }) => getSizeDisplay(size)};
  text-align: ${({ align }) => align ?? "left"};
  font-family: "Raleway", serif;
  line-height: ${({ size }) => `calc(${getSizeDisplay(size)} * 1.2)`};
`;

export type SizeHeadingType = "1" | "2" | "3";
export type HeadingProps = {
  size?: SizeHeadingType;
  align?: "left" | "center" | "right";
  color?: string;
};

export const Heading = styled.span.attrs({
  className: "display-text",
})<HeadingProps>`
  font-weight: 800;
  color: ${({ color }) => color ?? "var(--gray-50)"};
  font-size: ${({ size }) => getSizeHeading(size)};
  text-align: ${({ align }) => align ?? "left"};
  line-height: ${({ size }) => `calc(${getSizeHeading(size)} * 1.2)`};

  font-family: "Raleway", serif;
`;

export type SizeTextType =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10";
export type TextProps = {
  size?: SizeTextType;
  align?: "left" | "center" | "right";
  color?: string;
  underline?: "auto" | "hover" | "always";
  weight?: "regular" | "bold" | "thin";
};

export const Text = styled.span.attrs({
  className: "running-text",
})<TextProps>`
  color: ${({ color }) => color ?? "var(--gray-50)"};
  font-size: ${({ size }) => getSizeText(size)};
  text-align: ${({ align }) => align ?? "left"};
  line-height: ${({ size }) => getLineHeight(size)};

  font-family: "Shadows Into Light", serif;

  ${({ underline }) =>
    underline === "always" &&
    css`
      text-decoration: underline;
      text-decoration-thickness: 0.1rem;
      text-underline-position: under;
    `}
`;

export const TextNormal = styled.span.attrs({
  className: "running-text",
})<TextProps>`
  color: ${({ color }) => color ?? "var(--gray-50)"};
  font-size: ${({ size }) => getSizeText(size)};
  text-align: ${({ align }) => align ?? "left"};
  line-height: ${({ size }) => getLineHeight(size)};

  font-weight: ${({ weight }) =>
    weight === "bold" ? 800 : weight === "thin" ? 100 : 300};

  font-family: "Raleway", serif;

  ${({ underline }) =>
    underline === "always" &&
    css`
      text-decoration: underline;
      text-decoration-thickness: 0.1rem;
      text-underline-position: under;
    `}
`;
