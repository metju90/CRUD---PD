import React, { memo } from "react";
import { marketPriceType } from "../../../types";

const Pair = ({ bid, ask, ccyPair }) => {
  const { ccy1, ccy2 } = ccyPair;
  return (
    <div className="symbol-row">
      <span>
        {ccy1}/{ccy2}
      </span>
      <span>{bid}</span>
      <span>{ask}</span>
    </div>
  );
};

Pair.propTypes = {
  marketPriceType
};

export default memo(Pair);
