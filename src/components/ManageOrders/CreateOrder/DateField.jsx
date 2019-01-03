import React, { memo } from "react";
import {
  FormGroup,
  ControlLabel,
  FormControl,
  Col,
  HelpBlock
} from "react-bootstrap";

export default memo(({ value, minDate, onChangeInput, formValidation }) => (
  <Col xs={4}>
    <FormGroup
      validationState={formValidation(value, "date")}
      controlId="formControlsSelect"
    >
      <ControlLabel>Valid until:</ControlLabel>
      <FormControl
        onChange={e => onChangeInput(e, "date")}
        type="date"
        min={minDate}
        value={value}
      />
      <FormControl.Feedback />
      <HelpBlock>Date in the past is not valid</HelpBlock>
    </FormGroup>
  </Col>
));
