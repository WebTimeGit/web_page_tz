import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import Content from "./components/Content/Content";

import './App.css';


function App() {
   return (
      <BrowserRouter>
         <div className="main_wrapper">
            <header className={"App-header"}>
               react web page
               <Navigation />
            </header>
            <main className={"App-main"}>
               <Route exact path='/' component={Login} />
               <Route path='/registration' component={Registration} />
               <Route path='/content' component={Content} />
            </main>
            <footer className={"App-footer"}>
               © 2021 developed <a href="https://www.youtube.com/channel/UCQjaaguXDBR3ZmJbIE3P0TQ" target="_blank" >Web Time</a>
            </footer>
         </div>
      </BrowserRouter>
   );
}

export default App;
