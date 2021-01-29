import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {updateInputValue} from './redux/state';

export let rerenderEntireDOM = (state) => {

ReactDOM.render(
  <React.StrictMode>
    <App state={state} updateInputValue={updateInputValue} />
  </React.StrictMode>,
  document.getElementById('root')
);

}

