import axios from 'axios';
import { ADD_PRODUCTS, ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from './constants';

export const addProducts = () => {
  return (dispatch) => {
    axios('https://fakestoreapi.com/products')
      .then((obj) => {
        dispatch({
          type: ADD_PRODUCTS,
          payload: obj.data,
        })
      })
  }
};

export const addProductToCart = (id) => {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: id
  }
};

export const removeProductFromCart = (id) => {
  return {
    type: REMOVE_PRODUCT_FROM_CART,
    payload: id
  }
};
