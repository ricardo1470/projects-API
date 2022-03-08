const getCrud = (req, res, next) => {
    res.render('crudpostgres.html', { title: '@Ricardo1470' });
    //res.send('Hello World! desde el backend');
    console.log("buy");
    next();
}

module.exports = {
    getCrud,
}
