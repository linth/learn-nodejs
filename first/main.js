

exports.showMain = function showMain(req, res) {
    // res.send('hello world.');

    // 傳入參數 (ex: http://localhost:3000/?age=10)
    // for get method.
    const age = req.query.age;

    // EJS 框架
    res.render('index', {
        name: 'george',
        names: ['may', 'peter', 'JJ', 'Haha'],
        age: age,
    }); // ejs.
}

exports.login = function logIn(req, res) {
    // TODO: change to post method. 使用 body-parser
    // for post method.
    // const userName = req.body.userName;
    // const pwd = req.body.pwd;

    res.render('login', {
        // userName: userName,
        // pwd: pwd,
    }); // ejs.
}