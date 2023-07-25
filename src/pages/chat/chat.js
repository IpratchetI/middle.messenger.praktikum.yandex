import chatTemplate from './chat.hbs';

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