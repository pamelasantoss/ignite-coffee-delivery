import {
  BannerHeroImageContainer,
  BannerHeroTextContainer,
  HomeContainer
} from "./styles";

import bannerHero from "../../assets/banner-coffee-delivery.png";

export function Home() {
  return (
    <section id="hero">
      <HomeContainer>
        <BannerHeroTextContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          <ul>
            <li>Compra simples e segura</li>
            <li>Embalagem mantém o café intacto</li>
            <li>Entrega rápida e rastreada</li>
            <li>O café chega fresquinho até você</li>
          </ul>
        </BannerHeroTextContainer>

        <BannerHeroImageContainer>
          <img src={bannerHero} alt="" />
        </BannerHeroImageContainer>
      </HomeContainer>
    </section>
  );
}