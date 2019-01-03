import { connect } from "react-redux";

import Market from "../../Market";
import {
  fetchInstrumentsRate,
  setLoadingInstrumentsOn,
  setLoadingInstrumentsOff
} from "../../../actions";

const mapStateToProps = state => {
  const { instrumentsRate } = state;
  return { instrumentsRate };
};
const mapDispatchToProps = {
  fetchInstrumentsRate,
  setLoadingInstrumentsOn,
  setLoadingInstrumentsOff
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Market);
