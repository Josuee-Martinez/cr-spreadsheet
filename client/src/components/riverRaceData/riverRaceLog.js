import React, { useEffect, Fragment } from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getRiverRaceData } from "../../actions/riverRaceData";

const RiverRaceLog = ({ getRiverRaceData, riverRaceData }) => {
   useEffect(() => {
      getRiverRaceData();
   }, [getRiverRaceData]);
   return (
      <div>
         {riverRaceData.items.map((item, i) => (
            <div className="log-card">
               <div className="riverrace-banner mt-4 blue-grey center-aling">
                  <Moment fromNow>{item.createdDate}</Moment>
               </div>

               <div>
                  <ul class="collection">
                     {item.standings.map((std, j) => (
                        <li
                           className={
                              std.clan.name === "Fire and Ice"
                                 ? "collection-item green accent-2"
                                 : "collection-item"
                           }
                        >
                           <div>
                              {std.clan.name}
                              <div class="secondary-content blue-grey-text">
                                 <i class="fas fa-dharmachakra">
                                    {" "}
                                    {std.clan.fame}
                                 </i>
                              </div>
                           </div>
                        </li>
                     ))}
                  </ul>
                  <div className="riverrace-banner blue-grey">
                     <i class="fas fa-trophy">
                        {" "}
                        {
                           item.standings.filter(
                              (one) => one.clan.name === "Fire and Ice"
                           )[0].trophyChange
                        }
                     </i>{" "}
                     <i class="fas fa-users">
                        {" "}
                        {
                           item.standings.filter(
                              (one) => one.clan.name === "Fire and Ice"
                           )[0].clan.participants.length
                        }{" "}
                     </i>{" "}
                  </div>
               </div>
            </div>
         ))}
      </div>
   );
};

RiverRaceLog.propTypes = {
   getRiverRaceData: PropTypes.func.isRequired,
   riverRaceData: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
   riverRaceData: state.riverRaceData,
});

export default connect(mapStateToProps, { getRiverRaceData })(RiverRaceLog);
