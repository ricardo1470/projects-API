const getCounter = (req, res, next) => {
    res.render('counter.html', { title: '@Ricardo1470' });
    //res.send('Hello World! desde el backend');
    console.log("buy");
    next();
}

module.exports = {
    getCounter,
}
