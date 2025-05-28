import { Bank, CreditCard, Money } from "@phosphor-icons/react";
import { Payment } from "./styles";

type PaymentButtonProps = {
  name: "Cartão de crédito" | "Cartão de débito" | "Dinheiro",
  icon: string,
  isPaymentSelected: string,
  onSelectionPayment: (type: string) => void
}

export function PaymentButton({
  name,
  icon,
  isPaymentSelected,
  onSelectionPayment
}: PaymentButtonProps) {
  return (
    <Payment
      onClick={() => onSelectionPayment(name)}
      className={isPaymentSelected === name ? "active" :  ""}
    >
      {icon === "creditCard" && (
        <CreditCard size={16} />
      )}

      {icon === "bank" && (
        <Bank size={16} />
      )}

      {icon === "money" && (
        <Money size={16} />
      )}

      {name}
    </Payment>
  );
}