const getJson = (req, res, next) => {
    res.render('json.html');
    //res.send('Hello World! desde el backend');
    console.log("json");
    next();
}

module.exports = {
    getJson,
}
