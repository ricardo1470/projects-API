const getTimes = (req, res, next) => {
    res.render('times.html');
    //res.send('Hello World! desde el backend');
    console.log("times");
    next();
}

module.exports = {
    getTimes,
}
