import React from "react";
import UserItem from "./UserItem/UserItem";
import modClass from "./OutputUsers.module.css"

const OutputUsers = (props) => {

// Object state.js
   let users = props.allUsers.map(user => {
      return (
         <UserItem fullName={user.fullName}
                   position={user.position}
                   phone={user.phone}
                   login={user.login}
                   password={user.password}/>
      )
   })

   // Object localStorage
   let users2 = JSON.parse(localStorage.getItem('users')).map(user2 => {
      return (
         <UserItem fullName={user2.fullName}
                   position={user2.position}
                   phone={user2.phone}
                   login={user2.login}
                   password={user2.password}/>
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
         <tbody>
         <tr>
            <td>Данные из state</td>
         </tr>
         {users}
         </tbody>
         <tfoot>
         <tr>
            <td>Данные из localStorage</td>
         </tr>
         {users2}
         </tfoot>
      </table>
   )
}

export default OutputUsers;