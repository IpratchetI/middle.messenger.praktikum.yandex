import changePasswordTemplate from './changePassword.hbs';
import changePasswordAvatarIco from '../../styles/icons/avatar-icon.png';

export const changePassword = ({  }) => {
  return changePasswordTemplate ({
    avatarIco: changePasswordAvatarIco,
    display_name: 'Pratchet',
    save: 'Сохранить',
    oldPassword: 'Старый пароль',
    newPassword: 'Новый пароль',
    newPasswordRepeat: 'Новый пароль (еще раз)',

  });
};
