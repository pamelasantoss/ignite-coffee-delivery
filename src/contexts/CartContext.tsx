import { ReactNode, createContext, useReducer } from "react";
import { Cart, cartReducer } from "../reducers/cart/reducer";

interface CartContextType {
  cart: Cart[]
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer, {
      cart: [],
    }
  );

  const { cart } = cartState;

  return (
    <CartContext.Provider value={{ cart }}>
      {children}
    </CartContext.Provider>
  );
}