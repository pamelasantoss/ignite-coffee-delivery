import {
  ActionContainer,
  ImageContainer,
  PriceContainer,
  ProductContainer,
  TagsList
} from "./styles";

import expressoTradicional from "../../assets/products/expresso.png";

export function ProductCard() {
  return (
    <ProductContainer>
      <ImageContainer>
        <img src={expressoTradicional} alt="Produto - Expresso Tradicional" />
      </ImageContainer>

      <TagsList>
        <ul>
          <li>Tradicional</li>
          <li>Tradicional</li>
        </ul>
      </TagsList>

      <h3>Expresso Tradicional</h3>
      <p>O tradicional café feito com água quente e grãos moídos</p>

      <ActionContainer>
        <PriceContainer>
          <p><span>R$</span>9,90</p>
        </PriceContainer>
        <div id="quantity"></div>
      </ActionContainer>
    </ProductContainer>
  );
}