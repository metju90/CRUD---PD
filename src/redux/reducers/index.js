import { combineReducers } from "redux";
import instrumentsRate from "./instrumentsRate";
import availableInstruments from "./availableInstruments";
import orders from "./orders";

export default combineReducers({
  availableInstruments,
  instrumentsRate,
  orders
});
