import styled from "styled-components";

export const HomeContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 1280px) {
    padding: 0 1rem;
  }
`;

export const BannerHeroTextContainer = styled.div`
  flex: 1;

  h1 {
    font-size: 3rem;
    color: ${(props) => props.theme["brown-900"]};
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme["brown-900"]};
  }
`;

export const BannerHeroImageContainer = styled.div``;