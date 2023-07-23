import notFoundTemplate from './notFound.hbs';

export const notFound = ({ Error, wrongWay, back }) => {
  return notFoundTemplate({
    Error: '404',
    wrongWay: 'Не туда попали',
    back: 'назад к чатам',
  });
};