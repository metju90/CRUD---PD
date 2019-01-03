import { fetchGet } from "../util";
import {
  FETCH_INSTRU_RATE_LOADING,
  FETCH_INSTRU_RATE,
  FETCH_INSTRU_RATE_ERROR,
  FETCH_AVAILABLE_INSTRU,
  FETCH_AVAILABLE_INSTRU_ERROR,
  FETCH_AVAILABLE_INSTRU_LOADING
} from "../constants";

const fetchInstrumentsRate = number => dispatch => {
  fetchGet("/rateSnapshot")
    .then(res => res.json())
    .then(res =>
      dispatch({
        type: FETCH_INSTRU_RATE,
        payload: res
      })
    )
    .catch(err => {
      console.error("fetching failed", err);
      dispatch({
        type: FETCH_INSTRU_RATE_ERROR
      });
    });
};

const setLoadingInstrumentsOn = () => dispatch => {
  dispatch({
    type: FETCH_INSTRU_RATE_LOADING,
    payload: true
  });
};

const setLoadingInstrumentsOff = () => dispatch => {
  dispatch({
    type: FETCH_INSTRU_RATE_LOADING,
    payload: false
  });
};

const setLoadingFetchInstru = () => dispatch => {
  dispatch({
    type: FETCH_AVAILABLE_INSTRU_LOADING
  });
};
const fetchAvailableInstruments = () => dispatch => {
  fetchGet("/supportedCurrencyPairs")
    .then(res => res.json())
    .then(res =>
      dispatch({
        type: FETCH_AVAILABLE_INSTRU,
        payload: res
      })
    )
    .catch(err => {
      console.error("fetching failed", err);
      dispatch({
        type: FETCH_AVAILABLE_INSTRU_ERROR
      });
    });
};

export {
  fetchInstrumentsRate,
  fetchAvailableInstruments,
  setLoadingInstrumentsOn,
  setLoadingInstrumentsOff,
  setLoadingFetchInstru
};
