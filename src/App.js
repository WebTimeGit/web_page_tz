import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import Content from "./components/Content/Content";

import './App.css';

function App(props) {

   return (
      <BrowserRouter>
         <div className="main_wrapper">
            <header className={"App-header"}>
               react web page
               <Navigation />
            </header>
            <main className={"App-main"}>
               <Route exact path='/' render={() => <Login enterLogin={props.enterLogin} />} />
               <Route path='/registration' render={() => <Registration />} />
               <Route path='/content' render={()=> <Content
                  contentPage={props.state.contentPage}
                  updateInputValue={props.updateInputValue}
               />} />
            </main>
            <footer className={"App-footer"}>
               © 2021 developed <a href="https://www.youtube.com/channel/UCQjaaguXDBR3ZmJbIE3P0TQ" target="_blank" >Web Time</a>
            </footer>
         </div>
      </BrowserRouter>
   );
}

export default App;
