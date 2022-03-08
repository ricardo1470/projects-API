const getBuy = (req, res, next) => {
    res.render('buys.html', { title: '@Ricardo1470' });
    //res.send('Hello World! desde el backend');
    console.log("buy");
    next();
}

module.exports = {
    getBuy,
}
