import registerTemplate from './register.hbs';

export const register = ({ headerLogin, inputLogin }) => {
  return registerTemplate({
    headerRegister: 'Регистрация',
    inputMail: 'Почта',
    inputLogin: 'Логин',
    inputFirstName: 'Имя',
    inputSecondName: 'Фамилия',
    inputPhone: 'Телефон',
    inputPassword: 'Пароль',
    inputPasswordRepeat: 'Повторите пароль',
    registerButton: 'Регистрация'
  });
};
