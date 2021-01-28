import React from "react";
import {NavLink} from "react-router-dom";
import modClass from "./NavContent.module.css";


const NavContent = () => {
   return (
      <nav className={modClass.nav}>
         <NavLink exact to='/content/change-parameters' className={modClass.navLink}>
            Change parameters
         </NavLink>

         <NavLink to='/content/output-all-users' className={modClass.navLink}>
            Output of all users
         </NavLink>

         <NavLink to='/content/settings' className={modClass.navLink}>
            Settings
         </NavLink>
      </nav>
   )
}


export default NavContent;