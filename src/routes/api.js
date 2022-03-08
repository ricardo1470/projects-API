const express = require('express');
const router = express.Router();

const { getBuy } = require('../controllers/buy');
const { getClones } = require('../controllers/clone');
const { getCounter } = require('../controllers/counter');
const { getJobs } = require('../controllers/jobs');
const { getJson } = require('../controllers/json');
const { getNotes } = require('../controllers/notes');
const { getPomodoro } = require('../controllers/pomodoro');
const { getTictactoe } = require('../controllers/tictactoe');
const { getVirtual } = require('../controllers/virtual');
const { getWeather } = require('../controllers/weather');


router.get('/buy', getBuy);
router.get('/clone', getClones);
router.get('/counter', getCounter);
router.get('/jobs', getJobs);
router.get('/json', getJson);
router.get('/notes', getNotes);
router.get('/pomodoro', getPomodoro);
router.get('/tictactoe', getTictactoe);
router.get('/virtual', getVirtual);
router.get('/weather', getWeather);



module.exports = router;
