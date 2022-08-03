
var express = require('express');
const port = 3000;
var app = express();

app.set('veiw engine', 'jade');
app.get('/', (req, res) => {
    // console.log('req', req);
    // console.log('res', res);
    console.log('hello world.');
});

var server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});