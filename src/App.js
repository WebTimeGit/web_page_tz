import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import Content from "./components/Content/Content";

import './App.css';


function App() {
   return (
      <BrowserRouter>
         <div className="App">
            <header className="App-header">
               react web page
            </header>
           <Route exact path='/' component={Login} />
           <Route path='/registration' component={Registration} />
            <Content/>

         </div>
      </BrowserRouter>
   );
}

export default App;
