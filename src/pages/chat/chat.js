import chatTemplate from './chat.hbs';
// import img from '/Users/alexandrtsarkov/Documents/Praktikum/YandexProject/middle.messenger.praktikum.yandex/middle.messenger.praktikum.yandex/src/styles/icons/arrow-back.svg';

export const chat = ({ }) => {
  return chatTemplate({
    profile: 'Профиль',
    search: 'Поиск',
    displayName: 'Семен Петров',
    displayNameAlt: 'Salvatore',
    messageDate: '10.02.2023',
    messageTime: '10:15',
    chatMessagePic: 'Изображение',
    chatMessageLarge: 'реактивный объект с идентичной структурой ввода данных формы но с добавленными метаданными в каждое поле',
    messageCounter: '10',

  });
};