import styled from "styled-components";
import { BaseButton } from "../../styles/default";

export const Payment = styled(BaseButton)`
  text-transform: uppercase;
  font-size: 0.75rem;
  border: 1px solid transparent;
  color: ${(props) => props.theme["brown-500"]};
  background-color: ${(props) => props.theme["gray-400"]};
  gap: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 51px;
  flex: 1;
  justify-content: flex-start;

  svg {
    fill: ${(props) => props.theme["purple-500"]}
  }

  &:hover {
    background-color: ${(props) => props.theme["gray-500"]};
    color: ${(props) => props.theme["brown-700"]};
  }

  &.active {
    background-color: ${(props) => props.theme["purple-300"]};
    border: 1px solid ${(props) => props.theme["purple-500"]};
  }
`;