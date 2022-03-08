const getInit = (req, res, next) => {
    res.render('index.html', { title: '@Ricardo1470' });
    //res.send('Hello World! desde el backend');
    console.log("index");
    next();
};

module.exports = {
    getInit,
}
