export interface Cart {
  id: string
}

interface CartState {
  cart: Cart[]
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
  case "Add_to_Cart":
    return state;
  default:
    return state;
  }
}