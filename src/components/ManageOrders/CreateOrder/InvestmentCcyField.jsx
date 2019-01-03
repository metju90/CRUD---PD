import React, { memo } from "react";
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Col
} from "react-bootstrap";

export default memo(
  ({ value, ccy1, ccy2, onChangeInvestment, formValidation }) => (
    <Col xs={4}>
      <FormGroup
        validationState={formValidation(value, "investment")}
        controlId="formControlsSelect"
      >
        <ControlLabel>Investment currency</ControlLabel>
        <FormControl
          name="investmentCcy"
          onChange={onChangeInvestment}
          componentClass="select"
          value={value}
        >
          <option value={""}>Select...</option>
          <option value={ccy1}>{ccy1}</option>
          <option value={ccy2}>{ccy2}</option>
        </FormControl>
        <FormControl.Feedback />
        <HelpBlock>Cannot be empty.</HelpBlock>
      </FormGroup>
    </Col>
  )
);
