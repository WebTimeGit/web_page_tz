import React from "react";
import modClass from "./Settings.module.css"


const Settings = (props) => {
   let inputIn = React.createRef();
   let inputOut = React.createRef();



   let inputFunction = () => {
      let inputInValue = inputIn.current.value;
      props.updateInputValue(inputInValue);
         inputOut.current.value = inputInValue;
      inputIn.current.value = '';
   }

   return (
      <div className={modClass.wrapper}>
         <label>
            <span>
               Поле ввода текста
               <span>state =  {props.settings[0].inputIn ? props.settings[0].inputIn : 'пусто'}</span>
               <span>localStorage = {localStorage.getItem('inputIn') ? localStorage.getItem('inputIn') : 'пусто'}</span>
            </span>
            <input ref={inputIn} placeholder={localStorage.getItem('inputIn') ? `предидущий ввод: ${localStorage.getItem('inputIn')}` : ''} type="text"/>
         </label>
         <label>
            <span>
               Поле ввывода текста
               <span>localStorage = {localStorage.getItem('inputIn') ? localStorage.getItem('inputIn') : 'пусто'}</span>
            </span>
            <input ref={inputOut} type="text"/>
         </label>
         <button type={"button"} onClick={inputFunction}>Ввести</button>
      </div>
   )
}


export default Settings;