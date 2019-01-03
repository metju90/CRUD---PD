import React, { PureComponent } from "react";
import { Row, Button, PageHeader, Alert } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import debounce from "lodash/debounce";
import { format as dateFormat } from "date-fns";

import InstrumentField from "./InstrumentField";
import InvestmentCcyField from "./InvestmentCcyField";
import LimitField from "./LimitField";
import BuyOrSellField from "./BuyOrSellField";
import DateField from "./DateField";
import Confirm from "./Confirm";
import initialState from "./initialState";

class CreateOrder extends PureComponent {
  constructor() {
    super();
    this.minDate = dateFormat(new Date(), "YYYY-MM-DD");
  }
  state = {
    ...initialState
  };

  componentDidMount() {
    this.props.setLoadingFetchInstru();
    this.fetchAvailableInstruments = debounce(
      this.fetchAvailableInstruments,
      500
    );
    this.fetchAvailableInstruments();
  }

  // Reset state if an order was created
  static getDerivedStateFromProps(props, state) {
    if (props.isCreated) {
      return initialState;
    }
    return state;
  }

  componentWillUnmount() {
    this.fetchAvailableInstruments.cancel();
    this.props.resetIsCreated();
  }

  resetState = () => this.setState(initialState);

  fetchAvailableInstruments() {
    this.props.fetchAvailableInstruments();
  }

  formValidation = (value, inputName) => {
    if (value.length) {
      if (this.state.formErrors[inputName]) {
        this.setState(state => {
          delete state.formErrors[inputName];
          return {
            formErrors: {
              ...state.formErrors
            }
          };
        });
      }
      return "success";
    } else if (!value.length) {
      if (!this.state.formErrors[inputName]) {
        this.setState(state => {
          return {
            isConfirmingOrder: false,
            formErrors: {
              ...state.formErrors,
              [inputName]: true
            }
          };
        });
      }
      return "error";
    }
  };

  onChangeInvestment = e => {
    const { selectedCcy1, selectedCcy2 } = this.state;
    const investmentCcy = e.target.value;
    // if `investmentCcy` is the user's selection, of from
    // `selectedCcy1/ccy2`, to determine which is the `counterCcy`
    // I am comparing the value of `investmentCcy`
    const counterCcy =
      investmentCcy === selectedCcy1 ? selectedCcy2 : selectedCcy1;
    this.setState(state => {
      return {
        orderData: {
          ...state.orderData,
          investmentCcy,
          counterCcy
        }
      };
    });
  };

  onChangeInstrument = e => {
    const instrument = e.target.value;
    const [selectedCcy1, selectedCcy2] = instrument.split("/");
    this.setState({
      selectedCcy1,
      selectedCcy2,
      instrument
    });
  };

  // Generic state update on user input changes
  onChangeInput = (e, inputName) => {
    const { value } = e.target;
    this.setState(state => {
      return {
        orderData: {
          ...state.orderData,
          [inputName]: value
        }
      };
    });
  };

  onSubmitOrder = e => {
    e.preventDefault();
    const { orderData } = this.state;
    this.props.submitOrder(orderData);
  };

  confirmOrder = () => {
    this.setState({ isConfirmingOrder: true });
  };

  render() {
    const {
      selectedCcy1,
      selectedCcy2,
      formErrors,
      instrument,
      isConfirmingOrder,
      orderData: { date, buyOrSell, limit, investmentCcy }
    } = this.state;
    const {
      availableInstruments,
      isLoading,
      isCreated,
      hasErrorCreating
    } = this.props;

    return (
      <div className="new-order-wrapper">
        {isLoading && (
          <div className="white-overlay">
            <ClipLoader />
          </div>
        )}
        {isCreated && (
          <Alert bsStyle="success">Order has been placed succesfully.</Alert>
        )}
        {hasErrorCreating && (
          <Alert bsStyle="danger">
            You order was not processed. Something went wrong.
          </Alert>
        )}
        <PageHeader>New order</PageHeader>
        <form>
          <Row>
            <InstrumentField
              instruments={availableInstruments}
              onChangeInstrument={this.onChangeInstrument}
              value={instrument}
              formValidation={this.formValidation}
            />
            {instrument && (
              <InvestmentCcyField
                ccy1={selectedCcy1}
                ccy2={selectedCcy2}
                value={investmentCcy}
                onChangeInvestment={this.onChangeInvestment}
                formValidation={this.formValidation}
              />
            )}

            {instrument && (
              <BuyOrSellField
                value={buyOrSell}
                onChangeInput={this.onChangeInput}
                formValidation={this.formValidation}
              />
            )}
          </Row>
          <Row>
            <LimitField
              formValidation={this.formValidation}
              value={limit}
              onChangeInput={this.onChangeInput}
            />
            <DateField
              value={date}
              minDate={this.minDate}
              onChangeInput={this.onChangeInput}
              formValidation={this.formValidation}
            />
          </Row>
        </form>
        {isConfirmingOrder ? (
          <Confirm
            onClickHandler={this.onSubmitOrder}
            orderData={this.state.orderData}
          />
        ) : (
          <Button
            onClick={this.confirmOrder}
            className="btn-primary next-cta"
            disabled={Boolean(Object.keys(formErrors).length)}
          >
            Next
          </Button>
        )}
      </div>
    );
  }
}

export default CreateOrder;
