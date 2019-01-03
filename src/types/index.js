import { string, number, shape } from "prop-types";

export const marketPriceType = shape({
  ccyPair: shape({
    ccy1: string.isRequired,
    ccy2: string.isRequired
  }),
  bid: number.isRequired,
  ask: number.isRequired
});
