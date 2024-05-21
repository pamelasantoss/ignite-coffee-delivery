import styled from "styled-components";

export const SuccessContainer = styled.div`
  max-width: ${(props) => props.theme["max-width"]};
  margin: 0 auto;
  padding: 5.125rem 0;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: ${(props) => props.theme["max-width"]}) {
    padding: 1rem;
    flex-direction: column;

    img {
      max-width: 100%;
    }
  }
`;

export const SuccessContentSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const OrderInfoContainer = styled.div`
  border: 1px solid ${(props) => props.theme["purple-700"]};
  border-radius: 8px 40px 8px 40px;
  margin-top: 2.5rem;
  padding: 2.5rem;
  width: 100%;

  ul {
    margin: 0;
    padding: 0;

    li {
      list-style: none;
      margin-bottom: 2rem;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      color: ${(props) => props.theme["brown-500"]};
      line-height: 1.5rem;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;