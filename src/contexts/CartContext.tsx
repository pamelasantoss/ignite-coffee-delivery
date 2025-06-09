import {
  ReactNode,
  createContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import {
  CheckoutSummary,
  Product,
  cartReducer,
} from "../reducers/cart/reducer";
import { products } from "../json/products";
import {
  addProductToCartAction,
  removeProductFromCartAction,
  sendOrderAction,
  sumProductToCartAction,
  updatePriceAction,
  updateProductQuantityAction,
} from "../reducers/cart/actions";
import { addressFormData } from "../components/AddressForm";
import { useNavigate } from "react-router-dom";

interface CartContextType {
  cart: Product[];
  productList: Product[];
  address: addressFormData | null;
  payment: string;
  summary: CheckoutSummary;
  addProductToCart: (id: number) => void;
  updateProductQuantity: (productId: number, quantity: number) => void;
  removeProductFromCart: (id: number) => void;
  selectPaymentMethod: (method: string) => void;
  sendCheckoutOrder: (address: addressFormData) => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const navigate = useNavigate();
  const [payment, setPayment] = useState("");
  const [cartState, dispatch] = useReducer(cartReducer, {
    cart: [],
    productList: products,
    address: null,
    paymentMethod: payment,
    summary: {
      items: 0,
      delivery: 3.5,
      total: 0,
    },
  });

  const { cart, productList, address, summary } = cartState;

  function addProductToCart(id: number) {
    const filterProducts = productList.find((item) => item.id === id);
    const productAlreadyAddedToCart = cart.find((product) => product.id === id);

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
    dispatch(sendOrderAction(address, payment));
    navigate("/success");
  }

  useEffect(() => {
    dispatch(updatePriceAction(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        productList,
        address,
        payment,
        summary,
        addProductToCart,
        updateProductQuantity,
        removeProductFromCart,
        selectPaymentMethod,
        sendCheckoutOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
