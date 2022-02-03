import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentRiverRaceData } from "../../actions/riverRaceLog";
import { getSpreadsheetData } from "../../actions/spreadsheet";

import { BsStack, BsAwardFill, BsPersonFill } from "react-icons/bs";

const CurrentRiverRace = ({
   getCurrentRiverRaceData,
   getSpreadsheetData,
   currentRiverRaceData,
   spreadsheetData,
}) => {
   const [saveClanTag, setSaveClanTag] = useState("");
   const [saveParticipants, setSaveParticipants] = useState("");

   useEffect(() => {
      getCurrentRiverRaceData();
      getSpreadsheetData();
   }, [getCurrentRiverRaceData]);

   const setTag = (tag) => {
      updateData();
      setSaveClanTag(tag);
      console.log(currentRiverRaceData);

      //Remember to chek this log on war days !!!
      console.log(spreadsheetData);
   };

   const updateData = () => {
      currentRiverRaceData.clan.clans.map((cl) =>
         cl.participants.map((pt) => {
            return spreadsheetData.data.map(function (score) {
               if (pt.tag === score.tag) {
                  // mutating the original data
                  pt.decksUsedToday = pt.decksUsedToday + score.battles;
                  return pt.decksUsedToday;
               }
               return "";
            });
         })
      );
      setSaveParticipants(currentRiverRaceData);
   };

   return (
      <div className="container">
         <div className="mt">
            <div className="riverrace-banner  blue-grey darken-4">
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
            <div className="">
               <ul className="collection">
                  {currentRiverRaceData.clan === null
                     ? ""
                     : currentRiverRaceData.clan.clans
                          .sort((a, b) => b.periodPoints - a.periodPoints)
                          .map((item, i) => (
                             <li
                                key={i}
                                className={
                                   saveClanTag === item.tag
                                      ? "collection-item active"
                                      : "collection-item"
                                }
                                onClick={() => setTag(item.tag)}
                             >
                                {item.name}
                                <div className="secondary-content bg-bluegrey">
                                   <BsAwardFill />

                                   {item.periodPoints}
                                </div>
                             </li>
                          ))}
               </ul>
            </div>
         </div>

         {saveClanTag === ""
            ? ""
            : saveParticipants.clan.clans
                 .filter((clan) => clan.tag === saveClanTag)
                 .map((item, i) => (
                    <table className="highlight fame-table bg-bluegrey" key={i}>
                       <thead>
                          <tr>
                             <th scope="col">#</th>
                             <th scope="col">
                                <BsPersonFill /> Player
                             </th>
                             <th scope="col">
                                <BsAwardFill /> Medals
                             </th>
                             <th scope="col">
                                <BsStack /> Decks
                             </th>
                          </tr>
                       </thead>
                       <tbody>
                          {item.participants
                             .sort((a, b) => b.fame - a.fame)
                             .map((participant, j) => (
                                <tr key={j}>
                                   <td>{j + 1}</td>
                                   <td>{participant.name}</td>
                                   <td>{participant.fame}</td>
                                   <td>{participant.decksUsedToday} / 16</td>
                                </tr>
                             ))}
                       </tbody>
                    </table>
                 ))}
      </div>
   );
};
const mapStateToProps = (state) => ({
   currentRiverRaceData: state.currentRiverRaceData,
   spreadsheetData: state.spreadsheetData,
});

export default connect(mapStateToProps, {
   getCurrentRiverRaceData,
   getSpreadsheetData,
})(CurrentRiverRace);
