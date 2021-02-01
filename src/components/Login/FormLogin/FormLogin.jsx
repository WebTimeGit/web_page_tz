import React from "react";
import modClass from "./FormLogin.module.css";
import {useHistory} from "react-router";


// noinspection JSUnresolvedVariable
const FormLogin = (props) => {

   let history = useHistory();

   let logLogin = React.createRef();
   let logPass = React.createRef();
   let logRememberMe = React.createRef();

   const changeChecked = (e) => {
      const inputCheck = e.target;
      const logRememberMe = inputCheck.type === 'checkbox' ? inputCheck.checked : inputCheck.value;
      localStorage.setItem('logRememberMe', logRememberMe);
      console.log(logRememberMe)
   };

   const handleFormSubmit = () => {

      let logEnter = {
         login: logLogin.current.value,
         password: logPass.current.value
      };

      props.enterLogin(logEnter, history)
   };

   return (
      <form action="#" className={modClass.enter}>
         <p>
            <input ref={logLogin} type={"text"} placeholder={"Логин"} className={modClass.input}/>
         </p>
         <p>
            <input ref={logPass} type={"password"} placeholder={"ввести пароль"} className={modClass.input}/>
         </p>

         <label htmlFor={modClass.checkbox} className={modClass.labelCheckBox}>
            <input ref={logRememberMe} type={"checkbox"} onChange={changeChecked} id={modClass.checkbox}
                   className={modClass.not}/>
            <span className={modClass.new_checkbox}/>
            Remember me <span className={modClass.not}> не реализовал</span>
         </label>

         <button type={"submit"} onClick={handleFormSubmit} className={modClass.pageBtn}>
            войти
         </button>
      </form>
   )
}


export default FormLogin;