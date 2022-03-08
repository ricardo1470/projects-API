const express = require('express');
const router = express.Router();

const { getBuy } = require('../controllers/buy');
const { getClones } = require('../controllers/clone');
const { getCounter } = require('../controllers/counter');

// crud
const { getCrud } = require('../controllers/crudpostgres');
const { getusers, getinfo, createuser, getuserbyid, updateuser, deleteuser, deleteallusers } = require('../controllers/crud/users');
const{getdata} = require('../controllers/crud/generateData')
const { storeFileIntoDB } = require('../controllers/crud/dataUser');

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

// crud
router.get('/crud', getCrud);
router.get('/crud/users', getusers);
router.get('/crud/view', getinfo);
router.get('/crud/update/:id', getuserbyid);
router.post('/crud/users', createuser);
router.post('/crud/update/:id', updateuser);
router.get('/crud/delete/:id', deleteuser);
router.delete('/crud/users', deleteallusers);
router.get('/crud/create', getdata);
router.get('/crud/data', storeFileIntoDB);

router.get('/jobs', getJobs);
router.get('/json', getJson);
router.get('/notes', getNotes);
router.get('/pomodoro', getPomodoro);
router.get('/tictactoe', getTictactoe);
router.get('/virtual', getVirtual);
router.get('/weather', getWeather);



module.exports = router;
