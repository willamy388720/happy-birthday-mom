import { breakpoints } from "@styles/breakpoint";
import { motion } from "framer-motion";
import styled from "styled-components";

export const ContainerHorizontalScrollCarousel = styled.section`
  position: relative;
  height: 300vh;

  @media ${breakpoints.lg} {
  }
`;

export const ContentSlide = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  height: 100vh;
  align-items: center;
  overflow: hidden;

  @media ${breakpoints.lg} {
  }
`;

export const Motion = styled(motion.div)`
  display: flex;
  gap: 5rem;

  @media ${breakpoints.lg} {
    gap: 3rem;

    padding-right: 50rem;
    padding-left: 5rem;
  }

  @media ${breakpoints.sm} {
    gap: 3rem;
    /* padding-top: 150rem; */
    padding-right: 150rem;
    padding-left: 0rem;
  }
`;
