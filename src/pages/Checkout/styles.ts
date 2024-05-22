import styled from "styled-components";

export const CheckoutContainer = styled.div`
  max-width: ${(props) => props.theme["max-width"]};
  margin: 0 auto;
  padding: 4rem 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  h2 {
    font-size: 1.125rem;
    color: ${(props) => props.theme["brown-700"]};
    margin-bottom: 1.5rem;
  }
`;

export const CheckoutInfoContainer = styled.div`
  background-color: ${(props) => props.theme["gray-200"]};
  border-radius: 6px;
  width: 100%;
  margin-bottom: 0.75rem;
`;

export const CheckoutLeftContainer = styled.div``;

export const CheckoutRightContainer = styled.div``;