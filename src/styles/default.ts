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