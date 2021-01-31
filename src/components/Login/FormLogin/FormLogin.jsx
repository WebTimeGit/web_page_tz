import React from "react";
import {useHistory} from 'react-router-dom';
import modClass from "./FormLogin.module.css";


// noinspection JSUnresolvedVariable
const FormLogin = () => {

   const history = useHistory()

   let logLogin = React.createRef();
   let logPass = React.createRef();
   let logRememberMe = React.createRef();

   const vfvf = () => {
      console.log(logLogin.current.value)
   }

   const assa = () => {
      console.log(logPass.current.value)
   }

   const changeChecked = (e) => {
      const inputCheck = e.target;
      const logRememberMe = inputCheck.type === 'checkbox' ? inputCheck.checked : inputCheck.value;
      localStorage.setItem('logRememberMe', logRememberMe);

   };


   const handleFormSubmit = (e) => {
      e.preventDefault();
      let adminData = JSON.parse(localStorage.getItem("adminData"));
      let logLoginValue = logLogin.current.value;
      let logPassValue = logPass.current.value;

      for (let a = 0; a < adminData.length; a++) {
         let getLogin = adminData[a].login
         let getPass = adminData[a].password

         if ((logLoginValue === getLogin && logPassValue === getPass))  {
            history.push('/content/change-parameters')
         } else {
            history.push('/registration')
         }
      }

   };

   return (
      <form action="#" className={modClass.enter}>
         <p>
            <input ref={logLogin} type={"text"} onChange={vfvf} placeholder={"Логин"} className={modClass.input}/>
         </p>
         <p>
            <input ref={logPass} type={"password"} onChange={assa} placeholder={"ввести пароль"} className={modClass.input}/>
         </p>

         <label htmlFor={modClass.checkbox} className={modClass.labelCheckBox}>
            <input ref={logRememberMe} type={"checkbox"} onChange={changeChecked} id={modClass.checkbox}
                   className={modClass.checkBox}/>
            <span className={modClass.new_checkbox}/>
            Remember me
         </label>

         <button type={"submit"} onClick={handleFormSubmit} className={modClass.pageBtn}>
            войти
         </button>
      </form>
   )
}


export default FormLogin;