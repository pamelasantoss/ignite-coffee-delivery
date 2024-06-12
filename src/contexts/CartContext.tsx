import { ReactNode, createContext, useEffect, useReducer } from "react";
import { CheckoutSummary, Product, cartReducer } from "../reducers/cart/reducer";
import { products } from "../json/products";
import {
  addProductToCartAction,
  removeProductFromCartAction,
  sumProductToCartAction,
  updatePriceAction,
  updateProductQuantityAction
} from "../reducers/cart/actions";

interface CartContextType {
  cart: Product[],
  productList: Product[],
  summary: CheckoutSummary,
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
      productList: products,
      summary: {
        items: 0,
        delivery: 3.5,
        total: 0
      }
    }
  );

  const { cart, productList, summary } = cartState;

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

  useEffect(() => {
    dispatch(updatePriceAction(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{
      cart,
      productList,
      summary,
      addProductToCart,
      updateProductQuantity,
      removeProductFromCart
    }}>
      {children}
    </CartContext.Provider>
  );
}