import {rerenderEntireDOM} from '../render';
// Main database
export let state = {
   loginPage: {
      adminData:
         {
            login: 'Andrey',
            password: 'Хочу работу)'
         }
   },
   contentPage: {
      changeParametersPage: [],
      allUsers: [
         {
            fullName: 'Петров Петя Петрович',
            position: 'webDesigner',
            phone: ' +3 8(088) 987 25 24',
            login: 'Petrov',
            password: '88888888'
         },
         {
            fullName: 'Иванов Иван Иванович',
            position: 'webDeveloper',
            phone: ' +3 8(077) 288 35 75',
            login: 'Ivanov',
            password: '7777777'
         },
         {
            fullName: 'Гена Генадий Геннадьевич',
            position: 'CEO',
            phone: ' +3 8(066) 154 85 56',
            login: 'Alexandro',
            password: '666666'
         },
      ],
      settings: [
         {
            inputIn: ''
         }
      ]
   }
}

let adminData = state.loginPage.adminData;
let newData = state.contentPage.allUsers;

// Enter login form
export let enterLogin = (logEnter, history) => {

   if (adminData.login === logEnter.login && adminData.password === logEnter.password) {
      return history.push('/content/change-parameters')
   } else {
      history.push('/registration')
   }

   for (let i = 0; i < newData.length; i++) {
      if (newData[i].login === logEnter.login && newData[i].password === logEnter.password) {
         console.log(newData[i]);
         return history.push('/content/change-parameters');

      } else {
         history.push('/registration')
      }
   }
}

//function for setting, writing value inputIn in state and save in localStorage, render entire DOM
export let updateInputValue = (inputValue) => {
   state.contentPage.settings = [];

   let newInputValue = {
      inputIn: inputValue
   }
   state.contentPage.settings.push(newInputValue);
   localStorage.setItem('inputIn', `${newInputValue.inputIn}`);
   rerenderEntireDOM(state);
}

export default state;