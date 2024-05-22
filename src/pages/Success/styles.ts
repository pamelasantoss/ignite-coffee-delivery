import styled from "styled-components";

export const SuccessContainer = styled.div`
  max-width: ${(props) => props.theme["max-width"]};
  margin: 0 auto;
  padding: 5.125rem 0;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2rem;
    color: ${(props) => props.theme["orange-300"]};
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.5rem;
    color: ${(props) => props.theme["brown-900"]};

    @media only screen and (max-width: ${(props) => props.theme["max-width"]}) {
      font-size: 1rem;
    }
  }

  @media only screen and (max-width: ${(props) => props.theme["max-width"]}) {
    padding: 1rem;
  }
`;

export const SuccessContentSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;

  @media only screen and (max-width: ${(props) => props.theme["max-width"]}) {
    flex-direction: column;
    margin-top: 3rem;

    img {
      max-width: 100%;
    }
  }
`;

export const OrderInfoContainer = styled.div`
  border-width: 1px;
  border-style: solid;
  border-image: linear-gradient(
    to left,
    ${(props) => props.theme["purple-500"]},
    ${(props) => props.theme["yellow-700"]}) 1;
  border-radius: 8px 40px 8px 40px;
  padding: 2.5rem;
  width: 50%;

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

  @media only screen and (max-width: ${(props) => props.theme["max-width"]}) {
    width: 100%;
    margin-bottom: 3rem;
  }
`;