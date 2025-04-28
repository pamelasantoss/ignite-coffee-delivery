import { rgba } from "polished";
import styled, { keyframes } from "styled-components";

const l1 = keyframes`
  to {
    clip-path: inset(0 -34% 0 0);
  }
`;

export const LoaderBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  background: ${({ theme }) => rgba(theme["yellow-300"], 0.2)};

  span {
    display: block;
    width: 30px;
    aspect-ratio: 4;
    background: radial-gradient(
        circle closest-side,
        ${(props) => props.theme["orange-300"]} 90%,
        #0000
      )
      0 / calc(100% / 3) 100% space;
    clip-path: inset(0 100% 0 0);
    animation: ${l1} 1s steps(4) infinite;
  }
`;
