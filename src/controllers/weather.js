const getWeather = (req, res, next) => {
    res.render('weather.html', { title: '@Ricardo1470' });
    //res.send('Hello World! desde el backend');
    console.log("buy");
    next();
}

module.exports = {
    getWeather,
}
