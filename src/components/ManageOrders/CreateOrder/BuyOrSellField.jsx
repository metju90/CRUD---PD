import React, { memo } from "react";
import {
  FormGroup,
  ControlLabel,
  FormControl,
  Col,
  HelpBlock
} from "react-bootstrap";

export default memo(({ value, onChangeInput, formValidation }) => (
  <Col xs={3}>
    <FormGroup
      validationState={formValidation(value, "buyOrSell")}
      controlId="formControlsSelect"
    >
      <ControlLabel>Buy/Sell</ControlLabel>
      <FormControl
        name="buyOrSell"
        onChange={e => onChangeInput(e, "buyOrSell")}
        componentClass="select"
        placeholder="select"
        value={value}
      >
        <option value={""}>Select...</option>
        <option value="Buy">Buy</option>
        <option value="Sell">Sell</option>
      </FormControl>
      <FormControl.Feedback />
      <HelpBlock>Cannot be empty.</HelpBlock>
    </FormGroup>
  </Col>
));
