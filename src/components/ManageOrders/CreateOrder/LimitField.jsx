import React from "react";

import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Col
} from "react-bootstrap";

export default ({ value, onChangeInput, formValidation }) => (
  <Col xs={4}>
    <FormGroup
      name="limit"
      controlId="formBasicText"
      validationState={formValidation(value, "limit")}
    >
      <ControlLabel>Limit</ControlLabel>
      <FormControl
        type="number"
        value={value}
        placeholder="Enter text"
        onChange={e => onChangeInput(e, "limit")}
      />
      <FormControl.Feedback />
      <HelpBlock>Cannot be empty.</HelpBlock>
    </FormGroup>
  </Col>
);
