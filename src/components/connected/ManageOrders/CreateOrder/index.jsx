import { connect } from "react-redux";
import { CreateOrder } from "../../../ManageOrders";
import {
  fetchAvailableInstruments,
  setLoadingFetchInstru,
  submitOrder,
  resetIsCreated
} from "../../../../actions";

const mapStateToProps = state => {
  const {
    availableInstruments,
    orders,
    orders: { hasErrorCreating, isCreated }
  } = state;
  return {
    availableInstruments,
    isLoading: orders.isLoading || availableInstruments.isLoading,
    isCreated: isCreated,
    hasErrorCreating
  };
};

const mapDispatchToProps = {
  submitOrder,
  fetchAvailableInstruments,
  setLoadingFetchInstru,
  resetIsCreated
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateOrder);
