import React, { useEffect } from "react";
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
            <div className="log-card" key={i}>
               <div className="riverrace-banner mt-4 blue-grey center-aling">
                  <Moment fromNow>{item.createdDate}</Moment>
                  <span className="right">Week {item.sectionIndex + 1}</span>
               </div>

               <div>
                  <ul className="collection">
                     {item.standings.map((std, j) => (
                        <li
                           key={j}
                           className={
                              std.clan.name === "Fire and Ice"
                                 ? "collection-item green accent-2"
                                 : "collection-item"
                           }
                        >
                           {std.clan.name === "Fire and Ice" ? (
                              <Link to={`/riverrace/clan/${i}`}>
                                 <div>
                                    {std.clan.name}
                                    <div className="secondary-content blue-grey-text">
                                       <i className="fas fa-dharmachakra">
                                          {" "}
                                          {std.clan.fame}
                                       </i>
                                    </div>
                                 </div>
                              </Link>
                           ) : (
                              <div>
                                 {std.clan.name}
                                 <div className="secondary-content blue-grey-text">
                                    <i className="fas fa-dharmachakra">
                                       {" "}
                                       {std.clan.fame}
                                    </i>
                                 </div>
                              </div>
                           )}
                        </li>
                     ))}
                  </ul>
                  <div className="riverrace-banner blue-grey">
                     <i className="fas fa-trophy">
                        {" "}
                        {
                           item.standings.filter(
                              (one) => one.clan.name === "Fire and Ice"
                           )[0].trophyChange
                        }
                     </i>{" "}
                     <i className="fas fa-users">
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
