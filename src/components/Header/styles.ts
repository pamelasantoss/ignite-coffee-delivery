import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 2rem 0;

  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const BaseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 38px;
  border: none;
  cursor: pointer;
  border-radius: 6px;
  padding: 0.5rem;
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

export const CartButton = styled(BaseButton)`
  background-color: ${(props) => props.theme["yellow-300"]};
  color: ${(props) => props.theme["orange-300"]};
`;