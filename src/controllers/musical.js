const getMusical = (req, res, next) => {
    res.render('musical.html');
    //res.send('Hello World! desde el backend');
    console.log("Musical Chat");
    next();
}

module.exports = {
    getMusical,
}
