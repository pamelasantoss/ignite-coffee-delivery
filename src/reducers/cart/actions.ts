import { addressFormData } from "../../components/AddressForm";
import { Product } from "./reducer";

export enum ActionTypes {
  ADD_TO_CART = "ADD_TO_CART",
  SUM_TO_CART = "SUM_TO_CART",
  REMOVE_TO_CART = "REMOVE_TO_CART",
  UPDATE_QUANTITY = "UPDATE_QUANTITY",
  UPDATE_PRICE = "UPDATE_PRICE",
  SEND_ORDER = "SEND_ORDER"
}

export function addProductToCartAction(productToAdd: Product) {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: productToAdd
  };
}

export function sumProductToCartAction(productToAdd: Product) {
  return {
    type: ActionTypes.SUM_TO_CART,
    payload: productToAdd
  };
}

export function removeProductFromCartAction(productId: number) {
  return {
    type: ActionTypes.REMOVE_TO_CART,
    payload: {
      productId: productId,
    }
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

export function updatePriceAction(productList: Product[]) {
  return {
    type: ActionTypes.UPDATE_PRICE,
    payload: productList
  };
}

export function sendOrderAction(address: addressFormData, payment: string) {
  return {
    type: ActionTypes.SEND_ORDER,
    payload: {
      address: address,
      payment: payment
    }
  };
}