import styled from "styled-components";

export const ProductContainer = styled.div`
  background-color: ${(props) => props.theme["gray-200"]};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.5rem;
  height: 290px;
  margin-bottom: 0.5rem;
  border-radius: 8px 15% 8px 15%;

  h3 {
    font-size: 1.25rem;
    color: ${(props) => props.theme["brown-700"]};
    margin: 0.5rem 0;
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme["brown-100"]};
  }
`;

export const ImageContainer = styled.div`
  margin-top: -45px;
  margin-bottom: 0.4rem;
`;

export const TagsList = styled.div`
  ul {
    padding: 0.5rem 0;
    margin: 0;
    display: flex;
    gap: 0.5rem;

    li {
      list-style: none;
      background-color: ${(props) => props.theme["yellow-300"]};
      padding: 0.4rem 0.625rem;
      border-radius: 50px;
      font-size: 0.625rem;
      font-weight: 700;
      text-transform: uppercase;
      color: ${(props) => props.theme["orange-300"]};
    }
  }
`;

export const ActionContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;

export const PriceContainer = styled.div`
  p {
    font-family: "Poetsen One", sans-serif;
    font-weight: 700;
    font-size: 1.5rem;
    color: ${(props) => props.theme["brown-500"]};

    span {
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-size: 0.875rem;
      margin-right: 0.25rem;
    }
  }
`;