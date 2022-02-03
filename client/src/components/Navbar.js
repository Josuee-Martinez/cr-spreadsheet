import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
   return (
      <nav className="blue-grey darken-4">
         <div className="container nav-wrapper">
            <Link to="/" className="left">
               <i className="fas fa-fire-alt"></i>
            </Link>
            <ul id="nav-mobile" className="right ">
               <li>
                  <Link to="/currentrace">War</Link>
               </li>
               <li>
                  <Link to="/riverracelog">WarLog</Link>
               </li>
               {/* <li>
                  <Link to="/atfame-spreadsheet">ATF</Link>
               </li> */}
            </ul>
         </div>
      </nav>
   );
};

export default Navbar;
