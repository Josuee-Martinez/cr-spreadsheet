import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
   return (
      <nav className="blue-grey">
         <div className="container nav-wrapper">
            <Link to="/" className="brand-logo left">
               F I
            </Link>
            <ul id="nav-mobile" className="right">
               <li>
                  <Link to="/riverracelog">War Log</Link>
               </li>
               <li>
                  <Link to="/atfame-spreadsheet">ATF Table</Link>
               </li>
            </ul>
         </div>
      </nav>
   );
};

export default Navbar;
