import { Cart } from "./reducer";

export enum ActionTypes {
  ADD_TO_CART = "ADD_TO_CART",
  SUM_TO_CART = "SUM_TO_CART",
  REMOVE_TO_CART = "REMOVE_TO_CART",
  UPDATE_QUANTITY = "UPDATE_QUANTITY"
}

export function addProductToCartAction(productToAdd: Cart) {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: productToAdd
  };
}

export function sumProductToCartAction(productToAdd: Cart) {
  return {
    type: ActionTypes.SUM_TO_CART,
    payload: productToAdd
  };
}

export function removeProductFromCartAction(productToRemove: Cart) {
  return {
    type: ActionTypes.REMOVE_TO_CART,
    payload: productToRemove
  };
}

export function updateProductQuantityAction(productId: number, quantity: number) {
  return {
    type: ActionTypes.UPDATE_QUANTITY,
    payload: {
      productId: productId,
      quantity: quantity
    }
  };
}