import React, { Fragment, memo } from "react";
import uuid from "uuid";

import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Col
} from "react-bootstrap";

export default memo(
  ({ value, instruments, onChangeInstrument, formValidation }) => {
    const { data } = instruments;
    return (
      <Col xs={4}>
        <FormGroup
          validationState={formValidation(value, "instrument")}
          controlId="formControlsSelect"
        >
          <ControlLabel>Instrument</ControlLabel>
          <Fragment>
            <FormControl
              name="instrument"
              onChange={onChangeInstrument}
              componentClass="select"
              placeholder="select"
              value={value}
            >
              <option value={""}>Select...</option>
              {data.map(i => (
                <option key={uuid()} value={`${i.ccy1}/${i.ccy2}`}>
                  {i.ccy1}/{i.ccy2}
                </option>
              ))}
            </FormControl>
            <FormControl.Feedback />
            <HelpBlock>Cannot be empty.</HelpBlock>
          </Fragment>
        </FormGroup>
      </Col>
    );
  }
);
