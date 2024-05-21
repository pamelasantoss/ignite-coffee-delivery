import styled from "styled-components";

export const HomeSection = styled.section`
  background: url("../../src/assets/bg-hero.png") no-repeat center center;
  background-size: cover;
`;

export const HomeContainer = styled.div`
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

export const BannerHeroTextContainer = styled.div`
  flex: 1;

  h1 {
    font-size: 3rem;
    color: ${(props) => props.theme["brown-900"]};
    margin-bottom: 2rem;

    @media only screen and (max-width: ${(props) => props.theme["max-width"]}) {
      font-size: 2rem;
      margin-bottom: 1.5rem;
    }
  }

  p {
    font-size: 1.25rem;
    line-height: 1.5rem;
    color: ${(props) => props.theme["brown-900"]};

    @media only screen and (max-width: ${(props) => props.theme["max-width"]}) {
      font-size: 1rem;
    }
  }

  ul {
    margin: 4rem 0 0;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    li {
      list-style: none;
      display: flex;
      align-items: center;
      gap: 1.25rem;
    }

    @media only screen and (max-width: ${(props) => props.theme["max-width"]}) {
      margin-top: 2rem;
      margin-bottom: 2rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  }
`;

const BG_ICON_COLOR = {
  orange: "orange-300",
  gray: "brown-500",
  yellow: "yellow-700",
  purple: "purple-500"
} as const;

interface IconCircleProps {
  bgColor: keyof typeof BG_ICON_COLOR
}

export const IconCircle = styled.div<IconCircleProps>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme[BG_ICON_COLOR[props.bgColor]]};

  svg {
    fill: ${(props) => props.theme.white};
  }
`;

export const ProductSection = styled.section`
  padding-top: 1rem;
  padding-bottom: 2rem;

  h2 {
    font-size: 2rem;
    color: ${(props) => props.theme["brown-700"]};
    margin-bottom: 2rem;

    @media only screen and (max-width: ${(props) => props.theme["max-width"]}) {
      font-size: 1.5rem;
    }
  }
`;

export const ProductsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
  padding-top: 1.5rem;

  @media only screen and (max-width: ${(props) => props.theme["max-width"]}) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media only screen and (max-width: 920px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;