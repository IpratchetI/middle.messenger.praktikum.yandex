const express = require ('express');
const app = express();
const PORT = 3000;
app.use(express.static('./'));
app.listen(PORT, function (){
    console.log('Example app listening on port ${PORT}!');
});



// const express = require('express');
// const app = express();
// // const expbs = require('MIDDLE.MESSENGER.PRAKTIKUM.YANDEX')

// const PORT = 3000;

// app.use(express.static('./'));

// // app.engine('handlebars', expbs());
// app.set("view engine", "handlebars");

// //routing
// // app.get('/', (req, res) => {
// //   res.render('index');
// // });

// app.listen(PORT, function () {
//   console.log(`Server is starting at port ${PORT}!`);
// }); 
