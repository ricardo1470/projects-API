const getCounter = (req, res, next) => {
    res.render('counter.html');
    //res.send('Hello World! desde el backend');
    console.log("counter");
    next();
}

module.exports = {
    getCounter,
}
