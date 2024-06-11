import { produce } from "immer";
import { ActionTypes } from "./actions";

export interface Product {
  id: number,
  image: string,
  name: string,
  description: string,
  tags: string[],
  price: number,
  quantity: number,
}

interface CartState {
  cart: Product[],
  productList: Product[]
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
    });
  case ActionTypes.UPDATE_QUANTITY:
    return produce(state, (draft) => {
      const currentProductList = draft.productList.findIndex(
        product => product.id === action.payload.productId
      );
      draft.productList[currentProductList].quantity = action.payload.quantity;
    });
  case ActionTypes.REMOVE_TO_CART:
    return produce(state, (draft) => {
      const indexToRemove = draft.cart.findIndex(
        product => product.id === action.payload.productId
      );
      if (indexToRemove !== -1) {
        draft.cart.splice(indexToRemove, 1);
      }
    });
  default:
    return state;
  }
}