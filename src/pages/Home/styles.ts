import { breakpoints } from "@styles/breakpoint";
import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

export const Apresentation = styled.div`
  display: flex;
  max-width: 60vw;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  text-align: justify;

  @media ${breakpoints.sm} {
    gap: 0;
    max-width: 100vw;
    padding: 0 2rem;
    .display-text {
      font-size: 2.2rem;
    }

    .running-text {
      font-size: 1.4rem;
    }
  }
`;
