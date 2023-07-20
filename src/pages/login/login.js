import Handlebars from 'handlebars';
import login from './login.hbs';
import inputLogin from './src/partials/inputLogin.hbs';

Handlebars.registerPartial('inputLogin', inputLogin);

const root = document.querySelector('#app');

const result = login({
    enter: 'Вход',
});
        
root.innerHTML = result;



// const text = tpl({props});
// const text = tpl({ 
//     text: 'some text'
//  });
// const login = new login (
//     'div',
//     {
//         text: 'some text'
//     }
// );