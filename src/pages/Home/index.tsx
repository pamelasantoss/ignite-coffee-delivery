import {
  BannerHeroTextContainer,
  HomeContainer,
  HomeSection,
  IconCircle
} from "./styles";

import bannerHero from "../../assets/banner-coffee-delivery.png";
import {
  Coffee,
  Package,
  ShoppingCart,
  Timer
} from "@phosphor-icons/react";

export function Home() {
  return (
    <HomeSection>
      <HomeContainer>
        <BannerHeroTextContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          <ul>
            <li>
              <IconCircle bgColor="orange">
                <ShoppingCart size={20} color="#fff" weight="fill" />
              </IconCircle>
              Compra simples e segura
            </li>
            <li>
              <IconCircle bgColor="gray">
                <Package size={20} color="#fff" weight="fill" />
              </IconCircle>
              Embalagem mantém o café intacto
            </li>
            <li>
              <IconCircle bgColor="yellow">
                <Timer size={20} color="#fff" weight="fill" />
              </IconCircle>
              Entrega rápida e rastreada
            </li>
            <li>
              <IconCircle bgColor="purple">
                <Coffee size={20} color="#fff" weight="fill" />
              </IconCircle>
              O café chega fresquinho até você
            </li>
          </ul>
        </BannerHeroTextContainer>

        <div id="hero-image">
          <img src={bannerHero} alt="" />
        </div>
      </HomeContainer>
    </HomeSection>
  );
}