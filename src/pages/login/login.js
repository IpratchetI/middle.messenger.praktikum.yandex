import login from './login.hbs';
import './login.scss'; // если надо

export default ({}) => {
    return login({
        headerLogin: 'Вход',
        inputLogin: 'Логин',
        
    });
}

// document.getElementById('app').innerHTML = tpl({ 
//     headerlogin: 'Вход',
    
// });

// console.log(window.location.href)
