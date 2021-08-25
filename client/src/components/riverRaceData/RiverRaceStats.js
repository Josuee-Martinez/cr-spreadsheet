import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getRiverRaceData } from "../../actions/riverRaceData";
import { Link } from "react-router-dom";

const RiverRaceStats = ({ getRiverRaceData, riverRaceData, match }) => {
   useEffect(() => {
      getRiverRaceData();
   }, [getRiverRaceData]);
   return (
      <div className="container">
         <Link to="/" className="waves-effect blue-grey btn log-card">
            Back to log
         </Link>
         {riverRaceData.items.length === 0
            ? ""
            : riverRaceData.items[match.params.index].standings.map((clan, i) =>
                 clan.clan.name === "Fire and Ice" ? (
                    <table className="highlight fame-table" key={i}>
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

export default connect(mapStateToProps, { getRiverRaceData })(RiverRaceStats);
