import React, { PureComponent, Fragment } from "react";
import { ClipLoader } from "react-spinners";
import debounce from "lodash/debounce";
import { PageHeader, Alert } from "react-bootstrap";
import uuid from "uuid";

import Table from "../Table";
import Pair from "../Market/Pair";

class Market extends PureComponent {
  constructor() {
    super();
    this.columns = ["Instrument", "Bid", "Ask"];
  }
  componentDidMount() {
    this.props.setLoadingInstrumentsOn();
    this.fetchInstrumentsRate = debounce(this.fetchInstrumentsRate, 500);
    this.fetchInstrumentsRate();
  }

  componentWillUnmount() {
    this.fetchInstrumentsRate.cancel();
    this.props.setLoadingInstrumentsOff();
  }

  fetchInstrumentsRate() {
    this.props.fetchInstrumentsRate();
  }
  render() {
    const {
      instrumentsRate: { isLoading, hasError, data }
    } = this.props;
    return (
      <Fragment>
        <PageHeader>Market Overview</PageHeader>
        {hasError && <Alert bsStyle="danger">Something went wrong.</Alert>}
        {!hasError && (
          <Table columns={this.columns}>
            {isLoading && <ClipLoader />}
            {!isLoading && data.map(d => <Pair key={uuid()} {...d} />)}
          </Table>
        )}
      </Fragment>
    );
  }
}

export default Market;
