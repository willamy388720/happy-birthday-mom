import { breakpoints } from "@styles/breakpoint";
import { motion } from "framer-motion";
import styled from "styled-components";

export const ContainerAnimated = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media ${breakpoints.lg} {
    gap: 1rem;
  }
`;

export const ContainerImage = styled.div`
  display: flex;
  align-items: end;

  cursor: pointer;
`;

export const ContainerLegend = styled.div`
  display: flex;
  max-width: 40rem;
  white-space: normal;
  align-self: center;

  @media ${breakpoints.lg} {
    .running-text {
      font-size: 2rem;
    }
  }

  @media ${breakpoints.sm} {
    .running-text {
      font-size: 1.6rem;
    }
    max-width: 30rem;
  }
`;
