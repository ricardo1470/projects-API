const getPomodoro = (req, res, next) => {
    res.render('pomodoro.html');
    //res.send('Hello World! desde el backend');
    console.log("pomodoro");
    next();
}

module.exports = {
    getPomodoro,
}
