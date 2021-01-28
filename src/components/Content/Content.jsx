import React from "react";
import NavContent from "./NavContent/NavContent";
import ChangeParam from "./ChangeParam/ChangeParam";
import OutputUsers from "./OutputUsers/OutputUsers";
import Settings from "./Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import modClass from "./Content.module.css";


const Content = () => {
   return (
      <BrowserRouter>
         <div className={modClass.wrapper}>
            <NavContent/>

            <Route path='/content/change-parameters' component={ChangeParam}/>
            <Route path='/content/output-all-users' component={OutputUsers}/>
            <Route path='/content/settings' component={Settings}/>
         </div>
      </BrowserRouter>
   )
}

export default Content;