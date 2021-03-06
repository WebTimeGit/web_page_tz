import React from "react";
import modClass from "./Settings.module.css"


const Settings = (props) => {

   let inputIn = React.createRef();
   let inputOut = React.createRef();

   let inputFunction = () => {
      // current value inputIn
      let inputInValue = inputIn.current.value;

      //transfer function of state.js
      props.updateInputValue(inputInValue);

      // inputIn transfer in inputOut
      inputOut.current.value = inputInValue;

      //inputIn = zero out;
      inputIn.current.value = '';
   }

   return (
      <div className={modClass.wrapper}>
         <label>
            <span>
               Поле ввода текста
               <span>state = {props.settings[0].inputIn ? props.settings[0].inputIn : 'пусто'}</span>
               <span>localStorage = {localStorage.getItem('inputIn') ? localStorage.getItem('inputIn') : 'пусто'}</span>
            </span>
            <input ref={inputIn}
                   placeholder={localStorage.getItem('inputIn') ? `Предидущий ввод: ${localStorage.getItem('inputIn')}` : ''}
                   type="text"/>
         </label>
         <label>
            <span>
               Поле ввывода текста
            </span>
            <input ref={inputOut} type="text"/>
         </label>
         <button type={"button"} onClick={inputFunction} className={modClass.settingBtn}>Ввести</button>
      </div>
   )
}

export default Settings;