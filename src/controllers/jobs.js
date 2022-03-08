const getJobs = (req, res, next) => {
    res.render('jobs.html');
    //res.send('Hello World! desde el backend');
    console.log("jobs");
    next();
}

module.exports = {
    getJobs,
}
