const getVirtual = (req, res, next) => {
    res.render('virtual.html');
    //res.send('Hello World! desde el backend');
    console.log("virtual");
    next();
}

module.exports = {
    getVirtual,
}
