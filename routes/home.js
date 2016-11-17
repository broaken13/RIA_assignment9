const express = require('express');
const router = express.Router();
const BasePugObject = require('../pugObject');

var pugObject = new BasePugObject();

router.all('*', (req, res, next) => {
	pugObject = new BasePugObject();
	next();
});

/* GET home page. */
router.get('/', (req, res, next) => {
	res.render('home', pugObject);
});

router.get('/index', (req, res, next) => {
	res.render('home', pugObject);
});

module.exports = router;
