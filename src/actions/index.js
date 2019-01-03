import {
  fetchInstrumentsRate,
  setLoadingFetchInstru,
  setLoadingInstrumentsOn,
  setLoadingInstrumentsOff,
  fetchAvailableInstruments
} from "./instruments";
import {
  fetchOrders,
  submitOrder,
  setLoadingOrderOn,
  setLoadingOrderOff,
  deleteOrder,
  resetIsCreated,
  resetHasDeletingError
} from "./orders";

export {
  fetchInstrumentsRate,
  fetchOrders,
  fetchAvailableInstruments,
  setLoadingOrderOn,
  setLoadingOrderOff,
  setLoadingInstrumentsOn,
  setLoadingInstrumentsOff,
  setLoadingFetchInstru,
  submitOrder,
  deleteOrder,
  resetIsCreated,
  resetHasDeletingError
};
