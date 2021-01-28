import React from "react";
import modClass from './Login.module.css';


const Login = () => {
   return (
      <form action="#" className={modClass.enter}>
         <h2 className={modClass.titleForm}>Вход</h2>
         <p>
            <input type="text" placeholder="Логин" className={modClass.input}/>
         </p>
         <p>
            <input type="password" placeholder="ввести пароль" className={modClass.input}/>
         </p>

         <button type="submit" className={modClass.pageBtn}>
            войти
         </button>

      </form>
   )
}

export default Login;