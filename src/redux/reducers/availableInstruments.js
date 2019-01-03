import {
  FETCH_AVAILABLE_INSTRU_LOADING,
  FETCH_AVAILABLE_INSTRU_ERROR,
  FETCH_AVAILABLE_INSTRU
} from "../../constants";
import commonDefaultState from "../commonDefaultState";
const initialState = {
  ...commonDefaultState
};
export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_AVAILABLE_INSTRU_LOADING: {
      return {
        ...state,
        isLoading: true
      };
    }
    case FETCH_AVAILABLE_INSTRU: {
      return {
        isLoading: false,
        data: action.payload
      };
    }
    case FETCH_AVAILABLE_INSTRU_ERROR: {
      return {
        ...state,
        hasError: true
      };
    }
    default:
      return state;
  }
}
