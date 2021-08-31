import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { getCurrentRiverRaceData } from "../../actions/riverRaceLog";

const CurrentRiverRace = ({
   getCurrentRiverRaceData,
   currentRiverRaceData,
}) => {
   useEffect(() => {
      getCurrentRiverRaceData();
   }, [getCurrentRiverRaceData]);
   return (
      <div className="container">
         <div className="log-card">
            <div className="riverrace-banner mt-4 blue-grey center-aling">
               {currentRiverRaceData.clan === null
                  ? ""
                  : currentRiverRaceData.clan.periodType}
               <span className="right">
                  Week{" "}
                  {currentRiverRaceData.clan === null
                     ? ""
                     : currentRiverRaceData.clan.sectionIndex + 1}
               </span>
            </div>
            {currentRiverRaceData.clan === null
               ? ""
               : currentRiverRaceData.clan.clans
                    .sort((a, b) => b.periodPoints - a.periodPoints)
                    .map((item, i) => (
                       <div key={i}>
                          <ul className="collection blue-grey-text">
                             <li
                                className={
                                   item.name === "Fire and Ice"
                                      ? "collection-item green accent-2"
                                      : "collection-item"
                                }
                             >
                                {item.name === "Fire and Ice" ? (
                                   <Link to={`/currentriverrace`}>
                                      <div>
                                         {item.name}
                                         <div className="secondary-content blue-grey-text">
                                            <i className="fas fa-dharmachakra">
                                               {" "}
                                               {item.periodPoints}
                                            </i>
                                         </div>
                                      </div>
                                   </Link>
                                ) : (
                                   <div>
                                      {item.name}
                                      <div className="secondary-content blue-grey-text">
                                         <i className="fas fa-dharmachakra">
                                            {" "}
                                            {item.periodPoints}
                                         </i>
                                      </div>
                                   </div>
                                )}
                             </li>
                          </ul>
                       </div>
                    ))}
         </div>
      </div>
   );
};
const mapStateToProps = (state) => ({
   currentRiverRaceData: state.currentRiverRaceData,
});

export default connect(mapStateToProps, { getCurrentRiverRaceData })(
   CurrentRiverRace
);
