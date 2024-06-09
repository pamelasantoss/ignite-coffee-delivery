import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money
} from "@phosphor-icons/react";
import {
  CheckoutContainer,
  CheckoutEmptyContainer,
  CheckoutInfoContainer,
  CheckoutLeftContainer,
  CheckoutProductList,
  CheckoutRightContainer,
  CheckoutSummaryContent,
  CheckoutTitleSection,
  PaymentButton,
  PaymentButtonsSection
} from "./styles";
import { products } from "../../json/products";
import { formatReal } from "../../helpers/formatReal";
import { QuantityAction } from "../../components/QuantityAction";
import { Link } from "react-router-dom";
import { AddressForm } from "../../components/AddressForm";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function Checkout() {
  const { cart } = useContext(CartContext);

  return (
    <CheckoutContainer>
      {cart.length > 0 ? (
        <>
          <CheckoutLeftContainer>
            <h2>Complete seu pedido</h2>

            <CheckoutInfoContainer>
              <CheckoutTitleSection iconColor="orange">
                <MapPinLine size={20} />
                <p>
                  <span>Endereço de entrega</span>
              Informe o endereço onde deseja receber seu pedido
                </p>
              </CheckoutTitleSection>

              <AddressForm />
            </CheckoutInfoContainer>

            <CheckoutInfoContainer>
              <CheckoutTitleSection iconColor="purple">
                <CurrencyDollar size={20} />
                <p>
                  <span>Pagamento</span>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
                </p>
              </CheckoutTitleSection>

              <PaymentButtonsSection>
                <PaymentButton>
                  <CreditCard size={16} />
              Cartão de crédito
                </PaymentButton>

                <PaymentButton>
                  <Bank size={16} />
              Cartão de débito
                </PaymentButton>

                <PaymentButton className="active">
                  <Money size={16} />
              Dinheiro
                </PaymentButton>
              </PaymentButtonsSection>
            </CheckoutInfoContainer>
          </CheckoutLeftContainer>

          <CheckoutRightContainer>
            <h2>Cafés selecionados</h2>

            <CheckoutInfoContainer>
              <CheckoutProductList>
                {products.map((item) => (
                  <div className="productCard" key={item.id}>
                    <div className="image">
                      <img src={item.image} alt={`Produto - ${item.name}`} />
                    </div>
                    <div className="info">
                      <p>{item.name}</p>
                      <QuantityAction componentHeight={32} />
                    </div>
                    <div className="price">
                      <p><span>R$</span>{formatReal(item.price)}</p>
                    </div>
                  </div>
                ))}
              </CheckoutProductList>

              <CheckoutSummaryContent>
                <ul>
                  <li>
                    <p className="subtitle">Total de itens</p>
                    <p className="value">R$ 29,70</p>
                  </li>
                  <li>
                    <p className="subtitle">Entrega</p>
                    <p className="value">R$ 3,50</p>
                  </li>
                  <li>
                    <p className="subtitle">Total</p>
                    <p className="value">R$ 33,20</p>
                  </li>
                </ul>

                <button type="button">
              Confirmar pedido
                </button>
              </CheckoutSummaryContent>
            </CheckoutInfoContainer>
          </CheckoutRightContainer>
        </>
      ) : (
        <CheckoutEmptyContainer>
          <h1>Seu carrinho está vazio</h1>
          <p>Adicione produtos no seu carrinho para seguir com a compra</p>
          <Link to="/" title="Home" role="button">Continuar comprando</Link>
        </CheckoutEmptyContainer>
      )}
    </CheckoutContainer>
  );
} 