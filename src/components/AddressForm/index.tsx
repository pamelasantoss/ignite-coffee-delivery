import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormCheckoutContainer } from "./styles";
import { zodResolver } from "@hookform/resolvers/zod";

const addressFormSchema = z.object({
  cep: z.string().min(1, "Insira um CEP válido"),
  street: z.string().min(1, "Insira um endereço válido"),
  number: z.string().min(1, "Insira o número do endereço"),
  complement: z.string().optional(),
  neighbour: z.string().min(1, "Insira o nome do bairro"),
  city: z.string().min(1, "Insira a cidade"),
  uf: z
    .string()
    .min(1,"Insira a sigla do estado que corresponde ao endereço")
    .max(2, "Esse campo deve conter no máximo 2 caracteres")
});

type addressFormData = z.infer<typeof addressFormSchema>;

export function AddressForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<addressFormData>({
    resolver: zodResolver(addressFormSchema)
  });

  function handleCheckoutOrder(data: addressFormData) {
    // eslint-disable-next-line no-console
    console.log("Dados: ", data);
  }

  return (
    <FormCheckoutContainer>
      <form onSubmit={handleSubmit(handleCheckoutOrder)}>
        <div className="fieldset">
          <input
            type="text"
            placeholder="CEP"
            className={`input-cep ${errors.cep ? "error" : ""}`}
            required
            {...register("cep")}
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
            <input type="text" placeholder="Complemento" {...register("complement")} />
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
  );
}