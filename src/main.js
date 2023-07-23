import tpl from './main.hbs';
import login from './pages/login/login';
import register from './pages/register/register';
console.log(window.location.href)

document.getElementById('app').innerHTML = tpl({ 
    header: 'Список страниц',
    elOne: 'Авторизация',
    elTwo: 'Регистрация',
    elThree: 'Cписок чатов',
    elFour: 'Настройки пользователя',
    page404: 'Cтраница 404'
});

const root = document.querySelector('#app');

const handleRoute = () => {
    const url = window.location.pathname;
  
    if (url === '/login') {
      renderLogin();
    } else if (url === '/register') {
      renderRegister();
    } else {
      renderNotFound();
    }
  };
  window.addEventListener('popstate', handleRoute);

// Initial rendering when the page loads
handleRoute();

// if(window.location.href == 'login') {
//     console.log('111')
//     root.innerHTML = login ({
//         headerLogin: 'Вход',
//         inputLogin: 'Логин',
//     });
// } else if (window.location.href == 'register'){
//     console.log('222')
//     root.innerHTML = register ({
//         register: 'Регистрация'
//     });
// };




// window.addEventListener("DOMContentLoaded", () => {
//     document.getElementById('app').innerHTML = tpl({ 
//         header: 'Список страниц',
//         elOne: 'Авторизация',
//         elTwo: 'Регистрация',
//         elThree: 'Cписок чатов',
//         elFour: 'Настройки пользователя',
//         page404: 'Cтраница 404'
//     });
// });



// import login from './pages/login/login.hbs'
// console.log(222)

// window.addEventListener("DOMContentLoaded", () => {
//     document.getElementById('loginPage').innerHTML = login({ 
//         headerLogin: 'Вход',
        
//     });
// });




// //ROUTER
// let routes = {};
// let templates = {};

// let app_div = document.getElementById('app');


// //DOM element 
// function login() {
//     let div = document.createElement('div');
//     let link = document.createElement('a');
//     link.href = '#/about';
//     link.innerText = 'About';

//     div.innerHTML = '<h1>Login</h1>';
//     div.appendChild(link);

//     app_div.appendChild(div);
// };

// function about() {
//     let div = document.createElement('div');
//     let link = document.createElement('a');
//     link.href = '#/src/login/login.js';
//     link.innerText = 'Login';

//     div.innerHTML = '<h1>About</h1>';
//     div.appendChild(link);

//     app_div.appendChild(div);
// };
// //определение маршрутов
// function route (path, template) {
//     if (typeof template === 'function') {
//         return routes[path] = template;
//     }
//     else if (typeof template === 'string') {
//         return routes[path] = templates[template];
//     } else {
//         return;
//     };
// };

// //регистрация функции которая действует как механизм шаблонов
// //Функция шаблона принимает два аргумента:
// // name: имя шаблона.
// // templateFunction: функция, которая создаст элементы DOM.

// function template (name, templateFunction) {
//     return templates[name] = templateFunction;
// };

// //сопоставление маршрута с шаблоном
// template('login', function(){
//     login();
// });

// template('about', function(){
//     about();
// });

// //маршрут к отображению шаблона
// route('/', 'login');
// route('/about', 'about');

// //обнаруживаем и разрешаем зменения в URL
// function resolveRoute(route) {
//     try {
//         return routes[route];
//     } catch (e) {
//         throw new Error(`Route ${route} not found`);
//     };
// };

// //функция которая извлекает маршрут из хэша URL и вызывает функцию шаблона
// function router(evt) {
//     let url = window.location.hash.slice(1) || '/';
//     let route = resolveRoute(url);

//     route();
// };

// //
// window.addEventListener('load', router);
// window.addEventListener('hashchange', router);