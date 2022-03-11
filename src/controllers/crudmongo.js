const getCrudmongo = (req, res, next) => {
    res.render('crudmongo.html');
    //res.send('Hello World! desde el backend');
    console.log("crudmongo");
    next();
}

module.exports = {
    getCrudmongo,
}
