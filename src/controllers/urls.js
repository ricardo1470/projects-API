const getUrls = (req, res, next) => {
    res.render('urls.html');
    //res.send('Hello World! desde el backend');
    console.log("urls");
    next();
}

module.exports = {
    getUrls,
}
