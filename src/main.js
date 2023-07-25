import { login } from './pages/login/login.js';
import { register } from './pages/register/register.js';
import mainTemplate from './main.hbs';
import { notFound } from './pages/notFound/notFound.js';
import { chat } from './pages/chat/chat.js';
import { userOpt } from './pages/userOpt/userOptions.js';
import { changePassword } from './pages/changePassword/changePassword.js';
import './main.scss'; 

const root = document.getElementById('app');

const main = ({ headerLogin, inputLogin }) => {
    return mainTemplate({
      header: 'Вход',
    });
  };

const handleRoute = () => {
  const url = window.location.pathname;

    if (url === '/login') {
    root.innerHTML = login ({
      pageTitle: 'Login Page',
      content: login({
        headerLogin: 'Вход',
        inputLogin: 'Логин',
      }),
    });
    } else if (url === '/register') {
    root.innerHTML = register ({
      pageTitle: 'Registration Page',
      content: register({
        register: 'Регистрация',
      }),
    });
    } else if (url === '/') {
    root.innerHTML = mainTemplate ({
      pageTitle: 'Main Page',
      content: main({
        header: 'Вход',
      }),
    });
    } else if (url === '/notFound') {
        root.innerHTML = notFound ({
          pageTitle: '404',
          content: notFound ({
            Error: '404',
            wrongWay: 'Не туда попали',
            back: 'назад к чатам',
          }),
        });
    } else if (url === '/chat') {
        root.innerHTML = chat ({
          pageTitle: 'chat',
          content: chat ({
            profile: 'Профиль',
            search: 'Поиск',
          }),
        });
    } else if (url === '/userOpt') {
      root.innerHTML = userOpt ({
        pageTitle: 'userOpt',
        content: userOpt ({
          display_name: 'Pratchet',
          email: 'pochta@yandex.ru',
          first_name: 'Александр',
          second_name: 'Царьков',
          phone: '+7(903)-333-33-33', 
        }),
      });
  } else if (url === '/changePassword') {
    root.innerHTML = changePassword ({
      pageTitle: 'changePassword',
      content: changePassword ({
        
      }),
    });
}
};

const handleButtonClick = (event) => {
    const target = event.target;
  
    if (target.tagName === 'BUTTON') {
      const destination = target.getAttribute('data-destination');
      if (destination) {
        window.history.pushState(null, null, destination);
        handleRoute();
      }
    }
  };

// const handleButtonClick = (event) => {
//   const target = event.target;

//   if (target.tagName === 'BUTTON') {
//     const destination = target.getAttribute('data-destination');
//     if (destination) {
//       window.history.pushState(null, null, destination);
//       handleRoute();
//       event.preventDefault();
//     }
//   }
// };

document.addEventListener('click', handleButtonClick);

window.addEventListener('popstate', handleRoute);

handleRoute();