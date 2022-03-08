const getJobs = (req, res, next) => {
    res.render('jobs.html', { title: '@Ricardo1470' });
    //res.send('Hello World! desde el backend');
    console.log("buy");
    next();
}

module.exports = {
    getJobs,
}
