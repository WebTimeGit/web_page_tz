import React from "react";
import {NavLink} from "react-router-dom";

import modClass from "./FormReg.module.css";

const FormReg = () => {

   let regFullName = React.createRef();
   let regPosition = React.createRef();
   let regPhone = React.createRef();
   let regLogin = React.createRef();
   let regPassword = React.createRef();
   let regPasswordConf = React.createRef();

   let addNewUsers = [];

   let addNewUser = (e) => {
      e.preventDefault();

      let newUser = {
         fullName: regFullName.current.value,
         position: regPosition.current.value,
         phone: regPhone.current.value,
         login: regLogin.current.value,
         password: regPassword.current.value,
         passwordConf: regPasswordConf.current.value
      }
      if (newUser.fullName !== '' & newUser.login !== '' & newUser.password === newUser.passwordConf) {
         addNewUsers.push(newUser);
         localStorage.setItem('usersLocal', JSON.stringify(addNewUsers));
      }

   }


   return (
      <form action="#" className={modClass.registration} >
         <p>
            <input ref={regFullName} type="text" placeholder="ФИО" className={modClass.input}/>
         </p>
         <p>
            <input ref={regPosition} type="text" placeholder="Должность" className={modClass.input}/>
         </p>
         <p>
            <input ref={regPhone} type="tel" placeholder="Телефон" className={modClass.input}/>
         </p>
         <p>
            <input ref={regLogin} type="text" placeholder="Логин" className={modClass.input}/>
         </p>
         <p>
            <input ref={regPassword} type="password" placeholder="Пароль" className={modClass.input}/>
         </p>
         <p>
            <input ref={regPasswordConf} type="password" placeholder="Подтверждение пароля" className={modClass.input}/>
         </p>

         <div className={modClass.btnWr}>
            <button type="submit" onClick={addNewUser} className={modClass.pageBtn}>
               Зарегистрироваться
            </button>
            <NavLink exact to='/' className={modClass.pageBtn}>
               назад
            </NavLink>
         </div>
      </form>
   )
}

export default FormReg;