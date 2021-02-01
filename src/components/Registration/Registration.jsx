import React from "react";
import FormReg from "./FormReg/FormReg";
import modClass from "./Registration.module.css";

const Registration = () => {

   return (
      <div>
         <h2 className={modClass.titleForm}>Новый пользователь</h2>
         <FormReg />
      </div>
   )
}

export default Registration;