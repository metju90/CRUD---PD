import { fetchGet, fetchPost, formatNewOrder } from "../util";
import {
  FETCHED_ORDERS_LOADING,
  FETCHED_ORDERS,
  FETCHED_ORDERS_ERROR,
  CREATE_ORDER_LOADING,
  CREATED_ORDER,
  CREATE_ORDER_ERROR,
  DELETE_ORDER_FAILED,
  DELETE_ORDER_SUCCESS
} from "../constants";

const fetchOrders = number => (dispatch, getState) => {
  fetchGet("/retrieveOrders")
    .then(res => res.json())
    .then(res => {
      dispatch({
        type: FETCHED_ORDERS,
        payload: res
      });
    })
    .catch(err => {
      console.error("fetching failed", err);
      dispatch({
        type: FETCHED_ORDERS_ERROR
      });
    });
};

const setLoadingOrderOn = () => dispatch => {
  dispatch({ type: FETCHED_ORDERS_LOADING, payload: true });
};

const setLoadingOrderOff = () => dispatch => {
  dispatch({ type: FETCHED_ORDERS_LOADING, payload: false });
};

const submitOrder = order => (dispatch, getState) => {
  dispatch({ type: CREATE_ORDER_LOADING });
  fetchPost("/createOrder", formatNewOrder(order))
    .then(res => res.json())
    .then(res => dispatch({ type: CREATED_ORDER, payload: true }))
    .catch(err => {
      console.error("fetching failed", err);
      dispatch({
        type: CREATE_ORDER_ERROR
      });
    });
};

const resetIsCreated = () => dispatch =>
  dispatch({ type: CREATED_ORDER, payload: false });

const resetHasDeletingError = () => dispatch =>
  dispatch({
    type: DELETE_ORDER_FAILED,
    payload: false
  });

const deleteOrder = orderId => (dispatch, getState) => {
  fetchPost("/cancelOrder", orderId.toString())
    .then(res => res.json())
    .then(res => {
      if (res === true) {
        const updatedOrderList = getState().orders.data.filter(
          o => o.id !== orderId
        );
        dispatch({
          type: DELETE_ORDER_SUCCESS,
          payload: updatedOrderList
        });
        return null;
      }
      dispatch({
        type: DELETE_ORDER_FAILED,
        payload: true
      });
    })
    .catch(err => {
      console.error("fetching failed", err);
      dispatch({
        type: DELETE_ORDER_FAILED,
        payload: true
      });
    });
};
export {
  fetchOrders,
  submitOrder,
  setLoadingOrderOn,
  setLoadingOrderOff,
  deleteOrder,
  resetIsCreated,
  resetHasDeletingError
};
