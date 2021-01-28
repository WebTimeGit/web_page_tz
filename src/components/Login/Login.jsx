import React from "react";
import FormLogin from "./FormLogin/FormLogin";
import modClass from './Login.module.css';


const Login = () => {
   return (
      <div className={modClass.wrapper}>
         <h2 className={modClass.titleForm}>Вход</h2>
         <FormLogin />
      </div>

   )
}

export default Login;