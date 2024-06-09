import { Cart } from "./reducer";

export enum ActionTypes {
  ADD_TO_CART = "ADD_TO_CART"
}

export function addProductToCartAction(productToAdd: Cart) {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: productToAdd
  };
}