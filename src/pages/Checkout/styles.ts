import styled from "styled-components";
import { BaseButton } from "../../styles/default";

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

export const CheckoutEmptyContainer = styled.div`
  display: none;
  padding: 1.5rem 0;

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

  a {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 46px;
    border: none;
    cursor: pointer;
    border-radius: 6px;
    padding: 0.5rem;
    transition: .2s;
    background-color: ${(props) => props.theme["yellow-700"]};
    color: ${(props) => props.theme.white};
    text-transform: uppercase;
    font-size: 0.875rem;
    font-weight: 500;
    margin-top: 1.5rem;
    text-decoration: none;

    &:hover {
      background-color: ${(props) => props.theme["orange-300"]};
    }

    @media only screen and (max-width: ${(props) => props.theme["max-width"]}) {
      width: 100%;
    }
  }

  @media only screen and (max-width: ${(props) => props.theme["max-width"]}) {
    padding: 1rem;
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

const ICON_COLOR = {
  orange: "orange-300",
  purple: "purple-500"
} as const;

interface CheckoutTitleSectionProps {
  iconColor: keyof typeof ICON_COLOR
}

export const CheckoutTitleSection = styled.div<CheckoutTitleSectionProps>`
  display: flex;
  gap: 0.5rem;

  svg {
    fill: ${(props) => props.theme[ICON_COLOR[props.iconColor]]};
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

export const PaymentButtonsSection = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 0.5rem;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const PaymentButton = styled(BaseButton)`
  text-transform: uppercase;
  font-size: 0.75rem;
  border: 1px solid transparent;
  color: ${(props) => props.theme["brown-500"]};
  background-color: ${(props) => props.theme["gray-400"]};
  gap: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 51px;
  flex: 1;
  justify-content: flex-start;

  svg {
    fill: ${(props) => props.theme["purple-500"]}
  }

  &:hover {
    background-color: ${(props) => props.theme["gray-500"]};
    color: ${(props) => props.theme["brown-700"]};
  }

  &.active {
    background-color: ${(props) => props.theme["purple-300"]};
    border: 1px solid ${(props) => props.theme["purple-500"]};
  }
`;

export const CheckoutProductList = styled.div`
  .productCard {
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${(props) => props.theme["gray-400"]};
    padding: 1.5rem 0;

    .image {
      img {
        max-height: 64px;
      }
    }

    .info {
      flex: 1;
      padding: 0 1rem;

      p {
        color: ${(props) => props.theme["brown-700"]};
        margin-bottom: 0.5rem;
      }
    }

    .price {
      p {
        font-weight: 700;
      }
    }
  }
`;

export const CheckoutSummaryContent = styled.div`
  ul {
    padding: 1.5rem 0 0;
    margin: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    li {
      list-style: none;
      display: flex;
      justify-content: space-between;
      align-items: center;

      p.subtitle {
        font-size: 0.875rem;
      }

      &:last-child {
        p {
          font-weight: 700;
          font-size: 1.25rem;
          color: ${(props) => props.theme["brown-700"]}
        }
      }
    }
  }

  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 46px;
    border: none;
    cursor: pointer;
    border-radius: 6px;
    padding: 0.5rem;
    transition: .2s;
    background-color: ${(props) => props.theme["yellow-700"]};
    color: ${(props) => props.theme.white};
    text-transform: uppercase;
    font-size: 0.875rem;
    font-weight: 500;
    margin-top: 1.5rem;

    &:hover {
      background-color: ${(props) => props.theme["orange-300"]};
    }
  }
`;