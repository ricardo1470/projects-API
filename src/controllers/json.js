const getJson = (req, res, next) => {
    res.render('json.html', { title: '@Ricardo1470' });
    //res.send('Hello World! desde el backend');
    console.log("buy");
    next();
}

module.exports = {
    getJson,
}
