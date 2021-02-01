import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {enterLogin, updateInputValue} from './redux/state';

export let rerenderEntireDOM = (state) => {

ReactDOM.render(
  <React.StrictMode>
    <App state={state}
         updateInputValue={updateInputValue}
         enterLogin={enterLogin}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

}

