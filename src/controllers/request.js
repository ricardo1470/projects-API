const getRequest = (req, res, next) => {
    res.render('request.html');
    //res.send('Hello World! desde el backend');
    console.log("request");
    next();
}

module.exports = {
    getRequest,
}
