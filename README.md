messenger
в проекте использованы: handlebars sass typescript esLint styleint

Используемые команды:

npm run start - сборка и запуск сервера 
npm run dev - запуск dev сервера
node_modules/.bin/eslint .  /запуск тестов esLint
node_modules/.bin/eslint . --fix   /запуск правок esLint
npm run stylelint **/*.scss  /запуск линтинга

http://localhost:3000/login - Страница авторизации
http://localhost:3000/register - Страница регистрации
http://localhost:3000/ - Страница чата
http://localhost:3000/changePassword - страница смены пароля
http://localhost:3000/error - страница 404
http://localhost:3000/profile - страница данных профиля
http://localhost:3000/profile/edit - страница изменения данных профиля
http://localhost:3000/profile/change-password - страница изменения пароля

netlify проект - https://component-messenger-practikum-yandex.netlify.app

onClick использован как временное решение для перехода между страницами, пока не будет реализован роутер.
