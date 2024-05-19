import { formatReal } from "../../helpers/formatReal";
import {
  ActionContainer,
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
        <div id="quantity"></div>
      </ActionContainer>
    </ProductContainer>
  );
}