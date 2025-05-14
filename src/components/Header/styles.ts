import styled, { keyframes } from "styled-components";
import { BaseButton } from "../../styles/default";
import { Spinner } from "@phosphor-icons/react";

export const HeaderContainer = styled.header`
  padding: 2rem 0;

  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      &:focus {
        outline: 1px solid transparent;
        box-shadow: none;
      }
    }
  }
`;

export const ActionButtonsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const LocationButton = styled(BaseButton)`
  background-color: ${(props) => props.theme["purple-300"]};
  color: ${(props) => props.theme["purple-700"]};
  font-size: 0.875rem;
  gap: 0.25rem;
`;

const spin = keyframes`
  to {
    transform: rotate(360deg)
  }
`;

export const SpinningIcon = styled(Spinner)`
  animation: ${spin} 1s linear infinite
`;

export const CartButton = styled(BaseButton)`
  background-color: ${(props) => props.theme["yellow-300"]};
  color: ${(props) => props.theme["orange-300"]};
  position: relative;

  span {
    position: absolute;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme["orange-300"]};
    color: ${(props) => props.theme.white};
    border-radius: 50%;
    font-weight: 700;
    font-size: 0.75rem;
    top: -8px;
    right: -9px;
  }
`;