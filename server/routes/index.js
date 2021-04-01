const express = require('express');
const db = require('../db');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.json({ test: 'test' });
});

router.get('/show', async (req, res, next) => {
    try{
        let result = await db.all();
        res.status(200).json(result);
    } catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/show/:id', async (req, res, next) => {
    try{
        let result = await db.one(req.params.id);
        res.status(200).json(result);
    } catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});

router.post('/show', async (req, res, next) => {
    try{
        let result = await db.create(req.body.title, req.body.body);
        res.status(200).json(result);
    } catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});

router.put('/show/:id', async (req, res, next) => {
    try{
        let result = await db.update(req.params.id, req.body.title, req.body.body);
        res.status(200).json(result);
    } catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});

router.delete('/show/:id', async (req, res, next) => {
    try{
        let result = await db.delete(req.params.id);
        res.status(200).json(result);
    } catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = router;