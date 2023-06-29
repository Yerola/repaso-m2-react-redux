import { ADD_PRODUCTS, ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from "./constants";

const initialState = {
  catalog: [],
  cart: [],
};

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_PRODUCTS: {
      return {
        ...state,
        catalog: action.payload
      }
    }

    case ADD_PRODUCT_TO_CART: {
      const id = action.payload;
      const product = state.catalog.find((prod) => prod.id === id);

      return {
        ...state,
        cart: [...state.cart, product]
      }
    }

    case REMOVE_PRODUCT_FROM_CART: {
      const id = action.payload;
      console.log(state.cart);

      return {
        ...state,
        cart: state.cart.filter(prod => prod.id !== id)
      }
    }

    default:
      return { ...state }
  }
};
