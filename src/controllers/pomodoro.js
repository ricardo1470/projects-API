const getPomodoro = (req, res, next) => {
    res.render('pomodoro.html', { title: '@Ricardo1470' });
    //res.send('Hello World! desde el backend');
    console.log("buy");
    next();
}

module.exports = {
    getPomodoro,
}
