import {
    ITEM_LIST_REQUEST,
    ITEM_LIST_SUCCESS,
    ITEM_LIST_FAIL,
  } from '../constants/itemConstants';
import axios from 'axios';



export const listItems = (endpoint, numItems) => async (dispatch) => {
  try{

    dispatch({type: ITEM_LIST_REQUEST});

    // push objects from endpoint in to this array
    var data = [];

    // hit endpoing number of times set by props
    for(let i = 0; i < numItems; i++){
      const item = await axios.get(endpoint);
      data.push(item.data);
    }

    // update app state with array of objects from endpoint
    dispatch({type: ITEM_LIST_SUCCESS,  payload: data})
  }

  catch(error){
    dispatch({ type: ITEM_LIST_FAIL, payload: error.message});
  }
}
