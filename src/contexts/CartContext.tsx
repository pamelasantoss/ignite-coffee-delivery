import { ReactNode, createContext, useReducer } from "react";
import { Cart, cartReducer } from "../reducers/cart/reducer";
import { products } from "../json/products";
import {
  addProductToCartAction,
  removeProductFromCartAction,
  sumProductToCartAction,
  updateProductQuantityAction
} from "../reducers/cart/actions";

interface CartContextType {
  cart: Cart[],
  productList: Cart[],
  addProductToCart: (id: number) => void,
  updateProductQuantity: (productId: number, quantity: number) => void,
  removeProductFromCart: (id: number) => void,
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer, {
      cart: [],
      productList: products
    }
  );

  const { cart, productList } = cartState;

  function addProductToCart(id: number) {
    const filterProducts = productList.find(item => item.id === id);
    const productAlreadyAddedToCart = cart.find(product => product.id === id);

    if (filterProducts) {
      if (productAlreadyAddedToCart) {
        dispatch(sumProductToCartAction(filterProducts));
      } else {
        dispatch(addProductToCartAction(filterProducts));
      }
    }
  }

  function updateProductQuantity(productId: number, quantity: number) {
    dispatch(updateProductQuantityAction(productId, quantity));
  }

  function removeProductFromCart(productId: number) {
    dispatch(removeProductFromCartAction(productId));
  }

  return (
    <CartContext.Provider value={{
      cart,
      productList,
      addProductToCart,
      updateProductQuantity,
      removeProductFromCart
    }}>
      {children}
    </CartContext.Provider>
  );
}