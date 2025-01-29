import styled, { css } from "styled-components";

type ImageProps = {
  rotate?: number;
};

export const Image = styled.img<ImageProps>`
  object-fit: fill;
  border-radius: 1rem;
  border: 0.4rem solid var(--gray-700);

  user-select: none;

  ${({ width }) =>
    width &&
    css`
      width: ${width}px;
    `}

  ${({ height }) =>
    height &&
    css`
      height: ${height}px;
    `}

  ${({ rotate }) =>
    rotate &&
    css`
      rotate: ${rotate}deg;
    `}
`;
