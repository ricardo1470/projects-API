const getClones = (req, res, next) => {
    res.render('clones.html', { title: '@Ricardo1470' });
    //res.send('Hello World! desde el backend');
    console.log("clones");
    next();
}

module.exports = {
    getClones,
}
