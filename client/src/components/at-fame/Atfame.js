import React, { useEffect } from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getRiverRaceLog } from "../../actions/riverRaceLog";
const Atfame = ({ riverRaceData, getRiverRaceLog }) => {
   useEffect(() => {
      getRiverRaceLog();
   }, [getRiverRaceLog]);
   return (
      <div className="container">
         {riverRaceData.items[0] === undefined
            ? ""
            : console.log(
                 riverRaceData.items[0].createdDate,
                 riverRaceData.items[0].standings
                    .filter((clan) => clan.clan.name === "Fire and Ice")[0]
                    .clan.participants.map((participant) =>
                       console.log(
                          participant.tag,
                          participant.name,
                          participant.fame
                       )
                    )
              )}
      </div>
   );
};

const mapStateToProps = (state) => ({
   riverRaceData: state.riverRaceData,
});

export default connect(mapStateToProps, { getRiverRaceLog })(Atfame);
