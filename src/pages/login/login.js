import loginTemplate from './login.hbs';

export const login = ({ headerLogin, inputLogin }) => {
  return loginTemplate({
    headerLogin: 'Вход',
    inputLogin: 'Логин',
    inputPassword: 'Пароль',
    buttonEnter: 'Войти',
    newAccaunt: 'Нет аккаунта?'
  });
};
