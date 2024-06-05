export interface Cart {
  id: string
}

interface CartState {
  cart: Cart[]
}

export function cartReducer(state: CartState, action: unknown) {
  console.log(action);
  return state;
}