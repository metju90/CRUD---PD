import React, { memo } from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => (
  <Navbar fixedTop>
    <Link to="/" className="btn-primary">
      overview
    </Link>
    <Link to="/orders" className="btn-primary">
      orders list
    </Link>
    <Link to="/new-order" className="btn-success">
      create new order
    </Link>
  </Navbar>
);

export default memo(NavBar);
