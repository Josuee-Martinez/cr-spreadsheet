import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getRiverRaceLog } from "../../actions/riverRaceLog";
import { Link } from "react-router-dom";

const RiverRaceStats = ({ getRiverRaceLog, riverRaceData, match }) => {
   useEffect(() => {
      getRiverRaceLog();
   }, [getRiverRaceLog]);
   return (
      <div className="container">
         <Link
            to="/riverracelog"
            className="waves-effect blue-grey btn log-card"
         >
            Back to log
         </Link>
         {riverRaceData.items.length === 0
            ? ""
            : riverRaceData.items[match.params.index].standings.map((clan, i) =>
                 clan.clan.name === "Fire and Ice" ? (
                    <table
                       className="highlight fame-table blue-grey-text"
                       key={i}
                    >
                       <thead>
                          <tr>
                             <th scope="col">#</th>
                             <th scope="col">Player</th>
                             <th scope="col">Fame</th>
                             <th scope="col">Repair Points</th>
                             <th scope="col">Boat Attacks</th>
                          </tr>
                       </thead>
                       <tbody>
                          {clan.clan.participants
                             .sort((a, b) => b.fame - a.fame)
                             .map((participant, i) => (
                                <tr key={i}>
                                   <td>{i + 1}</td>
                                   <td>{participant.name}</td>
                                   <td>{participant.fame}</td>
                                   <td>{participant.repairPoints}</td>
                                   <td>{participant.boatAttacks}</td>
                                </tr>
                             ))}
                       </tbody>
                    </table>
                 ) : (
                    ""
                 )
              )}
      </div>
   );
};

const mapStateToProps = (state) => ({
   riverRaceData: state.riverRaceData,
});

export default connect(mapStateToProps, { getRiverRaceLog })(RiverRaceStats);
