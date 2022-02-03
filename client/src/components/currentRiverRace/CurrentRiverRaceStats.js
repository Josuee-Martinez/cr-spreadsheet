import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCurrentRiverRaceData } from "../../actions/riverRaceLog";
import { Link } from "react-router-dom";

const CurrentRiverRaceStats = ({
   getCurrentRiverRaceData,
   currentRiverRaceData,
}) => {
   useEffect(() => {
      getCurrentRiverRaceData();
   }, [getCurrentRiverRaceData]);
   return (
      <div className="container">
         <Link to="/" className="waves-effect blue-grey darken-4 btn">
            <i className="fas fa-arrow-left"></i>
         </Link>
         {console.log(currentRiverRaceData)}
         {currentRiverRaceData.clan === null ? (
            ""
         ) : (
            <table className="highlight fame-table bg-bluegrey">
               <thead>
                  <tr>
                     <th scope="col">#</th>
                     <th scope="col">Player</th>
                     <th scope="col">Fame</th>
                  </tr>
               </thead>
               <tbody>
                  {currentRiverRaceData.clan.clan.participants
                     .sort((a, b) => b.fame - a.fame)
                     .map((participant, i) => (
                        <tr key={i}>
                           <td>{i + 1}</td>
                           <td>{participant.name}</td>
                           <td>{participant.fame}</td>
                        </tr>
                     ))}
               </tbody>
            </table>
         )}
      </div>
   );
};

const mapStateToProps = (state) => ({
   currentRiverRaceData: state.currentRiverRaceData,
});

export default connect(mapStateToProps, { getCurrentRiverRaceData })(
   CurrentRiverRaceStats
);
