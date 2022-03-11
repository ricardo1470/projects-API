const getSudoku = (req, res, next) => {
    res.render('sudoku.html');
    //res.send('Hello World! desde el backend');
    console.log("Sudoku Solver");
    next();
}

module.exports = {
    getSudoku,
}
