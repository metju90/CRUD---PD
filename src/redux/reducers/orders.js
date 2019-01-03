import {
  FETCHED_ORDERS_LOADING,
  FETCHED_ORDERS,
  FETCHED_ORDERS_ERROR,
  CREATE_ORDER_LOADING,
  CREATED_ORDER,
  CREATE_ORDER_ERROR,
  DELETE_ORDER_FAILED,
  DELETE_ORDER_SUCCESS
} from "../../constants";
import commonDefaultState from "../commonDefaultState";
const initialState = {
  ...commonDefaultState,
  isCreated: false,
  hasDeletingError: false
};
export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_ORDER_LOADING:
    case FETCHED_ORDERS_LOADING: {
      return {
        ...state,
        isLoading: action.payload
      };
    }
    case DELETE_ORDER_SUCCESS:
    case FETCHED_ORDERS: {
      return {
        ...state,
        isLoading: false,
        hasDeletingError: false,
        data: action.payload
      };
    }
    case CREATE_ORDER_ERROR: {
      return {
        ...state,
        isLoading: false,
        hasErrorCreating: true
      };
    }
    case FETCHED_ORDERS_ERROR: {
      return {
        ...state,
        isLoading: false,
        hasErrorFetching: true
      };
    }
    case CREATED_ORDER: {
      return {
        ...state,
        isLoading: false,
        isCreated: action.payload
      };
    }
    case DELETE_ORDER_FAILED: {
      return {
        ...state,
        isLoading: false,
        hasDeletingError: action.payload
      };
    }
    default:
      return state;
  }
}
