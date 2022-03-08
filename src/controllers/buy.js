const getBuy = (req, res, next) => {
    res.render('buys.html');
    //res.send('Hello World! desde el backend');
    console.log("buy");
    next();
}

module.exports = {
    getBuy,
}
