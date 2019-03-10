const express = require('express');
const router = express.Router();
const createError = require('http-errors');

const { getCutomApi, setCustomApi } = require('../repositories/customApi.repositoy');

/* We can define middleware for specific router */
router.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
});

router.get('/', (req, res, next) => {
    res.status(200).send("Route is '/' from api file");
});

router.get('/getCutomApi', async (req, res, next) => {
    const { data, status } = await getCutomApi();
    /* In case of something went wrong with fetch */
    console.log('STATUS', status);
    if (status !== 200) {
        next(createError(status, 'getCustomApi problem has occurred'));
    }
    res.status(status).send(data);
});

router.get('/setCustomApi', (req, res, next) => {
    const set = setCustomApi();
    res.status(200).send(set);
});

module.exports = router;
