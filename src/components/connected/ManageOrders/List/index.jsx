import { connect } from "react-redux";

import { OrderList } from "../../../ManageOrders";
import {
  fetchOrders,
  setLoadingOrderOn,
  setLoadingOrderOff,
  deleteOrder,
  resetHasDeletingError
} from "../../../../actions";

const mapStateToProps = state => {
  const { orders } = state;
  return { orders };
};
const mapDispatchToProps = {
  fetchOrders,
  setLoadingOrderOn,
  setLoadingOrderOff,
  deleteOrder,
  resetHasDeletingError
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderList);
