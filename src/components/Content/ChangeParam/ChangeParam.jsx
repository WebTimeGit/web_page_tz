import React from "react";
import modClass from "./ChangeParam.module.css"
import ChangeParamForm from "./ChangeParamForm/ChangeParamForm";

const ChangeParam = () => {
   return (
      <div className={modClass.wrapper}>
         <h2 className={modClass.titleForm}>Изменить параметры пользователя</h2>
         <ChangeParamForm/>
      </div>
   )
}

export default ChangeParam;
