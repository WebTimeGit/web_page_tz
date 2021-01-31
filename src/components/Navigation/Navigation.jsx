import React from "react";
import {NavLink} from "react-router-dom";
import modClass from "./Navigation.module.css"


const Navigation = () => {
   return (
      <nav className={modClass.nav}>
         <i>
            Developer panel <br/>
            login: Petrov <br/>
            password: 88888888 <br/>
         </i>
         <NavLink exact to='/' className={modClass.navLink}>
            Login
         </NavLink>

         <NavLink to='/registration' className={modClass.navLink}>
            Registration
         </NavLink>

         <NavLink to='/content/change-parameters' className={modClass.navLink}>
            Content
         </NavLink>

         <NavLink exact to='/' className={modClass.navLink}>
            Back
         </NavLink>
      </nav>
   )
}

export default Navigation;