import styled from "styled-components";

export const FormCheckoutContainer = styled.div`
  form {
    margin-top: 2rem;

    .fieldset {
      padding: 0.5rem 0;
      display: flex;
      gap: 0.75rem;
      position: relative;

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

        &.error {
          border-color: ${(props) => props.theme.red};
        }

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