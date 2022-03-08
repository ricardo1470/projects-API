const getNotes = (req, res, next) => {
    res.render('notes.html');
    //res.send('Hello World! desde el backend');
    console.log("notes");
    next();
}

module.exports = {
    getNotes,
}
