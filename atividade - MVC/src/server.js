const express = require("express");
const Thought = require("./models/Thought");
require("./database/index");

const app = express();
app.use(express.json());

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');

app.set("views", path.join(__dirname, "views/"));

app.use(express.static(__dirname + '/public'));

handlebars.create({
    partialsDir: path.join(__dirname, "views/partials")
});

app.use(thoughtRoutes);
app.use(usersRoutes);

app.listen(3333, console.log ("Servidor está sendo executado na porta 3333"));