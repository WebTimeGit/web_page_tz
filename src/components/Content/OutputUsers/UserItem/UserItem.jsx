import React from "react";
import modClass from "./UserItem.module.css"

const UserItem = (props) => {
   return (
      <tr className={modClass.wrapper}>
         <td>{props.fullName}</td>
         <td>Должность: {props.position}</td>
         <td>Телефон: {props.phone}</td>
         <td>Логин: {props.login}</td>
         <td>Пароль: {props.password}</td>
      </tr>
   )
}

export default UserItem;