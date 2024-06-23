import {
  CurrencyDollar,
  MapPinLine,
  Trash
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
  PaymentButtonsSection,
  RemoveProductButton
} from "./styles";
import { formatReal } from "../../helpers/formatReal";
import { QuantityAction } from "../../components/QuantityAction";
import { Link } from "react-router-dom";
import { AddressForm } from "../../components/AddressForm";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { payments } from "../../json/payments";
import { PaymentButton } from "../../components/PaymentButton";

export function Checkout() {
  const {
    cart,
    payment,
    summary,
    removeProductFromCart,
    selectPaymentMethod
  } = useContext(CartContext);

  function removeFromCart(id: number) {
    removeProductFromCart(id);
  }

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
                {payments.map((item) => (
                  <PaymentButton
                    key={item.id}
                    name={item.type}
                    icon={item.icon}
                    isPaymentSelected={payment}
                    onSelectionPayment={selectPaymentMethod}
                  />
                ))}
              </PaymentButtonsSection>
            </CheckoutInfoContainer>
          </CheckoutLeftContainer>

          <CheckoutRightContainer>
            <h2>Cafés selecionados</h2>

            <CheckoutInfoContainer>
              <CheckoutProductList>
                {cart.map((item) => (
                  <div className="productCard" key={item.id}>
                    <div className="image">
                      <img src={item.image} alt={`Produto - ${item.name}`} />
                    </div>
                    <div className="info">
                      <p>{item.name}</p>
                      <div className="actions">
                        <QuantityAction
                          productId={item.id}
                          productQuantity={item.quantity}
                          componentHeight={32}
                        />
                        <RemoveProductButton
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Trash size={16} />
                          Remover
                        </RemoveProductButton>
                      </div>
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
                    <p className="value">R$ {formatReal(summary.items)}</p>
                  </li>
                  <li>
                    <p className="subtitle">Entrega</p>
                    <p className="value">R$ {formatReal(summary.delivery)}</p>
                  </li>
                  <li>
                    <p className="subtitle">Total</p>
                    <p className="value">R$ {formatReal(summary.total)}</p>
                  </li>
                </ul>

                <button
                  type="submit"
                  disabled={payment === "" ? true : false}
                  form="address-form"
                >
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