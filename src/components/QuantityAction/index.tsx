import { Minus, Plus } from "@phosphor-icons/react";
import { QuantityContainer, QuantityContainerProps } from "./styles";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const quantitySchema = z.object({
  quantity: z.coerce
    .number()
    .min(1)
    .max(10)
});

export function QuantityAction({ componentHeight = 38 }: QuantityContainerProps) {
  const { register, watch, getValues, setValue } = useForm({
    resolver: zodResolver(quantitySchema),
    defaultValues: {
      quantity: 1
    }
  });

  const getQuantity = watch("quantity");

  function handleRemoveItem() {
    const quantity = Number(getValues("quantity"));
    setValue("quantity", quantity - 1);
  }

  function handleAddItem() {
    const quantity = Number(getValues("quantity"));
    setValue("quantity", quantity + 1);
  }

  return (
    <QuantityContainer componentHeight={componentHeight}>
      <button
        type="button"
        onClick={handleRemoveItem}
        disabled={getQuantity === 1}
      >
        <Minus size={16} weight="bold" />
      </button>

      <input
        type="number"
        max={10}
        maxLength={2}
        {...register("quantity", {
          onChange: e => {
            const removeSpecialCharacter = e.target.value
              .toString()
              .replace("+", "")
              .replace("-", "");
            setValue("quantity", removeSpecialCharacter);
          }
        })}
        readOnly
      />

      <button
        type="button"
        onClick={handleAddItem}
        disabled={getQuantity >= 10}
      >
        <Plus size={16} weight="bold" />
      </button>
    </QuantityContainer>
  );
}