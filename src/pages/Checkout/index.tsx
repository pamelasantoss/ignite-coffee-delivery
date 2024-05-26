import { MapPinLine } from "@phosphor-icons/react";
import {
  CheckoutContainer,
  CheckoutInfoContainer,
  CheckoutLeftContainer,
  CheckoutRightContainer,
  CheckoutTitleSection,
  FormCheckoutSection
} from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <CheckoutLeftContainer>
        <h2>Complete seu pedido</h2>

        <CheckoutInfoContainer>
          <CheckoutTitleSection>
            <MapPinLine size={20} />
            <p>
              <span>Endereço de entrega</span>
              Informe o endereço onde deseja receber seu pedido
            </p>
          </CheckoutTitleSection>

          <FormCheckoutSection>
            <form>
              <div className="fieldset">
                <input type="text" placeholder="CEP" className="input-cep" />
              </div>

              <div className="fieldset">
                <input type="text" placeholder="Rua" />
              </div>

              <div className="fieldset">
                <input type="number" placeholder="Número" className="input-numero" />
                <div className="fieldset-complemento">
                  <input type="text" placeholder="Complemento" />
                  <span>Opcional</span>
                </div>
              </div>

              <div className="fieldset">
                <input type="text" placeholder="Bairro" className="input-bairro" />
                <input type="text" placeholder="Cidade" />
                <input type="text" placeholder="UF" className="input-uf" />
              </div>
            </form>
          </FormCheckoutSection>
        </CheckoutInfoContainer>

        <CheckoutInfoContainer>
          Opções de pagamento
        </CheckoutInfoContainer>
      </CheckoutLeftContainer>

      <CheckoutRightContainer>
        <h2>Cafés selecionados</h2>

        <CheckoutInfoContainer>
          Resumo do pedido
        </CheckoutInfoContainer>
      </CheckoutRightContainer>
    </CheckoutContainer>
  );
} 