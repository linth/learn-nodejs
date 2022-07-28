const express = require("express");
const app = express();
const port = 3000;

const main = require('./main.js');
app.set('view engine', 'ejs');


app.use(express.urlencoded({
    extended: false,
}));
app.use(express.json());


// for get method.
app.get('/', (req, res) => {
    // 模組化架構
    main.showMain(req, res);
});


// TODO: change to post method.
app.get('/login', (req, res) => {
    main.login(req, res);
})


app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});