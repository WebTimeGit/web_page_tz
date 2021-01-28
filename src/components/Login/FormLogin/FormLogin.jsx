import React from "react";
import modClass from "./FormLogin.module.css";


const FormLogin = ()=> {
   return(
      <form action="#" className={modClass.enter}>
         <p>
            <input type={"text"} placeholder={"Логин"} className={modClass.input}/>
         </p>
         <p>
            <input type={"password"} placeholder={"ввести пароль"} className={modClass.input}/>
         </p>
         
         <label htmlFor={modClass.remove_input__checkbox} className={modClass.labelCheckBox}>
            <input type={"checkbox"} id={modClass.remove_input__checkbox} className={modClass.checkBox} />
            <span className={modClass.new_checkbox} />
            Remember me
         </label>

         <button type="submit" className={modClass.pageBtn}>
            войти
         </button>

      </form>
   )
}


export default FormLogin;