import changePasswordTemplate from './changePassword.hbs';

export const changePassword = ({  }) => {
  return changePasswordTemplate ({
    display_name: 'Pratchet',
    save: 'Сохранить',
    oldPassword: 'Старый пароль',
    newPassword: 'Новый пароль',
    newPasswordRepeat: 'Новый пароль (еще раз)',

  });
};