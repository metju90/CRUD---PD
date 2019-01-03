import React, { PureComponent } from "react";
import { ClipLoader } from "react-spinners";
import { FaTrash } from "react-icons/fa";

class Order extends PureComponent {
  state = {
    isLoading: false
  };
  handleOnClick = () => {
    this.setState({ isLoading: true });
    const { deleteOrder, id } = this.props;
    deleteOrder(id);
  };
  render() {
    const { investmentCcy, counterCcy, buy, limit, validUntil } = this.props;
    const { isLoading } = this.state;
    return (
      <div className={`symbol-row`}>
        {isLoading && (
          <div className="disable-overlay">
            <ClipLoader />
          </div>
        )}
        <span>{investmentCcy}</span>
        <span>{counterCcy}</span>
        <span>{buy ? "Buy" : "Sell"}</span>
        <span>{limit}</span>
        <span>{validUntil}</span>
        <span onClick={this.handleOnClick} className="trash">
          <FaTrash />
        </span>
      </div>
    );
  }
}

export default Order;
