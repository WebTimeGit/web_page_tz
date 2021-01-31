import React from "react";
import NavContent from "./NavContent/NavContent";
import ChangeParam from "./ChangeParam/ChangeParam";
import OutputUsers from "./OutputUsers/OutputUsers";
import Settings from "./Settings/Settings";
import {Route} from "react-router-dom";
import modClass from "./Content.module.css";


const Content = (props) => {

   return (
      <div className={modClass.wrapper}>
         <NavContent/>
         <Route path='/content/change-parameters' render={() => <ChangeParam/>}/>
         <Route path='/content/output-all-users' render={() => <OutputUsers allUsers={props.contentPage.allUsers}/>}/>
         <Route path='/content/settings' render={() => <Settings settings={props.contentPage.settings}
                                                                 updateInputValue={props.updateInputValue}/>}/>
      </div>
   )
}

export default Content;