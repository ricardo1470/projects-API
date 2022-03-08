const getNotes = (req, res, next) => {
    res.render('notes.html', { title: '@Ricardo1470' });
    //res.send('Hello World! desde el backend');
    console.log("buy");
    next();
}

module.exports = {
    getNotes,
}
