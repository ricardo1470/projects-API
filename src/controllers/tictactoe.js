const getTictactoe = (req, res, next) => {
    res.render('tictactoe.html');
    //res.send('Hello World! desde el backend');
    console.log("tictactoe");
    next();
}

module.exports = {
    getTictactoe,
}
