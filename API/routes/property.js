const { Type } = require('../models/type');
const express = require('express');
const router = express.Router();

const properties = [
    { id: 1, owner: 3, status : "available", price: 30000.00, state: "karen", city: "nairobi", address: "nairobi", type: "villa", bedrooms: 4, bathrooms: 5, created_on: "13/04/2019", image_url : ""  },
    { id: 2, owner: 3, status: "sold", price: 70000.00, state: "westlands", city: "nairobi", address: "nairobi", type: "apartment", bedrooms: 2, bathrooms: 2, created_on: "12/10/2019", image_url: "" },
    { id: 3, owner: 4, status: "available", price: 80000.0, state: "kacyiru", city: "kigali", address: "kigali", type: "villa", bedrooms: 3, bathrooms: 2, created_on: "13/12/2019", image_url: "" },
    { id: 1, owner: 4, status: "sold", price: 100000.0, state: "kimuhurura", city: "kigali", address: "kigali", type: "massionette", bedrooms: 4, bathrooms: 3, created_on: "13/04/2019", image_url: "" },


];


router.get('/', (req, res) => {
    res.send(properties);
});

router.post('/', async (req, res) => {
    const { error } = validateProperty(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const type =  Type.findById(req.body.typeId);
    if (!type) return res.status(400).send('Invalid type.');


    const property = {
        id: properties.length + 1,
        owner: req.body.owner,
        status: req.body.status,
        price: req.body.price,
        state: req.body.state,
        address: req.body.address,
        type: req.body.type,
        bedrooms: req.body.bedrooms,
        bathrooms: req.body.bathrooms,
        created_on: req.body.created_on,
        image_url: req.body.image_url,
    };
    properties.push(property);
    res.send(property);
    
});

router.put('/:id', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const genre = await Genre.findById(req.body.genreId);
    if (!genre) return res.status(400).send('Invalid genre.');

    const movie = await Movie.findByIdAndUpdate(req.params.id,
        {
            title: req.body.title,
            genre: {
                _id: genre._id,
                name: genre.name
            },
            numberInStock: req.body.numberInStock,
            dailyRentalRate: req.body.dailyRentalRate
        }, { new: true });

    if (!movie) return res.status(404).send('The movie with the given ID was not found.');

    res.send(movie);
});

router.delete('/:id', async (req, res) => {
    const movie = await Movie.findByIdAndRemove(req.params.id);

    if (!movie) return res.status(404).send('The movie with the given ID was not found.');

    res.send(movie);
});

router.get('/:id', async (req, res) => {
    const movie = await Movie.findById(req.params.id);

    if (!movie) return res.status(404).send('The movie with the given ID was not found.');

    res.send(movie);
});

module.exports = router; 