const getTictactoe = (req, res, next) => {
    res.render('tictactoe.html', { title: '@Ricardo1470' });
    //res.send('Hello World! desde el backend');
    console.log("buy");
    next();
}

module.exports = {
    getTictactoe,
}
