import {rerenderEntireDOM} from '../render';
export let state = {
   contentPage: {
      changeParametersPage: [],
      allUsers: [
         {
            fullName: 'Петров Петя Петрович',
            position: 'webDesigner',
            phone: ' +3 8(088) 987 25 24',
            login: 'Petrov',
            password: '88888888',
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

let newData = state.contentPage.allUsers;

for (let i = 0; i < newData.length; i++ ) {
   localStorage.setItem(`users${i}`, JSON.stringify(newData[i]))
   console.log(newData[i].login);
   console.log(newData[i].password);
}

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