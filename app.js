const express = require('express');
const exphbs = require('express-handlebars');

const routes = require('./routes/');

const app = express();

// подключение хендлбарс
app.engine("hbs", exphbs(
  {
    layoutsDir: "views/layouts", 
    defaultLayout: "layout",
    extname: "hbs"
  }
));
app.set("view engine", "hbs");

app.use(express.urlencoded({ extended: false }));

// рутс
app.use('/', routes.usersRoutes);

// запуск сервера 
const PORT = 3030;

app.listen(PORT, () => {
  console.log(`Works on port: ${PORT}`)
});

