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

  @media only screen and (max-width: ${(props) => props.theme["max-width"]}) {
    padding: 1rem;
    flex-direction: column;
  }
`;

export const CheckoutLeftContainer = styled.div`
  flex: 1;

  @media only screen and (max-width: ${(props) => props.theme["max-width"]}) {
    width: 100%;
    margin-bottom: 2.5rem;
  }
`;

export const CheckoutRightContainer = styled.div`
  width: 40%;
  margin-left: 2rem;

  @media only screen and (max-width: ${(props) => props.theme["max-width"]}) {
    width: 100%;
    margin: 0;
  }
`;

export const CheckoutInfoContainer = styled.div`
  background-color: ${(props) => props.theme["gray-200"]};
  border-radius: 6px;
  width: 100%;
  margin-bottom: 0.75rem;
  padding: 2.5rem;
`;

export const CheckoutTitleSection = styled.div`
  display: flex;
  gap: 0.5rem;

  svg {
    fill: ${(props) => props.theme["orange-300"]};
  }

  p {
    font-size: 0.875rem;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    span {
      color: ${(props) => props.theme["brown-700"]};
      font-size: 1rem;
    }
  }
`;

export const FormCheckoutSection = styled.div`
  form {
    margin-top: 2rem;

    .fieldset {
      padding: 0.5rem 0;
      display: flex;
      gap: 0.75rem;

      input {
        border-radius: 4px;
        border: 1px solid ${(props) => props.theme["gray-400"]};
        background-color: ${(props) => props.theme["gray-300"]};
        width: 100%;
        height: 42px;
        display: flex;
        align-items: center;
        padding: 0 1rem;
        font-size: 0.875rem;
        color: ${(props) => props.theme["brown-500"]};

        &:focus {
          outline: 1px solid ${(props) => props.theme["orange-300"]};
          box-shadow: none;
        }

        &.input-cep,
        &.input-numero,
        &.input-bairro {
          width: 12.5rem;
        }

        &.input-uf {
          width: 3.75rem;
        }
      }

      .fieldset-complemento {
        width: 100%;
        position: relative;

        span {
          font-size: 0.75rem;
          font-style: italic;
          position: absolute;
          right: 10px;
          top: 35%;
        }
      }

      @media only screen and (max-width: 600px) {
        flex-direction: column;

        input {
          &.input-cep,
          &.input-numero,
          &.input-bairro,
          &.input-uf {
            width: 100%;
          }
        }
      }
    }
  }
`;