import chatTemplate from './chat.hbs';
import imgArrowRight from '../../styles/icons/arrowRight.svg';
import imgAvatar from '../../styles/icons/avatar-icon.png';
import imgOptionsIco from '../../styles/icons/options-icon.png';
import imgmessagePic from '../../styles/icons/message-pictute.png';
import imgAddFileIco from '../../styles/icons/add-file.svg';
import imgSendMessageIco from '../../styles/icons/send-arrow.svg';


export const chat = ({ }) => {
  return chatTemplate({
    sendArrowIco: imgSendMessageIco,
    addFile: imgAddFileIco,
    messagePic: imgmessagePic,
    options: imgOptionsIco,
    avatarPic: imgAvatar,
    arrowRight: imgArrowRight,
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