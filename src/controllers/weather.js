const getWeather = (req, res, next) => {
    res.render('weather.html');
    //res.send('Hello World! desde el backend');
    console.log("weather");
    next();
}

module.exports = {
    getWeather,
}
