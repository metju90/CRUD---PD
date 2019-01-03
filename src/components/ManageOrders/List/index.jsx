import React, { PureComponent, Fragment } from "react";
import { ClipLoader } from "react-spinners";
import debounce from "lodash/debounce";
import uuid from "uuid";
import { PageHeader, Alert } from "react-bootstrap";

import Table from "../../Table";
import Order from "./Order";

class List extends PureComponent {
  constructor() {
    super();
    this.columns = [
      "Investment",
      "Counter",
      "Buy/Sell",
      "limit",
      "Valid until",
      "Delete"
    ];
  }

  state = {
    ordersQueuedToDelete: []
  };

  componentDidMount() {
    this.props.setLoadingOrderOn();
    this.fetchOrders = debounce(this.fetchOrders, 500);
    this.fetchOrders();
  }

  componentWillUnmount() {
    this.fetchOrders.cancel();
    this.props.setLoadingOrderOff();
    this.props.resetHasDeletingError();
  }

  addOrderToDeleteQueue = orderId => {
    this.setState(state => {
      const { ordersQueuedToDelete } = state;
      ordersQueuedToDelete.push(orderId);
      return { ordersQueuedToDelete };
    });
  };

  fetchOrders() {
    this.props.fetchOrders();
  }

  render() {
    const {
      orders: { isLoading, hasErrorFetching, data, hasDeletingError },
      deleteOrder
    } = this.props;

    return (
      <Fragment>
        {(hasErrorFetching || hasDeletingError) && (
          <Alert bsStyle="danger">Sorry,Something went wrong</Alert>
        )}
        <PageHeader>Orders</PageHeader>
        {!hasErrorFetching && (
          <Table isLoading={isLoading} columns={this.columns}>
            {isLoading && <ClipLoader />}
            {!isLoading &&
              data.map(d => (
                <Order deleteOrder={deleteOrder} key={uuid()} {...d} />
              ))}
          </Table>
        )}
      </Fragment>
    );
  }
}

export default List;
