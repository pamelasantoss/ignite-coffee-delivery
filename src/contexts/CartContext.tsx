import { ReactNode, createContext, useReducer } from "react";
import { Cart, cartReducer } from "../reducers/cart/reducer";
import { products } from "../json/products";
import { addProductToCartAction, sumProductToCartAction } from "../reducers/cart/actions";

interface CartContextType {
  cart: Cart[],
  addProductToCart: (id: number) => void
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

  function addProductToCart(id: number) {
    const filterProducts = products.find(item => item.id === id);
    const productAlreadyAddedToCart = cart.find(product => product.id === id);

    if (filterProducts) {
      if (productAlreadyAddedToCart) {
        dispatch(sumProductToCartAction(filterProducts));
      } else {
        dispatch(addProductToCartAction(filterProducts));
      }
    }
  }

  return (
    <CartContext.Provider value={{ cart, addProductToCart }}>
      {children}
    </CartContext.Provider>
  );
}