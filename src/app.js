const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
let createError = require('http-errors');
const path = require('path');
const favicon = require('serve-favicon');
require('dotenv').config();
//const pgtools = require('pgtools');

// port
const port = process.env.PORT || 9000;

// routes
const routesProject = require('./routes/index');
const routesAPI = require('./routes/api');

const { connectionDB } = require('./Database/database');

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

// database connection


//routers
app.use('/', routesProject);
app.use('/API', routesAPI);

/// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
});

// error handler
app.use( (err, req, res, next) => {
    process.env.NODE_ENV === 'development' ? next(createError(err)) : next();
}
);

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
