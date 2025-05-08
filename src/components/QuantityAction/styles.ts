import styled from "styled-components";

interface QuantityContainerProps {
  $componentHeight?: number
}

export const QuantityContainer = styled.div<QuantityContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 72px;
  height: ${(props) => props.$componentHeight}px;
  padding: 0.5rem;
  background-color: ${(props) => props.theme["gray-400"]};
  border-radius: 6px;

  button {
    border: none;
    background: none;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;

    svg {
      fill: ${(props) => props.theme["purple-500"]};
    }

    &:hover {
      svg {
        fill: ${(props) => props.theme["purple-700"]};
      }
    }

    &:disabled {
      cursor: not-allowed;
    }
  }

  input {
    width: 20px;
    border: none;
    background: none;
    pointer-events: none;
    text-align: center;
    font-size: 1rem;
    color: ${(props) => props.theme["brown-900"]};

    [type="number"] {
      -moz-appearance: textfield;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &:focus {
      outline: none;
    }
  }
`;