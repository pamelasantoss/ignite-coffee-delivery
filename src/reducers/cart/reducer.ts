import { produce } from "immer";
import { ActionTypes } from "./actions";

export interface Cart {
  id: number,
  image: string,
  name: string,
  description: string,
  tags: string[],
  price: number
}

interface CartState {
  cart: Cart[]
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
  case ActionTypes.ADD_TO_CART:
    return produce(state, (draft) => {
      draft.cart.push(action.payload);
    });
  default:
    return state;
  }
}