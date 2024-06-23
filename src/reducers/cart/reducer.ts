import { produce } from "immer";
import { ActionTypes } from "./actions";
import { addressFormData } from "../../components/AddressForm";

export interface Product {
  id: number,
  image: string,
  name: string,
  description: string,
  tags: string[],
  price: number,
  quantity: number,
}

export interface CheckoutSummary {
  items: number,
  delivery: number,
  total: number
}

interface CartState {
  cart: Product[],
  productList: Product[],
  address: addressFormData | null,
  paymentMethod: string,
  summary: CheckoutSummary
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
  case ActionTypes.ADD_TO_CART:
    return produce(state, (draft) => {
      draft.cart.push(action.payload);
    });
  case ActionTypes.SUM_TO_CART:
    return produce(state, (draft) => {
      const currentProductList = draft.cart.findIndex(
        product => product.id === action.payload.id
      );
      draft.cart[currentProductList].quantity += 1;
      draft.productList[currentProductList].quantity += 1;
    });
  case ActionTypes.UPDATE_QUANTITY:
    return produce(state, (draft) => {
      const currentProductList = draft.productList.findIndex(
        product => product.id === action.payload.productId
      );
      draft.productList[currentProductList].quantity = action.payload.quantity;
      if (draft.cart[currentProductList]) {
        draft.cart[currentProductList].quantity = action.payload.quantity;
      }
    });
  case ActionTypes.REMOVE_TO_CART:
    return produce(state, (draft) => {
      const indexToRemove = draft.cart.findIndex(
        product => product.id === action.payload.productId
      );

      const indexToUpdate = draft.productList.findIndex(
        product => product.id === action.payload.productId
      );
      if (indexToRemove !== -1) {
        draft.cart.splice(indexToRemove, 1);
        draft.productList[indexToUpdate].quantity = 1;
      }
    });
  case ActionTypes.UPDATE_PRICE: {
    const totalPriceItems = action.payload.reduce((
      total: number, item: { price: number; quantity: number }
    ) => total + (item.price * item.quantity), 0);
    const totalWithDelivery = totalPriceItems + state.summary.delivery;
    return produce(state, (draft) => {
      draft.summary.items = totalPriceItems;
      draft.summary.total = totalWithDelivery;
    });
  }
  case ActionTypes.SEND_ORDER:
    return produce(state, (draft) => {
      draft.address = action.payload.address;
      draft.paymentMethod = action.payload.payment;
    });
  default:
    return state;
  }
}