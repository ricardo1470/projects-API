const getCrud = (req, res, next) => {
    res.render('crudpostgres.html');
    //res.send('Hello World! desde el backend');
    console.log("crudpostgres");
    next();
}

module.exports = {
    getCrud,
}
