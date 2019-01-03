import React, { memo } from "react";
import { Button } from "react-bootstrap";
import { format as dateFormat } from "date-fns";
import uuid from "uuid";
import "./style.css";

const formatLabel = key =>
  (key.charAt(0).toUpperCase() + key.slice(1))
    .replace("Ccy", " Currency")
    .replace("Or", "/");

const formatValue = (value, key) => {
  if (key === "date") {
    return dateFormat(new Date(value), "DD/MM/YYYY");
  }
  return value;
};

const renderOrder = (key, orderData) => (
  <div key={uuid()} className="field">
    {formatLabel(key)}:<strong>{formatValue(orderData[key], key)}</strong>
  </div>
);

const Confirm = ({ orderData, onClickHandler }) => {
  return (
    <div className="confirm-dialog box-shadow">
      <div className="content">
        <h2>Confirm order</h2>
        {Object.keys(orderData).map(key => renderOrder(key, orderData))}
      </div>
      <Button onClick={onClickHandler} className="confirm-cta btn-success">
        Place order
      </Button>
    </div>
  );
};

export default memo(Confirm);
