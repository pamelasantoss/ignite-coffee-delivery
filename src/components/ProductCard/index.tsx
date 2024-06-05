import { ShoppingCart } from "@phosphor-icons/react";
import { formatReal } from "../../helpers/formatReal";
import { QuantityAction } from "../QuantityAction";
import {
  ActionContainer,
  AddToCartContainer,
  ButtonAddToCart,
  ImageContainer,
  PriceContainer,
  ProductContainer,
  TagsList
} from "./styles";

type ProductProps = {
  image: string,
  name: string,
  description: string,
  tags: string[],
  price: number
}

export function ProductCard({ image, name, description, tags, price }: ProductProps) {
  function addToCart() {
    // Ao adicionar um item no carrinho, é esperado as informações do produto
    console.log("Clicou no botão de adicionar ao carrinho!");
  }

  return (
    <ProductContainer>
      <ImageContainer>
        <img src={image} alt={`Produto - ${name}`} />
      </ImageContainer>

      <TagsList>
        <ul>
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </TagsList>

      <h3>{name}</h3>
      <p>{description}</p>

      <ActionContainer>
        <PriceContainer>
          <p><span>R$</span>{formatReal(price)}</p>
        </PriceContainer>

        <AddToCartContainer>
          <QuantityAction />

          <ButtonAddToCart onClick={addToCart}>
            <ShoppingCart size={20} weight="fill" />
          </ButtonAddToCart>
        </AddToCartContainer>
      </ActionContainer>
    </ProductContainer>
  );
}