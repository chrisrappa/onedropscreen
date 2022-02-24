import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL
  } from '../constants/itemConstants';
import axios from 'axios';


export const listProducts = (endpoint) => async (dispatch) => {
  try{

    dispatch({type: PRODUCT_LIST_REQUEST});

    const data = await axios.get(endpoint);

    dispatch({type: PRODUCT_LIST_SUCCESS,  payload: data})
  }

  catch(error){
    dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message});
  }
}

