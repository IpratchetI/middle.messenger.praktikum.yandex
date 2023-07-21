import tpl from './login.hbs';

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById('app').innerHTML = tpl({ 
        header: 'Вход',
        elOne: 'Авторизация',
        elTwo: 'Регистрация',
        elThree: 'Cписок чатов',
        elFour: 'Настройки пользователя',
        page404: 'Cтраница 404'
    });
});