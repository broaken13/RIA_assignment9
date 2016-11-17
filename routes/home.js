const express = require('express');
const router = express.Router();
const PugObject = require('../pugObject');

var pugObject = new PugObject();

router.all('*', (req, res, next) => {
	pugObject = new PugObject();
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
