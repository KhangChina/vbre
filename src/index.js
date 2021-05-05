const express = require('express');
const morgan = require('morgan');
const path = require('path');
const handlebars = require('express-handlebars');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')))
    //http log
app.use(morgan('combined'));
//template eng

app.engine('hbs', handlebars({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/home', (req, res) => {
    res.render("home");
});
app.get('/project', (req, res) => {
    res.render("project");
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});