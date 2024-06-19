import { ReactNode, createContext, useEffect, useReducer, useState } from "react";
import { CheckoutSummary, Product, cartReducer } from "../reducers/cart/reducer";
import { products } from "../json/products";
import {
  addProductToCartAction,
  removeProductFromCartAction,
  sendOrderAction,
  sumProductToCartAction,
  updatePriceAction,
  updateProductQuantityAction
} from "../reducers/cart/actions";
import { addressFormData } from "../components/AddressForm";

interface CartContextType {
  cart: Product[],
  productList: Product[],
  payment: string,
  summary: CheckoutSummary,
  addProductToCart: (id: number) => void,
  updateProductQuantity: (productId: number, quantity: number) => void,
  removeProductFromCart: (id: number) => void,
  selectPaymentMethod: (method: string) => void,
  sendCheckoutOrder: (address: addressFormData) => void,
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [payment, setPayment] = useState("");
  const [cartState, dispatch] = useReducer(
    cartReducer, {
      cart: [],
      productList: products,
      address: null,
      paymentMethod: payment,
      summary: {
        items: 0,
        delivery: 3.5,
        total: 0
      },
      order: null
    }
  );

  const { cart, productList, summary, order } = cartState;

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

  function selectPaymentMethod(method: string) {
    setPayment(method);
  }

  function sendCheckoutOrder(address: addressFormData) {
    console.log("---- ENVIANDO O PEDIDO! ----");
    console.log("Endereço de entrega do pedido: ", address);
    console.log("Payment: ", payment);
    console.log("Cart: ", cart);
    console.log("Summary: ", summary);
    console.log("----------------------------");
    dispatch(sendOrderAction(address, payment));
  }

  useEffect(() => {
    dispatch(updatePriceAction(cart));
  }, [cart]);

  useEffect(() => {
    console.log("Pedido: ", order);
  }, [order]);

  return (
    <CartContext.Provider value={{
      cart,
      productList,
      payment,
      summary,
      addProductToCart,
      updateProductQuantity,
      removeProductFromCart,
      selectPaymentMethod,
      sendCheckoutOrder
    }}>
      {children}
    </CartContext.Provider>
  );
}