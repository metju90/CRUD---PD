import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Row, Col, Grid } from "react-bootstrap";
import { getStore, init as storeInit, registerReducer } from "./redux/store";
import registerServiceWorker from "./registerServiceWorker";
import Market from "./components/connected/Market";
import { OrderList, CreateOrder } from "./components/connected/ManageOrders";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./index.css";
import "./bootstrap-overrides.css";

const getInitiatedStore = () => {
  storeInit();
  registerReducer();
  return getStore();
};

const store = getInitiatedStore();

const getApp = () => (
  <Provider store={store}>
    <Grid>
      <Router>
        <Row>
          <Col xs={8} className="text-center" xsOffset={2}>
            <NavBar />
            <Route path="/" exact component={Market} />
            <Route path="/orders" component={OrderList} />
            <Route path="/new-order" component={CreateOrder} />
          </Col>
        </Row>
      </Router>
    </Grid>
  </Provider>
);

ReactDOM.render(getApp(), document.getElementById("root"));
registerServiceWorker();
