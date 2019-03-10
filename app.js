const createError = require('http-errors');
const express = require('express');
const path = require('path');
const fs = require('fs-extra');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const config = require('./config/config');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const apiRouter = require('./routes/api');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
    res.locals.message = err.message;
    console.log(err.message);
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    /* Do whatever you want with the error caught */
    res.send('error');
});

/* Method called before server starts
 * You can do whatever you want like create folders ...
 */
app.startUp = async () => {
    try {
        await fs.mkdir(config.uploadFolder);
    } catch (err) {
        if (err.code !== 'EEXIST') throw err;
    }
};

app.cleanUp = async () => {
    try {
        await fs.remove(config.uploadFolder)
    } catch (err) {
        if (err.code !== 'ENOENT') throw err;
    }
};

module.exports = app;
