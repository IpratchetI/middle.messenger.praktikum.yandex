import chatTemplate from './chat.hbs';

export const chat = ({ }) => {
  return chatTemplate({
    profile: 'Профиль',
    search: 'Поиск',
  });
};