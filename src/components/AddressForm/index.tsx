import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormCheckoutContainer } from "./styles";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Loader } from "../Loader";

const addressFormSchema = z.object({
  cep: z.string().min(1, "Insira um CEP válido"),
  street: z.string().min(1, "Insira um endereço válido"),
  number: z.string().min(1, "Insira o número do endereço"),
  complement: z.string().optional(),
  neighbour: z.string().min(1, "Insira o nome do bairro"),
  city: z.string().min(1, "Insira a cidade"),
  uf: z
    .string()
    .min(1, "Insira a sigla do estado que corresponde ao endereço")
    .max(2, "Esse campo deve conter no máximo 2 caracteres")
    .transform((value) => value.toLocaleUpperCase()),
});

export type addressFormData = z.infer<typeof addressFormSchema>;

interface AddressData {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export function AddressForm() {
  const { sendCheckoutOrder } = useContext(CartContext);
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<addressFormData>({
    resolver: zodResolver(addressFormSchema),
  });
  const [updateAddress, setUpdateAddress] = useState<AddressData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const onSearchAddress = async (value: string) => {
    try {
      setIsLoading(true);
      const fullAddress = await fetch(
        `https://viacep.com.br/ws/${value}/json/`
      );
      const fullAddressResponse = await fullAddress.json();
      setUpdateAddress(fullAddressResponse);
    } catch (error) {
      setUpdateAddress(null);
      // eslint-disable-next-line no-console
      console.error(
        "Desculpe, não conseguimos encontrar seu endereço. Tente novamente mais tarde. ",
        error
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (updateAddress) {
      setValue("street", updateAddress.logradouro);
      setValue("neighbour", updateAddress.bairro);
      setValue("city", updateAddress.localidade);
      setValue("uf", updateAddress.uf);
    } else {
      reset();
    }
  }, [reset, setValue, updateAddress]);

  return (
    <>
      {isLoading && <Loader />}
      <FormCheckoutContainer>
        <form id="address-form" onSubmit={handleSubmit(sendCheckoutOrder)}>
          <div className="fieldset">
            <input
              type="text"
              placeholder="CEP"
              maxLength={8}
              className={`input-cep ${errors.cep ? "error" : ""}`}
              required
              {...register("cep")}
              onBlur={(e) => onSearchAddress(e.target.value)}
            />
          </div>

          <div className="fieldset">
            <input
              type="text"
              placeholder="Rua"
              className={errors.street ? "error" : ""}
              required
              {...register("street")}
            />
          </div>

          <div className="fieldset">
            <input
              type="number"
              placeholder="Número"
              className={`input-numero ${errors.number ? "error" : ""}`}
              required
              {...register("number")}
            />
            <div className="fieldset-complemento">
              <input
                type="text"
                placeholder="Complemento"
                {...register("complement")}
              />
              <span>Opcional</span>
            </div>
          </div>

          <div className="fieldset">
            <input
              type="text"
              placeholder="Bairro"
              className={`input-bairro ${errors.neighbour ? "error" : ""}`}
              required
              {...register("neighbour")}
            />
            <input
              type="text"
              placeholder="Cidade"
              className={errors.city ? "error" : ""}
              required
              {...register("city")}
            />
            <input
              type="text"
              placeholder="UF"
              className={`input-uf ${errors.uf ? "error" : ""}`}
              required
              maxLength={2}
              {...register("uf")}
            />
          </div>
        </form>
      </FormCheckoutContainer>
    </>
  );
}
