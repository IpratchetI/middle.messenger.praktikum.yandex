import userOptTemplate from './userOptions.hbs';

export const userOpt = ({ second_name, display_name, email, phone }) => {
  return userOptTemplate({
    display_name: 'Pratchet',
    userEmail: 'Почта',
    email: 'pochta@yandex.ru',
    login: 'Логин',
    myLogin: 'Какой-то логин',
    firstName: 'Имя',
    first_name: 'Александр',
    secondName: 'Фамилия',
    second_name: 'Царьков',
    displayName: 'Имя в чате',
    phoneNumber: 'Телефон',
    phone: '+7(903)-333-33-33', 
    saveProfile: 'Сохранить',
  });
};