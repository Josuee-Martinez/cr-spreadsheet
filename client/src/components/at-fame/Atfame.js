import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getRiverRaceLog } from "../../actions/riverRaceLog";
const Atfame = ({ riverRaceData, getRiverRaceLog }) => {
   useEffect(() => {
      getRiverRaceLog();
   }, [getRiverRaceLog]);
   return <div></div>;
};

const mapStateToProps = (state) => ({
   riverRaceData: state.riverRaceData,
});

export default connect(mapStateToProps, { getRiverRaceLog })(Atfame);
