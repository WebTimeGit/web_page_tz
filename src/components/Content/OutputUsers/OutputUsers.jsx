import React from "react";
import UserItem from "./UserItem/UserItem";
import modClass from "./OutputUsers.module.css"

const OutputUsers = (props) => {

   let users = props.allUsers.map( user => {
      return (
         <UserItem fullName={user.fullName} position={user.position} phone={user.phone} login={user.login} password={user.password} />
      )
   })

   return (
      <table className={modClass.wrapper}>
         <thead>
            <tr className={modClass.tableTitle}>
               <td>ФИО</td>
               <td>Должность</td>
               <td>Телефон</td>
               <td>Логин</td>
               <td>Пароль</td>
            </tr>
         </thead>
         {users}
      </table>
   )
}

export default OutputUsers;