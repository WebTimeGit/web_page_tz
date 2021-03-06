import React from "react";
import {NavLink} from "react-router-dom";

import modClass from "./ChangeParamForm.module.css";

const ChangeParamForm = () => {
   return (
      <form action="#" className={modClass.changeParamForm}>
         <p>
            <input type="text" placeholder="ФИО" className={modClass.input}/>
         </p>
         <p>
            <input type="text" placeholder="Должность" className={modClass.input}/>
         </p>
         <p>
            <input type="tel" placeholder="Телефон" className={modClass.input}/>
         </p>
         <p>
            <input type="text" placeholder="Логин" className={modClass.input}/>
         </p>
         <p>
            <input type="password" placeholder="Пароль" className={modClass.input}/>
         </p>
         <p>
            <input type="password" placeholder="Подтверждение пароля" className={modClass.input}/>
         </p>

         <div className={modClass.btnWr}>
            <button type="submit" className={modClass.pageBtn}>
               Сохранить
            </button>
            <NavLink exact to='/' className={modClass.pageBtn}>
               назад
            </NavLink>
         </div>
      </form>
   )
}

export default ChangeParamForm;