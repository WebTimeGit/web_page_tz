import React from "react";
import modClass from "./FormLogin.module.css";

class FormLogin extends React.Component {

   login = {
      logLogin: '',
      logPass: '',
      logRememberMe: false
   };

   changeLog = (event) => {
      console.log('вызов лог ')
      const logLogin = event.target.value;
      console.log(logLogin)
      this.setState({[logLogin.logLogin]: event.value});
      localStorage.setItem('logLogin', logLogin);
      return logLogin
   };

   changePass = (event) => {
      console.log('вызов пасс ')
      const logPass = event.target.value;
      console.log(logPass)
      this.setState({[logPass.logLogin]: event.value});
      localStorage.setItem('logPass', logPass);
      return logPass
   };

   changeChecked = (event) => {
      console.log('вызов чек бокс ')
      const inputCheck = event.target;
      const logRememberMe = inputCheck.type === 'checkbox' ? inputCheck.checked : inputCheck.value;
      console.log(logRememberMe)
      this.setState({[inputCheck.logLogin]: event.value});
      localStorage.setItem('logRememberMe', logRememberMe);
      return logRememberMe
   };



   handleFormSubmit = () => {
   };

   render() {
      return (
         <form action="#" className={modClass.enter} onSubmit={this.handleFormSubmit}>
            <p>
               <input name={"logLogin"} type={"text"} value={this.props.logLogin} onChange={this.changeLog}
                      placeholder={"Логин"} className={modClass.input}/>
            </p>
            <p>
               <input name={"logPass"} type={"password"} value={this.props.logPass} onChange={this.changePass}
                      placeholder={"ввести пароль"} className={modClass.input}/>
            </p>

            <label htmlFor={modClass.remove_input__checkbox} className={modClass.labelCheckBox}>
               <input name={"logRememberMe"} type={"checkbox"} checked={this.props.logRememberMe}
                      onChange={this.changeChecked} id={modClass.remove_input__checkbox} className={modClass.checkBox}/>
               <span className={modClass.new_checkbox}/>
               Remember me
            </label>

            <button type={"submit"} onChange={this.handleFormSubmit} className={modClass.pageBtn}>
               войти
            </button>
         </form>
      )
   }
}


export default FormLogin;