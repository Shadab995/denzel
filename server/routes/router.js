const express = require('express');
const movies = require('../models/movies.js')

const router = new express.Router();
console.log("going inside routereeeeeeeeeeeeeeeeeeeeeee")
router.post('/denzel/add', async (req, res) => {
    const Movies = new movies(req.body);
    console.log(Movie);

    try {
        await Movies.save()
        res.status(201).send()
    } catch(error) {
        res.status(400).send(error)
    }
})

router.get('/denzel/movies', async (req, res) => {
    try {
        const Movies = await movies.find({});
        // console.log(Movies)
        res.status(200).send(Movies);
    } catch(error) {
        res.status(404).send(error)
    }
})

router.get('/denzel/movies/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const Movies = await movies.findOne({ _id });
        // console.log(Movies)
        res.status(200).send(Movies);
    } catch (error) {
        res.status(404).send(error)
    }
})

router.get('/denzel/movie/watch', async (req, res) => {
    try {
        const Movies = await movies.find({}).where('metascore').gt(70);
        // console.log(Movies)
        res.status(200).send(Movies);
    } catch (error) {
        res.status(404).send(error)
    }
})

module.exports = router;