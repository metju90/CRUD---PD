import {
  FETCH_INSTRU_RATE_LOADING,
  FETCH_INSTRU_RATE_ERROR,
  FETCH_INSTRU_RATE
} from "../../constants";
import commonDefaultState from "../commonDefaultState";
const initialState = {
  ...commonDefaultState
};
export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_INSTRU_RATE_LOADING: {
      return {
        ...state,
        isLoading: action.payload
      };
    }
    case FETCH_INSTRU_RATE: {
      return {
        isLoading: false,
        data: action.payload
      };
    }
    case FETCH_INSTRU_RATE_ERROR: {
      return {
        ...state,
        isLoading: false,
        hasError: true
      };
    }
    default:
      return state;
  }
}
