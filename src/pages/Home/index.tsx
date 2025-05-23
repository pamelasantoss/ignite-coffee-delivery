import { ProductCard } from "../../components/ProductCard";
import { Container, IconCircle } from "../../styles/default";
import {
  BannerHeroTextContainer,
  HomeContainer,
  HomeSection,
  ProductSection,
  ProductsList
} from "./styles";

import {
  Coffee,
  Package,
  ShoppingCart,
  Timer
} from "@phosphor-icons/react";

import bannerHero from "../../assets/banner-coffee-delivery.png";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function Home() {
  const { productList } = useContext(CartContext);

  return (
    <>
      <HomeSection>
        <HomeContainer>
          <BannerHeroTextContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
            </p>
            <ul>
              <li>
                <IconCircle $bgcolor="orange">
                  <ShoppingCart size={20} weight="fill" />
                </IconCircle>
                Compra simples e segura
              </li>
              <li>
                <IconCircle $bgcolor="gray">
                  <Package size={20} weight="fill" />
                </IconCircle>
                Embalagem mantém o café intacto
              </li>
              <li>
                <IconCircle $bgcolor="yellow">
                  <Timer size={20} weight="fill" />
                </IconCircle>
                Entrega rápida e rastreada
              </li>
              <li>
                <IconCircle $bgcolor="purple">
                  <Coffee size={20} weight="fill" />
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
      <ProductSection>
        <Container>
          <h2>Nossos cafés</h2>
          <ProductsList>
            {productList.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.image}
                name={product.name}
                description={product.description}
                tags={product.tags}
                price={product.price}
                quantity={product.quantity}
              />
            ))}
          </ProductsList>
        </Container>
      </ProductSection>
    </>
  );
}