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
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";

type ProductProps = {
  id: number,
  image: string,
  name: string,
  description: string,
  tags: string[],
  price: number,
  quantity: number,
}

export function ProductCard({
  id,
  image,
  name,
  description,
  tags,
  price,
  quantity
}: ProductProps) {
  const { addProductToCart } = useContext(CartContext);
  const [ isProductAddedToCart, setIsProductAddedToCart ] = useState(false);

  function addToCart() {
    addProductToCart(id);
    setIsProductAddedToCart(true);
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
          {isProductAddedToCart ? (
            <div className="intoCart">Adicionado ao carrinho</div>
          ) : (
            <>
              <QuantityAction
                productId={id}
                productQuantity={quantity}
              />

              <ButtonAddToCart onClick={addToCart}>
                <ShoppingCart size={20} weight="fill" />
              </ButtonAddToCart>
            </>
          )}
          
        </AddToCartContainer>
      </ActionContainer>
    </ProductContainer>
  );
}