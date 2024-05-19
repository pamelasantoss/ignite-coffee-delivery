import { Minus, Plus } from "@phosphor-icons/react";
import { QuantityContainer } from "./styles";

export function QuantityAction() {
  return (
    <QuantityContainer>
      <button type="button">
        <Minus size={16} weight="bold" />
      </button>

      <input type="number" value={1} max={10} />

      <button type="button">
        <Plus size={16} weight="bold" />
      </button>
    </QuantityContainer>
  );
}