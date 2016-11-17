const express = require('express');
const router = express.Router();
const BasePugObject = require('../pugObject');
const MongoClient = require('mongodb').MongoClient;
const mongoUrl = 'mongodb://localhost:27017/RIA-final-project';

var pugObject = new BasePugObject();

router.all('*', (req, res, next) => {
	pugObject = new BasePugObject();
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

router.get('/edit/:id', (req, res, next) => {
	res.render('list/edit', pugObject);
});

router.get('/api/lists', (req, res, next) => {
	MongoClient.connect(mongoUrl, (err, db) => {
		if (err)
			res.status(500).send('Unable to make db connection');

		db.collection('lists').find().toArray((err, docs) => {
			if (err)
				res.status(500).send('Error fetching records');
			res.json(docs);
		});
	});
});

module.exports = router;