import React from "react";
import modClass from "./UserItem.module.css"


const UserItem = (props) => {
   return (
      <tbody className={modClass.wrapper}>
         <tr>
            <td>{props.fullName}</td>
            <td>Должность: {props.position}</td>
            <td>Телефон: {props.phone}</td>
            <td>Логин: {props.login}</td>
            <td>Пароль: {props.password}</td>
         </tr>
      </tbody>
   )
}


export default UserItem;