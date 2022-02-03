import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { getCurrentRiverRaceData } from "../../actions/riverRaceLog";
// import M from "materialize-css";

const CurrentRace = ({ getCurrentRiverRaceData, currentRiverRaceData }) => {
   const [periodLog, setPeriodLog] = useState("");
   //    const [showColor, setShowColor] = useState("");

   useEffect(() => {
      getCurrentRiverRaceData();
      console.log(currentRiverRaceData);
      //   M.AutoInit();
   }, [getCurrentRiverRaceData]);

   const showClan = (log) => {
      console.log(log);

      setPeriodLog(log);
   };

   // const handleChange = (e) => {
   //    setPeriodLog(e.target.value);
   //    console.log(e.target.value);
   // };

   return (
      <div className="container">
         {/* {currentRiverRaceData.clan === null ? (
            " "
         ) : (
            <div className="center-align">
               {currentRiverRaceData.clan.periodLogs.map((log, i) => (
                  <a
                     class="blue-grey darken-4 btn"
                     onClick={() => showClan(log)}
                  >
                     Day {log.periodIndex - 2}
                  </a>
               ))}{" "}
            </div>
         )} */}
         <div class="dropdown">
            <button
               class="btn btn-secondary dropdown-toggle btn-block"
               type="button"
               id="dropdownMenuButton"
               data-toggle="dropdown"
               aria-haspopup="true"
               aria-expanded="false"
            >
               Monthly war stats
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
               {currentRiverRaceData.clan === null
                  ? ""
                  : currentRiverRaceData.clan.periodLogs.map((log, i) => (
                       <a
                          class="dropdown-item"
                          href="#"
                          onClick={() => showClan(log)}
                       >
                          {i < 4
                             ? "Week 1"
                             : i >= 4 && i < 8
                             ? "Week 2"
                             : "week3"}{" "}
                          Day{" "}
                          {i < 4 ? i + 1 : i >= 4 && i < 8 ? i + 1 - 4 : "l"}
                       </a>
                    ))}
            </div>
         </div>
         <ul className="list-group">
            {periodLog === ""
               ? ""
               : periodLog.items.map((item) => (
                    <li className="list-group-item d-flex">
                       {item.clan.tag}{" "}
                       <span class="ml-auto">{item.pointsEarned}</span>
                    </li>
                 ))}
         </ul>
      </div>
   );
};
const mapStateToProps = (state) => ({
   currentRiverRaceData: state.currentRiverRaceData,
});

export default connect(mapStateToProps, { getCurrentRiverRaceData })(
   CurrentRace
);
