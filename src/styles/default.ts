import styled from "styled-components";

export const Container = styled.div`
  max-width: ${(props) => props.theme["max-width"]};
  margin: 0 auto;

  @media only screen and (max-width: ${(props) => props.theme["max-width"]}) {
    padding: 0 1rem;
  }
`;

export const BaseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 38px;
  border: none;
  cursor: pointer;
  border-radius: 6px;
  padding: 0.5rem;
  transition: .2s;
`;

const BG_ICON_COLOR = {
  orange: "orange-300",
  gray: "brown-500",
  yellow: "yellow-700",
  purple: "purple-500"
} as const;

interface IconCircleProps {
  bgColor: keyof typeof BG_ICON_COLOR
}

export const IconCircle = styled.div<IconCircleProps>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme[BG_ICON_COLOR[props.bgColor]]};

  svg {
    fill: ${(props) => props.theme.white};
  }
`;