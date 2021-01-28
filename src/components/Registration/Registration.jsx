import React from "react";
import {NavLink} from "react-router-dom";

import modClass from "./Registration.module.css";

const Registration = () => {
   return (
      <form action="#" className={modClass.registration}>
         <h2 className={modClass.titleForm}>Новый пользователь</h2>
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
               Регистрация
            </button>
            <NavLink exact to='/' className={modClass.pageBtn}>
                  назад
            </NavLink>
         </div>
      </form>
   )
}

export default Registration;