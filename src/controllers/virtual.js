const getVirtual = (req, res, next) => {
    res.render('virtual.html', { title: '@Ricardo1470' });
    //res.send('Hello World! desde el backend');
    console.log("buy");
    next();
}

module.exports = {
    getVirtual,
}
