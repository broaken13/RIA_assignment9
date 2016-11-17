const express = require('express');
const router = express.Router();
const PugObject = require('../pugObject');

var pugObject = new PugObject();

router.all('*', (req, res, next) => {
	pugObject = new PugObject();
	next();
});

router.get('/', (req, res, next) => {
	res.render('list/lists', pugObject);
});

router.get('/index', (req, res, next) => {
	res.render('list/lists', pugObject);
});

router.get('/create', (req, res, next) => {
	res.render('list/edit', pugObject);
});

router.get('/edit', (req, res, next) => {
	res.render('list/edit', pugObject);
});

module.exports = router;