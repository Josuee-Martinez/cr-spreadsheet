import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
   return (
      <nav className="blue-grey">
         <div className="container nav-wrapper">
            <Link to="/" className="brand-logo">
               <i className="fas fa-fire-alt"></i>
            </Link>
            <ul id="nav-mobile" className="right">
               <li>
                  <Link to="/">AT Fame</Link>
               </li>
            </ul>
         </div>
      </nav>
   );
};

export default Navbar;
