const express = require('express');
const router = express.Router();

const { getTimes } = require('../controllers/times');
const { getRequest } = require('../controllers/request');
const { getUrls } = require('../controllers/urls');

// crud
const { getCrud } = require('../controllers/crudpostgres');
const { getusers, getinfo, createuser, getuserbyid, updateuser, deleteuser, deleteallusers } = require('../controllers/crud/users');
const{getdata} = require('../controllers/crud/generateData')
const { storeFileIntoDB } = require('../controllers/crud/dataUser');

const { getJobs } = require('../controllers/jobs');
const { getJson } = require('../controllers/json');
const { getNotes } = require('../controllers/notes');
const { getMusical } = require('../controllers/musical');
const { getSudoku } = require('../controllers/sudoku');
const { getCrudmongo } = require('../controllers/crudmongo');
const { getWeather } = require('../controllers/weather');


router.get('/times', getTimes);
router.get('/request', getRequest);
router.get('/urls', getUrls);

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
router.get('/musical', getMusical);
router.get('/sudoku', getSudoku);
router.get('/crudmongo', getCrudmongo);
router.get('/weather', getWeather);



module.exports = router;
