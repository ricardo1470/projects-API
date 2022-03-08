const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const createError = require('http-errors');
const path = require('path');
const favicon = require('serve-favicon');

// port
const port = process.env.PORT || 9000;

// routes
const routesProject = require('./routes/index');
const routesAPI = require('./routes/api');

// Initialize the app
const app = express();

// settings
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './public')));
app.use(favicon(path.join(__dirname, './public/img', 'favicon.ico')));

//routers
app.use('/', routesProject);
app.use('/API', routesAPI);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
    res.render('error.html');
});


// error handler
app.use(function(err, req, res) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('servererror.html');
});

// start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// process termination
process.on('SIGTERM', (code) => {
    app.close(() => {
        console.log('Process terminated');
        process.exit(code);
    });
});
